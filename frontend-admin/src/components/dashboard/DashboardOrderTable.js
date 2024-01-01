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
import Loading from '../../components/preloader/Loading';
import OrderServices from '../../services/OrderServices';
import OrderTable from './OrderTable';

const DashboardOrderTable = () => {
  const { data, loading } = useAsync(OrderServices.getAllOrders);

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
                <TableCell>Order Date</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Payment method</TableCell>
                <TableCell>Order amount</TableCell>
                <TableCell>Status</TableCell>
              </tr>
            </TableHeader>
            <OrderTable orders={dataTable} />
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

export default DashboardOrderTable;
