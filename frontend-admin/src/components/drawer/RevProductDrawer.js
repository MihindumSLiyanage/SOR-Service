import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Select } from '@windmill/react-ui';

import Title from '../form/Title';
import Error from '../form/Error';
import LabelArea from '../form/LabelArea';
import InputValue from '../form/InputValue';
import DrawerButton from '../form/DrawerButton';
import Product from '../category/Product';
import ParentCategory from '../category/ParentCategory';
import useRevProductSubmit from '../../hooks/useRevProductSubmit';
import useAsync from '../../hooks/useAsync';
import ProductServices from '../../services/ProductServices';

const RevProductDrawer = ({ id }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
  } = useRevProductSubmit(id);
  const { data } = useAsync(ProductServices.getAllProducts);
  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title="Update Product"
            description="Updated your product and necessary information from here"
          />
        ) : (
          <Title
            title="Add Product"
            description="Add your product and necessary information from here"
          />
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)} className="block">
          <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Product Title/Name" />
              <div className="col-span-8 sm:col-span-4">
                <Select
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  title="title"
                  {...register('title', {
                    required: 'Product Title/Name is required!',
                  })}
                >
                  <option value="" defaultValue>
                    Select Product
                  </option>
                  {data?.map((product) => (
                    <option key={product._id} id={product._id} value={product.title}>
                      {product.title}
                    </option>
                  ))}
                </Select>
                <Error errorName={errors.title} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Category" />
              <div className="col-span-8 sm:col-span-4">
                <Select
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  name="parent"
                  {...register('parent', {
                    required: 'Category is required!',
                  })}
                >
                  <option value="" defaultValue>
                    Select Category
                  </option>
                  <ParentCategory />
                </Select>
                <Error errorName={errors.parent} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Product Quantity" />
              <div className="col-span-8 sm:col-span-4">
                <InputValue
                  register={register}
                  maxValue={1000}
                  minValue={0}
                  label="Quantity"
                  name="quantity"
                  type="number"
                  placeholder="Quantity"
                />
                <Error errorName={errors.quantity} />
              </div>
            </div>

            {/* <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Product Price" />
              <div className="col-span-8 sm:col-span-4">
                <InputValue
                  register={register}
                  maxValue={2000}
                  minValue={1}
                  label="Price"
                  name="price"
                  type="number"
                  placeholder="Price"
                />
                <Error errorName={errors.price} />
              </div>
            </div> */}
          </div>

          <DrawerButton id={id} title="Product" />
        </form>
      </Scrollbars>
    </>
  );
};

export default React.memo(RevProductDrawer);
