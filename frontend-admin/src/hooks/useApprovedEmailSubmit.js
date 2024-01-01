import { useState } from 'react';
import { useForm } from 'react-hook-form';

import ReservationServices from '../services/ReservationServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useApprovedEmailSubmit = (data) => {
    const [loading, setLoading] = useState(false);
    const { handleSubmit } = useForm();

    const email = data.email;
    const date = data.date;
    const startTime = data.startTime;
    const serviceType = data.serviceType;
    const vehicleNo = data.vehicleNo;

    const onSubmit = () => {
        setLoading(true);
        ReservationServices.sendApprovedEmail({ email, date, startTime, serviceType, vehicleNo })
            .then((res) => {
                setLoading(false);
                notifySuccess('Approved Mail Send!');
            })
            .catch((err) => {
                setLoading(false);
                notifyError(err ? err.response.data.message : err.message);
            });
    }
    return {
        onSubmit,
        handleSubmit,
        loading,
    };
};

export default useApprovedEmailSubmit;
