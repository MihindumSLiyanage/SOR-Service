import React, { useContext } from 'react';
import { Select } from "@windmill/react-ui";

import ProductServices from '../../services/ProductServices';
import { SidebarContext } from '../../context/SidebarContext';

const SelectStock = ({ id }) => {
    const { setIsUpdate } = useContext(SidebarContext);
    const handleChangeActive = (id, active) => {
        ProductServices.updateActive(id, { active: active })
            .then((res) => {
                notifySuccess(res.message);
                setIsUpdate(true);
            })
            .catch((err) => notifyError(err.message));
    };
    return (
        <>
            <Select
                onChange={(e) => handleChangeActive(id, e.target.value)}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
            >
                <option value="All" defaultValue hidden>
                    Stock Status
                </option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </Select>
        </>
    );
};

export default SelectStock;
