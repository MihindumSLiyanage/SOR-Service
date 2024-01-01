import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import ReservationServices from '../services/ReservationServices'
import { notifyError, notifySuccess } from '../utils/toast';

const useRevProductSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    onSubmit,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data)
  //   const productData = {
  //     title: data.title,
  //     parent: data.parent,
  //     quantity: data.quantity,
  //     price: data.originalPrice,
  //   };

  //   if (id) {
  //     ReservationServices.updateProduct(id, productData)
  //       .then((res) => {
  //         setIsUpdate(true);
  //         notifySuccess(res.message);
  //       })
  //       .catch((err) => notifyError(err.message));
  //     closeDrawer();
  //   } else {
  //     console.log("productData = " + productData)
  //     // reservation id, 
  //     // {
  //     //  product id, qutatity
  //     // }
  //     ReservationServices.addProduct(researverionId, productId, quantity)
  //       .then((res) => {
  //         setIsUpdate(true);
  //         notifySuccess(res.message);
  //       })
  //       .catch((err) => notifyError(err.message));
  //     closeDrawer();
  //   }
  // };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue('title');
      setValue('parent');
      setValue('quantity');
      setValue('price');
      clearErrors('title');
      clearErrors('parent');
      clearErrors('quantity');
      clearErrors('price');
      return;
    }
    if (id) {
      console.log("proid = " + id)
      ReservationServices.getProductById(id)
        .then((res) => {
          console.log(res.title)
          console.log(res.parent)
          console.log(res.quantity)
          console.log(res.price)
          if (res) {
            setValue('title', res.title);
            setValue('parent', res.parent);
            setValue('quantity', res.quantity);
            setValue('price', res.price);
          }
        })
        .catch((err) => {
          notifyError('There is a server error!');
        });
    }

  }, [id, setValue, isDrawerOpen]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useRevProductSubmit;
