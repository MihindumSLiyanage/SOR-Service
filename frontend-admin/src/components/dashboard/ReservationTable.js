import React from 'react';
import { TableCell, TableBody, TableRow } from '@windmill/react-ui';
import Status from '../table/Status';

const ReservationTable = ({ reservations }) => {
  return (
    <>
      <TableBody>
        {reservations?.map((reservation) => (
          <TableRow key={reservation._id}>
            <TableCell>
              <span className="text-sm">{reservation.vehicleType}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{reservation.userName}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{reservation.serviceType}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{reservation.slot}</span>
            </TableCell>
            <TableCell>
              <Status status={reservation.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default ReservationTable;
