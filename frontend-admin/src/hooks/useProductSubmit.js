import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import ProductServices from '../services/ProductServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useProductSubmit = (id) => {
  const [imageUrl, setImageUrl] = useState('');
  const [children, setChildren] = useState('');
  const [tag, setTag] = useState([]);
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!imageUrl) {
      notifyError('Image is required!');
      return;
    }
    if (data.originalPrice < data.salePrice) {
      notifyError('SalePrice must be less then or equal of product price!');
      return;
    }

    const productData = {
      title: data.title,
      slug: data.slug
        ? data.slug
        : data.title.toLowerCase().replace('&', '').split(' ').join('-'),
      description: data.description,
      parent: data.parent,
      children: data.children,
      type: data.type,
      // unit: data.unit,
      quantity: data.quantity,
      originalPrice: data.originalPrice,
      price: data.salePrice ? data.salePrice : data.originalPrice,
      discount:
        data.salePrice > 0 &&
        ((data.originalPrice - data.salePrice) / data.originalPrice) * 100,
      image: imageUrl,
      tag: JSON.stringify(tag),
      active: data.active,
    };

    if (id) {
      ProductServices.updateProduct(id, productData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      ProductServices.addProduct(productData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue('sku');
      setValue('title');
      setValue('slug');
      setValue('description');
      setValue('parent');
      setValue('children');
      setValue('type');
      // setValue('unit');
      setValue('quantity');
      setValue('originalPrice');
      setValue('salePrice');
      setValue('active');
      setImageUrl('');
      setChildren('');
      setTag([]);
      clearErrors('sku');
      clearErrors('title');
      clearErrors('slug');
      clearErrors('description');
      clearErrors('parent');
      clearErrors('children');
      clearErrors('type');
      // clearErrors('unit');
      clearErrors('quantity');
      clearErrors('originalPrice');
      clearErrors('salePrice');
      clearErrors('active');
      return;
    }

    if (id) {
      ProductServices.getProductById(id)
        .then((res) => {
          if (res) {
            setValue('sku', res.sku);
            setValue('title', res.title);
            setValue('parent', res.parent);
            setValue('slug', res.slug);
            setValue('description', res.description);
            setValue('children', res.children);
            setValue('type', res.type);
            // setValue('unit', res.unit);
            setValue('quantity', res.quantity);
            setValue('originalPrice', res.originalPrice);
            setValue('salePrice', res.price);
            setTag(JSON.parse(res.tag));
            setImageUrl(res.image);
            setValue('active', res.active);
          }
        })
        .catch((err) => {
          notifyError('There is a server error!');
        });
    }

  }, [id, setValue, isDrawerOpen]);

  useEffect(() => {
    setChildren(watch('children'));
  }, [watch, children]);

  return {
    register,
    watch,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    tag,
    setTag,
  };
};

export default useProductSubmit;