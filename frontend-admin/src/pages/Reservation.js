import React, { useContext } from 'react';
import {
    Table,
    TableHeader,
    TableCell,
    TableFooter,
    TableContainer,
    Select,
    Input,
    Button,
    Card,
    CardBody,
    Pagination,
} from '@windmill/react-ui';
import { FiPlus } from 'react-icons/fi';

import useAsync from '../hooks/useAsync';
import useFilter from '../hooks/useFilter';
import NotFound from '../components/table/NotFound';
import Loading from '../components/preloader/Loading';
import ReservationServices from '../services/ReservationServices';
import PageTitle from '../components/Typography/PageTitle';
import { SidebarContext } from '../context/SidebarContext';
import ReservationTable from '../components/reservation/ReservationTable';
import MainDrawer from '../components/drawer/MainDrawer';
import ReservationDrawer from '../components/drawer/ReservationDrawer';

const Reservation = () => {
    const { toggleDrawer } = useContext(SidebarContext);
    const { data, loading } = useAsync(ReservationServices.getAllReservations);

    const {
        setSlot,
        setStatus,
        handleSubmitReservation,
        handleChangePage,
        totalResults,
        resultsPerPage,
        dataTable,
        serviceData,
        reservationRef,
    } = useFilter(data);

    return (
        <>
            <PageTitle>Reservations</PageTitle>
            <MainDrawer>
                <ReservationDrawer />
            </MainDrawer>

            <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
                <CardBody>
                    <form
                        onSubmit={handleSubmitReservation}
                        className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:grid-cols-4 xl:grid-cols-4"
                    >
                        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                            <Input
                                ref={reservationRef}
                                type="search"
                                name="search"
                                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                                placeholder="Search Anything"
                            />
                        </div>
                        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                            <Select
                                onChange={(e) => setStatus(e.target.value)}
                                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                            >
                                <option value="Status" defaultValue hidden>
                                    Status
                                </option>
                                <option value="Pending">Pending</option>
                                <option value="Processing">Processing</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancel">Cancel</option>
                            </Select>
                        </div>
                        {/* <div>
                            <Select
                                onChange={(e) => setSlot(e.target.value)}
                                className="border h-12 text-sm focus:outline-none w-full bg-gray-100 border-transparent focus:bg-white"
                            >
                                <option value="Slot" defaultValue hidden>
                                    Slot
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Select>
                        </div> */}
                        <div className="w-full md:w-56 lg:w-56 xl:w-56">
                            <Button onClick={toggleDrawer} className="w-full md:w-56 lg:w-56 xl:w-56 rounded-md h-12">
                                <span className="mr-3">
                                    <FiPlus />
                                </span>
                                Add Reservation
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>

            {loading ? (
                <Loading loading={loading} />
            ) : serviceData.length !== 0 ? (
                <TableContainer className="mb-8 rounded-b-lg">
                    <Table>
                        <TableHeader>
                            <tr>
                                <TableCell>Vehicle Type</TableCell>
                                <TableCell>Vehicle No</TableCell>
                                <TableCell>Service Type</TableCell>
                                <TableCell>Reservation Date</TableCell>
                                <TableCell>Reservation Time</TableCell>
                                <TableCell>Slot</TableCell>
                                <TableCell>Customer</TableCell>
                                <TableCell>Approved</TableCell>
                                <TableCell className="text-center">Status</TableCell>
                                <TableCell className="text-right">Info</TableCell>
                                <TableCell className="text-right">Actions</TableCell>
                            </tr>
                        </TableHeader>
                        <ReservationTable reservations={dataTable} />
                    </Table>
                    <TableFooter>
                        <Pagination
                            totalResults={totalResults}
                            resultsPerPage={resultsPerPage}
                            onChange={handleChangePage}
                            label="Reservation Page Navigation"
                        />
                    </TableFooter>
                </TableContainer>
            ) : (
                <NotFound title="Reservation" />
            )}
        </>
    );
};

export default Reservation;
