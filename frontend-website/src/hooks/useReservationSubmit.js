import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '@context/UserContext';
import ReservationServices from '@services/ReservationServices';
import { notifyError, notifySuccess } from '@utils/toast';

const useReservationSubmit = () => {

    // const {
    //     state: { userInfo },
    // } = useContext(UserContext);

    // const router = useRouter();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    //if not login then push user to home page
    // useEffect(() => {
    //     if (!userInfo) {
    //         router.push('/');
    //     }

    //     setValue('vehicleType');
    //     setValue('vehicleNo');
    //     setValue('vehicleModel');
    //     setValue('userName');
    //     setValue('contactNo');
    //     setValue('email');
    //     setValue('serviceType');
    //     setValue('serviceDate');
    //     setValue('serviceTime');
    // }, []);

    const submitHandler = async (data) => {
        const reservationData = {
            vehicleType: data.vehicleType,
            vehicleNo: data.vehicleNo,
            vehicleModel: data.vehicleModel,
            userName: data.userName,
            contactNo: data.contactNo,
            email: data.email,
            serviceType: data.serviceType,
            serviceDate: data.serviceDate,
            serviceTime: data.serviceTime,
            status: 'Pending',
        };

        ReservationServices.addReservation(reservationData)
            .then((res) => {
                notifySuccess('Your Reservation saved successfully.');
            })
            .catch((err) => notifyError(err.message));
    }

    return {
        handleSubmit,
        submitHandler,
        register,
        errors,
    };
};

export default useReservationSubmit;
