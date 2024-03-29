import Cookies from 'js-cookie';
import * as dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCart } from 'react-use-cart';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

//internal import
import useAsync from '@hooks/useAsync';
import { UserContext } from '@context/UserContext';
import CouponServices from '@services/CouponServices';
import OrderServices from '@services/OrderServices';
import { notifyError, notifySuccess } from '@utils/toast';

const useCheckoutSubmit = () => {
  const {
    state: { userInfo },
    dispatch,
  } = useContext(UserContext);

  const [error, setError] = useState('');
  const [total, setTotal] = useState('');
  const [couponInfo, setCouponInfo] = useState({});
  const [minimumAmount, setMinimumAmount] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [discountProductType, setDiscountProductType] = useState('');
  const [isCheckoutSubmit, setIsCheckoutSubmit] = useState(false);

  const { isEmpty, emptyCart, items, cartTotal, setItems } = useCart();

  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const couponRef = useRef('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { data } = useAsync(CouponServices.getAllCoupons);

  useEffect(() => {
    if (Cookies.get('couponInfo')) {
      const coupon = JSON.parse(Cookies.get('couponInfo'));
      setCouponInfo(coupon);
      setDiscountPercentage(coupon.discountPercentage);
      setMinimumAmount(coupon.minimumAmount);
    }
  }, []);

  //remove coupon if total value less then minimum amount of coupon
  useEffect(() => {
    if (minimumAmount - discountAmount > total || isEmpty) {
      setDiscountPercentage(0);
      Cookies.remove('couponInfo');
    }
  }, [minimumAmount, total]);

  //calculate total and discount value
  useEffect(() => {
    const result = items?.filter((p) => p.type === discountProductType);
    const discountProductTotal = result?.reduce(
      (preValue, currentValue) => preValue + currentValue.itemTotal,
      0
    );
    let totalValue = '';
    let subTotal = (cartTotal).toFixed(2);
    let discountAmount = discountProductTotal * (discountPercentage / 100);
    totalValue = subTotal - discountAmount;
    setDiscountAmount(discountAmount);
    setTotal(totalValue);
  }, [cartTotal, discountPercentage]);

  //if not login then push user to home page
  useEffect(() => {
    if (!userInfo) {
      router.push('/');
    }

    setValue('firstName');
    setValue('lastName');
    setValue('contact');
    setValue('email');
  }, []);

  const submitHandler = async (data) => {
    setIsCheckoutSubmit(true);
    const orderData = {
      name: `${data.firstName} ${data.lastName}`,
      contact: data.contact,
      email: data.email,
      paymentMethod: data.paymentMethod,
      status: 'Pending',
      cart: items,
      subTotal: cartTotal,
      discount: discountAmount,
      total: total,
    };
    if (data.paymentMethod === 'Card') {
      if (!stripe) {
        return;
      }
      const cardElement = elements.getElement(CardElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error && !paymentMethod) {
        setError(error.message);
      } else {
        setError('');
        const orderData = {
          ...orderInfo,
          cardInfo: paymentMethod,
        };

        OrderServices.addOrder(orderData)
          .then((res) => {
            router.push(`/order/${res._id}`);
            notifySuccess('Your Order Confirmed!');
            Cookies.remove('couponInfo');
            emptyCart();
            sessionStorage.removeItem('products');
            setIsCheckoutSubmit(false);
          })
          .catch((err) => {
            notifyError(err.message);
            setIsCheckoutSubmit(false);
          });
      }
    }
    if (data.paymentMethod === 'Cash') {
      OrderServices.addOrder(orderData)
        .then((res) => {
          router.push(`/order/${res._id}`);
          notifySuccess('Your Order Confirmed!');
          Cookies.remove('couponInfo');
          sessionStorage.removeItem('products');
          emptyCart();
          setIsCheckoutSubmit(false);
        })
        .catch((err) => {
          notifyError(err.message);
          setIsCheckoutSubmit(false);
        });
    }
  };

  const handleCouponCode = (e) => {
    e.preventDefault();

    if (!couponRef.current.value) {
      notifyError('Please Input a Coupon Code!');
      return;
    }
    const result = data.filter(
      (coupon) => coupon.couponCode === couponRef.current.value
    );

    if (result.length < 1) {
      notifyError('Please Input a Valid Coupon!');
      return;
    }

    if (dayjs().isAfter(dayjs(result[0]?.endTime))) {
      notifyError('This coupon is not valid!');
      return;
    }

    if (total < result[0]?.minimumAmount) {
      notifyError(
        `Minimum ${result[0].minimumAmount} USD required for Apply this coupon!`
      );
      return;
    } else {
      notifySuccess(
        `Your Coupon ${result[0].title} is Applied on ${result[0].productType}!`
      );
      setMinimumAmount(result[0]?.minimumAmount);
      setDiscountProductType(result[0].productType);
      setDiscountPercentage(result[0].discountPercentage);
      dispatch({ type: 'SAVE_COUPON', payload: result[0] });
      Cookies.set('couponInfo', JSON.stringify(result[0]));
    }
  };

  return {
    handleSubmit,
    submitHandler,
    register,
    errors,
    showCard,
    setShowCard,
    error,
    couponInfo,
    couponRef,
    discountPercentage,
    discountAmount,
    total,
    isEmpty,
    items,
    cartTotal,
    isCheckoutSubmit,
    setItems,
    handleCouponCode
  };
};

export default useCheckoutSubmit;
