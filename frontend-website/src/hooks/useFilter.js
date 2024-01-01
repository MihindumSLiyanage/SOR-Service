import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

const useFilter = (data) => {
  //const [allOrderCount, setAllOrderCount] = useState(0);
  const [pending, setPending] = useState(0);
  const [processing, setProcessing] = useState(0);
  const [completed, setCompleted] = useState(0);

  const [sortedField, setSortedField] = useState('');
  const router = useRouter();

  const productData = useMemo(() => {
    let services = data;
    //filter user order
    if (router.pathname === '/user/dashboard') {
      const orderPending = services.filter(
        (statusP) => statusP.status === 'Pending'
      );
      setPending(orderPending);

      const orderProcessing = services.filter(
        (statusO) => statusO.status === 'Processing'
      );
      setProcessing(orderProcessing);

      const orderCompleted = services.filter(
        (statusD) => statusD.status === 'Completed'
      );
      setCompleted(orderCompleted);
    }
    return services;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedField, data]);

  return {
    pending,
    processing,
    completed,
    setSortedField,
    productData
  };
};

export default useFilter;
