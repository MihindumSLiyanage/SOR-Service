import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import ReservationServices from '../services/ReservationServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useReservationSubmit = (id) => {
    const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
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
            slot: data.slot,
            status: data.status,
            isApproved: true,
        };
        if (id) {
            ReservationServices.updateReservation(id, reservationData)
                .then((res) => {
                    setIsUpdate(true);
                    notifySuccess(res.message);
                })
                .catch((err) => notifyError(err.message));
            closeDrawer();
        } else {
            ReservationServices.addReservation(reservationData)
                .then((res) => {
                    setIsUpdate(true);
                    notifySuccess(res.message);
                })
                .catch((err) => notifyError(err.message));
            closeDrawer();
        }
    };

    useEffect(() => {
        if (!isDrawerOpen) {
            setValue('vehicleType');
            setValue('vehicleNo');
            setValue('vehicleModel');
            setValue('userName');
            setValue('contactNo');
            setValue('email');
            setValue('serviceType');
            setValue('serviceDate');
            setValue('serviceTime');
            setValue('slot');
            clearErrors('vehicleType');
            clearErrors('vehicleNo');
            clearErrors('vehicleModel');
            clearErrors('userName');
            clearErrors('contactNo');
            clearErrors('email');
            clearErrors('serviceType');
            clearErrors('serviceDate');
            clearErrors('serviceTime');
            clearErrors('slot');
            return;
        }

        if (id) {
            ReservationServices.getReservationById(id)
                .then((res) => {
                    if (res) {
                        setValue('vehicleType', res.vehicleType);
                        setValue('vehicleNo', res.vehicleNo);
                        setValue('vehicleModel', res.vehicleModel);
                        setValue('userName', res.userName);
                        setValue('contactNo', res.contactNo);
                        setValue('email', res.email);
                        setValue('serviceType', res.serviceType);
                        setValue('serviceDate', res.serviceDate);
                        setValue('serviceTime', res.serviceTime);
                        setValue('slot', res.slot);
                    }
                })
                .catch((err) => {
                    notifyError('There is a server error!');
                });
        }

    }, [id, setValue, isDrawerOpen]);

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};

export default useReservationSubmit;
