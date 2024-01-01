import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Select } from '@windmill/react-ui';

import Title from '../form/Title';
import Error from '../form/Error';
import LabelArea from '../form/LabelArea';
import InputArea from '../form/InputArea';
import DrawerButton from '../form/DrawerButton';
import useReservationSubmit from '../../hooks/useReservationSubmit';

const ReservationDrawer = ({ id }) => {
    const {
        register,
        handleSubmit,
        onSubmit,
        errors,
    } = useReservationSubmit(id);

    return (
        <>
            <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {id ? (
                    <Title
                        title="Update Reservation"
                        description="Updated reservation and necessary information from here"
                    />
                ) : (
                    <Title
                        title="Add Reservation"
                        description="Add new reservation and necessary information from here"
                    />
                )}
            </div>
            <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
                <form onSubmit={handleSubmit(onSubmit)} className="block">
                    <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">

                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Vehicle Type" />
                            <div className="col-span-8 sm:col-span-4">
                                <Select
                                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                                    name="vehicleType"
                                    {...register('vehicleType', {
                                        required: 'Vehicle Type is required!',
                                    })}
                                >
                                    <option value="" defaultValue>
                                        --- Select ---
                                    </option>
                                    <option value="Car">Car</option>
                                    <option value="Van">Van</option>\
                                    <option value="Jeep">Jeep</option>
                                    <option value="Lorry">Lorry</option>
                                    <option value="Bike">Bike</option>
                                </Select>
                                <Error errorName={errors.vehicleType} />
                            </div>
                        </div>

                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Vehicle No" />
                            <div className="col-span-8 sm:col-span-4">
                                <InputArea
                                    register={register}
                                    label="Vehicle No"
                                    name="vehicleNo"
                                    type="text"
                                    placeholder="Vehicle No"
                                />
                                <Error errorName={errors.vehicleNo} />
                            </div>
                        </div>

                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Vehicle Model" />
                            <div className="col-span-8 sm:col-span-4">
                                <InputArea
                                    register={register}
                                    label="Vehicle Model"
                                    name="vehicleModel"
                                    type="text"
                                    placeholder="Vehicle Model"
                                />
                                <Error errorName={errors.vehicleModel} />
                            </div>
                        </div>


                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Customer Name" />
                            <div className="col-span-8 sm:col-span-4">
                                <InputArea
                                    register={register}
                                    label="Customer Name"
                                    name="userName"
                                    type="text"
                                    placeholder="Customer Name"
                                />
                                <Error errorName={errors.userName} />
                            </div>
                        </div>

                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Customer Phone number" />
                            <div className="col-span-8 sm:col-span-4">
                                <InputArea
                                    register={register}
                                    label="Customer Phone number"
                                    name="contactNo"
                                    type="text"
                                    placeholder="Customer Phone number"
                                />
                                <Error errorName={errors.contactNo} />
                            </div>
                        </div>

                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Customer Email" />
                            <div className="col-span-8 sm:col-span-4">
                                <InputArea
                                    register={register}
                                    label="Customer Email"
                                    name="email"
                                    type="text"
                                    placeholder="Customer Email"
                                />
                                <Error errorName={errors.email} />
                            </div>
                        </div>

                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Service Type" />
                            <div className="col-span-8 sm:col-span-4">
                                <Select
                                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                                    name="serviceType"
                                    {...register('serviceType', {
                                        required: 'Service Type is required!',
                                    })}
                                >
                                    <option value="" defaultValue>
                                        --- Select ---
                                    </option>
                                    <option value="Full Service">Full Service</option>
                                    <option value="Wheel balancing">Wheel balancing</option>
                                    <option value="Clutch oil change">Clutch oil change</option>
                                    <option value="Engine scanning">Engine scanning</option>
                                    <option value="Hybrid services">Hybrid services</option>
                                    <option value="Brake oil change">Brake oil change</option>
                                    <option value="Interior cleaning">Interior cleaning</option>
                                    <option value="Oil & Filter Change">Oil & Filter Change</option>
                                </Select>
                                <Error errorName={errors.serviceType} />
                            </div>
                        </div>

                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Reservation Date" />
                            <div className="col-span-8 sm:col-span-4">
                                <InputArea
                                    register={register}
                                    label="Reservation Date"
                                    name="serviceDate"
                                    type="date"
                                    placeholder="Reservation Date and Time"
                                />
                                <Error errorName={errors.serviceDate} />
                            </div>
                        </div>

                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Reservation Time" />
                            <div className="col-span-8 sm:col-span-4">
                                <Select
                                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                                    name="serviceTime"
                                    {...register('serviceTime', {
                                        required: 'Reservation Time is required!',
                                    })}
                                >
                                    <option value="" defaultValue>
                                        --- Select ---
                                    </option>
                                    <option value="9.00 am - 10.00 am">9.00 am - 10.00 am</option>
                                    <option value="10.00 am - 11.00 am">10.00 am - 11.00 am</option>
                                    <option value="11.00 am - 12.00 am">11.00 am - 12.00 am</option>
                                    <option value="12.00 pm - 13.00 pm">12.00 pm - 13.00 pm</option>
                                    <option value="13.00 pm - 14.00 pm">13.00 pm - 14.00 pm</option>
                                    <option value="14.00 pm - 15.00 pm">14.00 pm - 15.00 pm</option>
                                    <option value="15.00 pm - 16.00 pm">15.00 pm - 16.00 pm</option>
                                    <option value="16.00 pm - 17.00 pm">16.00 pm - 17.00 pm</option>
                                </Select>
                                <Error errorName={errors.serviceTime} />
                            </div>
                        </div>

                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Slot" />
                            <div className="col-span-8 sm:col-span-4">
                                <Select
                                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                                    name="slot"
                                    {...register('slot', {
                                        required: 'Slot is required!',
                                    })}
                                >
                                    <option value="" defaultValue>
                                        --- Select ---
                                    </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Select>
                                <Error errorName={errors.slot} />
                            </div>
                        </div>

                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Status" />
                            <div className="col-span-8 sm:col-span-4">
                                <Select
                                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                                    name="status    "
                                    {...register('status', {
                                        required: 'Status is required!',
                                    })}
                                >
                                    <option value="" defaultValue>
                                        --- Select ---
                                    </option>
                                    <option value="Pending">Pending</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Completed">Completed</option>
                                </Select>
                                <Error errorName={errors.status} />
                            </div>
                        </div>
                    </div>

                    <DrawerButton id={id} title="Reservation" />
                </form>
            </Scrollbars>
        </>
    );
};

export default React.memo(ReservationDrawer);
