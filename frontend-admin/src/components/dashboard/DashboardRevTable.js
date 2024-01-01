import React from 'react';
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Pagination,
} from '@windmill/react-ui';

import useAsync from '../../hooks/useAsync';
import useFilter from '../../hooks/useFilter';
import Loading from '../preloader/Loading';
import ReservationServices from '../../services/ReservationServices';
import ReservationTable from './ReservationTable';

const DashboardRevTable = () => {
  const { data, loading } = useAsync(ReservationServices.getAllReservations);

  const {
    handleChangePage,
    totalResults,
    resultsPerPage,
    dataTable,
  } = useFilter(data);

  return (
    <>
      {loading && <Loading loading={loading} />}
      {dataTable && !loading && (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Vehicle Type</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Service Type</TableCell>
                <TableCell>Slot</TableCell>
                <TableCell>Status</TableCell>
              </tr>
            </TableHeader>
            <ReservationTable reservations={dataTable} />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      )}
    </>
  );
};

export default DashboardRevTable;
