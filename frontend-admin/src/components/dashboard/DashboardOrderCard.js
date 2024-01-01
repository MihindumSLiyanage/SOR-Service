import React from 'react';
import { ImStack, ImCreditCard } from 'react-icons/im';
import { FiShoppingCart } from 'react-icons/fi';

import useAsync from '../../hooks/useAsync';
import useFilter from '../../hooks/useFilter';
import OrderServices from '../../services/OrderServices';
import CardItemTwo from './CardItemTwo';

const DashboardOrderCard = () => {
  const { data } = useAsync(OrderServices.getAllOrders);

  const {
    todayOrder,
    monthlyOrder,
    totalOrder,
  } = useFilter(data);

  return (
    <>

      <div className="grid gap-4 mb-8 md:grid-cols-3 xl:grid-cols-3">
        <CardItemTwo
          title="Today Order"
          Icon={ImStack}
          price={todayOrder}
          className="text-white dark:text-green-100 bg-teal-500"
        />
        <CardItemTwo
          title="This Month"
          Icon={FiShoppingCart}
          price={monthlyOrder}
          className="text-white dark:text-green-100 bg-blue-500"
        />
        <CardItemTwo
          title="Total Order"
          Icon={ImCreditCard}
          price={totalOrder}
          className="text-white dark:text-green-100 bg-green-500"
        />
      </div>
    </>
  );
};

export default DashboardOrderCard;
