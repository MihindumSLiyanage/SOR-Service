import React, { useContext } from 'react';
import { Select } from '@windmill/react-ui';

import ReservationServices from '../../services/ReservationServices';
import { notifySuccess, notifyError } from '../../utils/toast';
import { SidebarContext } from '../../context/SidebarContext';

const Approved = ({ id }) => {
  const { setIsUpdate } = useContext(SidebarContext);
  const handleChangeStatus = (id, isApproved) => {
    ReservationServices.updateIsApproved(id, { isApproved: isApproved })
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
        <option value="Select" defaultValue>Select</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </Select>
    </>
  );
};

export default Approved;
