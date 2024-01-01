import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  Badge,
} from "@windmill/react-ui";

import useAsync from "../hooks/useAsync";
import useReminderSubmit from "../hooks/useReminderSubmit";
import Loading from "../components/preloader/Loading";
import PageTitle from "../components/Typography/PageTitle";
import ReservationServices from "../services/ReservationServices";
import RevProducts from "./RevProducts";
import NotificationEmail from "./NotificationEmail";
import Approved from "../components/form/Approved";
import SelectStatusRev from "../components/form/SelectStatusRev";

const ReservationDetails = () => {
  const { id } = useParams();
  const { data, loading } = useAsync(() =>
    ReservationServices.getReservationById(id)
  );
  const { onSubmit, handleSubmit } = useReminderSubmit(data);

  return (
    <>
      <PageTitle>
        Reservation Details
        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="submit"
              className="cursor-pointer float-left leading-5 transition-colors duration-150 font-medium text-sm focus:outline-none px-5 py-2 rounded-md text-white bg-blue-500 border border-transparent active:bg-blue-600 hover:bg-blue-600 focus:ring focus:ring-blue-300"
            >
              Send Reminder
            </button>
          </form>
        </div>
        <Link to={`/reservations/${id}/invoice`}>
          <button className="cursor-pointer float-right leading-5 transition-colors duration-150 font-medium text-sm focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-green-300">
            Invoice
          </button>
        </Link>
        <div className="w-full flex flex-col p-5 md:p-8">
          <h3 className="text-heading text-lg md:text-l lg:text-xl font-semibold font-serif dark:text-gray-400">
            Is this Reservation Status:{" "}
            {data.status == "Pending" && <Badge type="warning">Pending</Badge>}
            {data.status == "Processing" && (
              <Badge type="primary">Processing</Badge>
            )}
            {data.status == "Completed" && (
              <Badge type="success">Completed</Badge>
            )}
            {data.status == "Cancel" && <Badge type="danger">Cancel</Badge>}
            <div className="flex lg:flex-row md:flex-row flex-col justify-between w-85">
              <div className="mb-3 md:mb-0 lg:mb-0 lg:flex-wrap">
                <SelectStatusRev id={id} />
              </div>
            </div>
          </h3>
        </div>
      </PageTitle>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="inline-block overflow-y-auto h-full align-middle transition-all transform">
          <div className="flex flex-col lg:flex-row md:flex-row w-full overflow-hidden">
            <div className="w-full flex flex-col p-5 md:p-8">
              <div className="mb-5 block ">
                <div className="font-serif font-semibold py-1 text-sm">
                  <h6 className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    Service Type: {data.serviceType}
                  </h6>
                  <h6 className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    Service Slot: {data.slot}
                  </h6>
                  <h6 className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    Service Date at: {data.serviceDate}
                  </h6>
                  <h6 className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    Service Time at: {data.serviceTime}
                  </h6>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col p-5 md:p-8">
              <div className="mb-5 block ">
                <div className="font-serif font-semibold py-1 text-sm">
                  <h6 className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    Vehicle Model: {data.vehicleModel}
                  </h6>
                  <h6 className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    Vehicle No: {data.vehicleNo}
                  </h6>
                  <h6 className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    Vehicle Type: {data.vehicleType}
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col p-5 md:p-8">
              <div className="mb-5 block ">
                <div className="font-serif font-semibold py-1 text-sm">
                  <h6 className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    Customer Name: {data.userName}
                  </h6>
                  <h6 className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    Customer Email: {data.email}
                  </h6>
                  <h6 className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    Customer Contact Number: {data.contactNo}
                  </h6>
                  <h6 className="font-serif font-semibold py-1 text-gray-500 text-sm">
                    Reservation Created at: {data.createdAt}
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col p-5 md:p-8">
            <h3 className="text-heading text-lg md:text-l lg:text-xl font-semibold font-serif dark:text-gray-400">
              Is this Reservation Approved:{" "}
              {data.isApproved == true && <Badge type="success">Yes</Badge>}
              {data.isApproved == false && <Badge type="danger">No</Badge>}
              <div className="flex lg:flex-row md:flex-row flex-col justify-between w-85">
                <div className="mb-3 md:mb-0 lg:mb-0 lg:flex-wrap">
                  <Approved id={id} />
                </div>
              </div>
              <div className="mt-6">
                <NotificationEmail />
              </div>
            </h3>
          </div>

          <RevProducts />
        </div>
      )}
    </>
  );
};

export default ReservationDetails;
