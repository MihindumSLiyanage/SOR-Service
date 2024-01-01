import React, { useContext } from "react";
import { useParams } from "react-router";
import {
  Table,
  TableHeader,
  TableCell,
  TableContainer,
  Button,
  TableRow,
  TableBody,
} from "@windmill/react-ui";
import { FiPlus } from "react-icons/fi";

import useAsync from "../hooks/useAsync";
import useToggleDrawer from "../hooks/useToggleDrawer";
import ReservationServices from "../services/ReservationServices";
import PageTitle from "../components/Typography/PageTitle";
import { SidebarContext } from "../context/SidebarContext";
import EditDeleteButton from "../components/table/EditDeleteButton";
import MainDrawer from '../components/drawer/MainDrawer';
import RevProductDrawer from '../components/drawer/RevProductDrawer';

const RevProducts = () => {
  const { id } = useParams();
  const { toggleDrawer } = useContext(SidebarContext);
  const { data } = useAsync(() => ReservationServices.getReservationById(id));

  const { handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <PageTitle>
        Used Products
        <MainDrawer>
        <RevProductDrawer />
      </MainDrawer>
        <Button
          onClick={toggleDrawer}
          className="cursor-pointer float-right leading-5 transition-colors duration-150 font-medium text-sm focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-green-300"
        >
          <span className="mr-3">
            <FiPlus />
          </span>
          Add Product
        </Button>
      </PageTitle>
      <TableContainer className="mb-8 rounded-b-lg">
        <Table>
          <TableHeader>
            <TableCell>Product name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Discount</TableCell>
            <TableCell className="text-right">Actions</TableCell>
          </TableHeader>
          <TableBody>
            {data.products?.map((product, i) => (
              <TableRow key={i + 1}>
                <TableCell>
                  <span className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    {" "}
                    {product.title}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    {" "}
                    {product.parent}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    {" "}
                    {product.price}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    {" "}
                    {product.quantity}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    {" "}
                    {product.discount}
                  </span>
                </TableCell>
                <TableCell>
                  <EditDeleteButton
                    id={product._id}
                    handleUpdate={handleUpdate}
                    handleModalOpen={handleModalOpen}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RevProducts;
