import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

//internal import
import Layout from '@layout/Layout';
import PageHeader from '@component/header/PageHeader';
import Error from '@component/form/Error';
import InputArea from '@component/form/InputArea';
import SelectVehicleType from '@component/form/SelectVehicleType';
import SelectServiceType from '@component/form/SelectServiceType';
import SelectServiceTime from '@component/form/SelectServiceTime';
import useReservationSubmit from '@hooks/useReservationSubmit';
import { notifyError, notifySuccess } from '@utils/toast';

const Reservation = () => {

    const {
        handleSubmit,
        register,
        submitHandler,
        errors,
    } = useReservationSubmit();

    return (
        <Layout title="Reservation" description="This is Reservation page">
            <PageHeader title="Reservation" />
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
                    <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form onSubmit={handleSubmit(submitHandler)}>
                                <div className="form-group">
                                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                                        01. Personal Details
                                    </h2>
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <InputArea
                                                register={register}
                                                label="Name"
                                                name="userName"
                                                type="text"
                                                placeholder="John"
                                            />
                                            <Error errorName={errors.userName} />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <InputArea
                                                register={register}
                                                label="Phone number"
                                                name="contactNo"
                                                type="text"
                                                placeholder="Phone number"
                                            />
                                            <Error errorName={errors.contactNo} />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <InputArea
                                                register={register}
                                                label="Email"
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                            />
                                            <Error errorName={errors.email} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-12">
                                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                                        02. Vehicle Details
                                    </h2>
                                    <div className="grid grid-cols-6 gap-6 mb-8">
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <SelectVehicleType
                                                register={register}
                                                label="Vehicle Type"
                                                name="vehicleType"
                                                type="text"
                                                placeholder="Vehicle Type"
                                            />
                                            <Error errorName={errors.vehicleType} />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <InputArea
                                                register={register}
                                                label="Vehicle Number"
                                                name="vehicleNo"
                                                type="text"
                                                placeholder="Vehicle Number"
                                            />
                                            <Error errorName={errors.vehicleNo} />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
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
                                </div>
                                <div className="form-group mt-12">
                                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                                        03. Service Details
                                    </h2>
                                    <div className="grid grid-cols-6 gap-6 mb-8">
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <SelectServiceType
                                                register={register}
                                                label="Service Type"
                                                name="serviceType"
                                                type="text"
                                                placeholder="Service Type"
                                            />
                                            <Error errorName={errors.serviceType} />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <InputArea
                                                register={register}
                                                label="Date"
                                                name="serviceDate"
                                                type="date"
                                                placeholder="Service Date"
                                            />
                                            <Error errorName={errors.vehicleModel} />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <SelectServiceTime
                                                register={register}
                                                label="Time"
                                                name="serviceTime"
                                                type="time"
                                                placeholder="Time"
                                            />
                                            <Error errorName={errors.serviceTime} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-cyan-600 border border-blue-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                                    >
                                        Confirm Reservation
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
                        <Image width={800} height={680} src="/about-car.jpg" alt="logo" />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Reservation;
//export default dynamic(() => Promise.resolve(Reservation), { ssr: false });
