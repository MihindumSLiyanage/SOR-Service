import React from 'react';
import dayjs from 'dayjs';

const ReservationHistory = ({ reservation }) => {
  return (
    <>
      <td className="px-5 py-3 leading-6 whitespace-nowrap">
        <span className="uppercase text-sm font-medium">
          {reservation._id.substring(20, 24)}
        </span>
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-sm">
          {dayjs(reservation.serviceDate).format('MMMM D, YYYY')}
        </span>
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-sm">{reservation.serviceTime}</span>
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-sm">{reservation.serviceType}</span>
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-sm">{reservation.paymentMethod}</span>
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-sm font-bold">
          Rs.{Math.round(reservation?.subTotal)}.00
        </span>
      </td>
    </>
  );
};

export default ReservationHistory;
