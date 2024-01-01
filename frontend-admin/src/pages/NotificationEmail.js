import React from 'react';
import { useParams } from 'react-router';

import ReservationServices from '../services/ReservationServices';
import useApprovedEmailSubmit from '../hooks/useApprovedEmailSubmit';
import useAsync from '../hooks/useAsync';

const NotificationEmail = () => {
  const { id } = useParams();
  const { data } = useAsync(() => ReservationServices.getReservationById(id));
  const { onSubmit, handleSubmit } = useApprovedEmailSubmit(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button
          type="submit"
          className="cursor-pointer float-left leading-5 transition-colors duration-150 font-medium text-sm focus:outline-none px-5 py-2 rounded-md text-white bg-blue-500 border border-transparent active:bg-blue-600 hover:bg-blue-600 focus:ring focus:ring-blue-300"
        >
          Send Notification
        </button>
      </form>
    </>
  );
};

export default NotificationEmail;
