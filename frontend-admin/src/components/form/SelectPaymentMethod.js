import React, { useContext } from 'react';
import { Select } from '@windmill/react-ui';

import ReservationServices from '../../services/ReservationServices';
import { notifySuccess, notifyError } from '../../utils/toast';
import { SidebarContext } from '../../context/SidebarContext';

const SelectPaymentMethod = ({ id }) => {
  const { setIsUpdate } = useContext(SidebarContext);
  const handleChangeStatus = (id, paymentMethod) => {
    ReservationServices.updatePaymentMethod(id, { paymentMethod: paymentMethod })
      .then((res) => {
        notifySuccess(res.message);
        setIsUpdate(true);
      })
      .catch((err) => notifyError(err.message));
  };

  return (
    <>
      <Select
        onChange={(e) => handleChangeStatus(id, e.target.value)}
        className="border border-gray-50 bg-gray-50 dark:border-gray-700 h-8 rounded-md text-xs focus:border-gray-400 focus:outline-none"
      >
        <option value="Card">Card</option>
        <option value="Cash">Cash</option>
      </Select>
    </>
  );
};

export default SelectPaymentMethod;
