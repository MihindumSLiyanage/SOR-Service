import { useState } from 'react';
import { useForm } from 'react-hook-form';

import ReservationServices from '../services/ReservationServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useReminderSubmit = (data) => {
    const [loading, setLoading] = useState(false);
    const { handleSubmit } = useForm();

    const email = data.email;
    const date = data.date;
    const startTime = data.startTime;
    const serviceType = data.serviceType;
    const vehicleNo = data.vehicleNo;

    const onSubmit = () => {
        setLoading(true);
        ReservationServices.sendReminder({ email, date, startTime, serviceType, vehicleNo })
            .then((res) => {
                setLoading(false);
                notifySuccess('Reminder Send!');
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

export default useReminderSubmit;
