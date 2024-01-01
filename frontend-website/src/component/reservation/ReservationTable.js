import React from 'react';

const ReservationTable = ({ data }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-100 text-serif text-sm">
      {data?.map((item, i) => (
        <tr key={i}>
          <th className="px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left">
            {i + 1}{' '}
          </th>
          <td className="px-6 py-1 whitespace-nowrap font-normal text-gray-500">
            {item.title}
          </td>
          <td className="px-6 py-1 whitespace-nowrap font-bold text-center">
            {item.quantity}{' '}
          </td>
          <td className="px-6 py-1 whitespace-nowrap font-bold text-center font-DejaVu">
            Rs.{item.price}.00{' '}
          </td>

          <td className="px-6 py-1 whitespace-nowrap text-right font-bold font-DejaVu k-grid text-red-500">
            Rs.{item.subTotal}.00
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ReservationTable;
