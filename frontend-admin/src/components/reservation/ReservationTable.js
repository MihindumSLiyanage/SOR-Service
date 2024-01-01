import React from 'react';
import { Link } from 'react-router-dom';
import * as dayjs from 'dayjs';
import {
  TableCell,
  TableBody,
  TableRow,

} from '@windmill/react-ui';
import { FiEye } from 'react-icons/fi';

import MainModal from '../modal/MainModal';
import MainDrawer from '../drawer/MainDrawer';
import Tooltip from '../tooltip/Tooltip';
import EditDeleteButton from '../table/EditDeleteButton';
import Status from '../table/Status';
import SelectStatusRev from '../form/SelectStatusRev';
import ReservationDrawer from '../drawer/ReservationDrawer';
import useToggleDrawer from '../../hooks/useToggleDrawer';
import Approved from '../table/Approved';

const ReservationTable = ({ reservations }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        <ReservationDrawer id={serviceId} />
      </MainDrawer>
      <TableBody>
        {reservations?.map((reservation, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <span className="text-sm">{reservation.vehicleType}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{reservation.vehicleNo}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{reservation.serviceType}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {dayjs(reservation.serviceDate).format('YYYY-MM-DD')}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{reservation.serviceTime}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{reservation.slot}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{reservation.userName}</span>
            </TableCell>
            <TableCell>
              <Approved isApproved={reservation.isApproved} />
            </TableCell>
            <TableCell className="text-center text-xs">
              <Status status={reservation.status} />
            </TableCell>
            <TableCell>
              <Link
                to={`/reservations/${reservation._id}`}
                className="flex justify-center text-center text-gray-400 hover:text-green-600"
              >
                <Tooltip
                  id="details"
                  Icon={FiEye}
                  title="Details"
                  bgColor="#10B981"
                />
              </Link>
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={reservation._id}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default ReservationTable;
