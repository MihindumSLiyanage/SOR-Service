import React from 'react';
import { Badge } from '@windmill/react-ui';

const Active = ({ active }) => {
    return (
        <>
            <span className="font-serif">
                {active == true && <Badge type="success">Active</Badge>}
                {active == false && <Badge type="danger">Inactive</Badge>}
            </span>
        </>
    );
};

export default Active;
