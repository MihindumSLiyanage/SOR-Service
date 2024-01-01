import React from "react";
import { useParams } from "react-router";
import {
  Table,
  TableBody,
  TableHeader,
  TableCell,
  TableContainer,
  TableRow
} from "@windmill/react-ui";

import useAsync from "../../hooks/useAsync";
import Loading from "../preloader/Loading";
import ReservationServices from "../../services/ReservationServices";

const InvoiceRevProducts = () => {
  const { id } = useParams();
  const { data, loading } = useAsync(() =>
    ReservationServices.getReservationById(id)
  );

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <TableContainer className="my-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell className="text-center">Product Name</TableCell>
                <TableCell className="text-center">Quantity</TableCell>
                <TableCell className="text-center">Item Price</TableCell>
                <TableCell className="text-center">Amount</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data.products?.map((product, i) => (
                <TableRow key={i + 1}>
                  <TableCell className="px-6 py-1 whitespace-nowrap font-normal text-center">
                    <span className="font-serif font-semibold py-1 text-gray-500 text-sm">
                      {" "}
                      {product.title}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-1 whitespace-nowrap font-bold text-center">
                    <span className="font-serif font-semibold py-1 text-gray-500 text-sm">
                      {" "}
                      {product.quantity}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-1 whitespace-nowrap font-bold text-center">
                    <span className="font-serif font-semibold py-1 text-gray-500 text-sm">
                      {" "}
                      Rs. {product.price}.00
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-1 whitespace-nowrap text-center">
                    <span className="font-serif font-semibold py-1 text-gray-500 text-sm">
                      {" "}
                      Rs. {product.itemTotal}.00
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default InvoiceRevProducts;
