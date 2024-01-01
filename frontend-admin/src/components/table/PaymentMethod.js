import React from 'react';
import { Badge } from '@windmill/react-ui';

const PaymentMethod = ({ paymentMethod }) => {
  return (
    <>
      <span className="font-serif">
        {paymentMethod === 'Card' && <Badge type="success">{paymentMethod}</Badge>}
        {paymentMethod === 'Cash' && <Badge type="primary">{paymentMethod}</Badge>}
      </span>
    </>
  );
};

export default PaymentMethod;
