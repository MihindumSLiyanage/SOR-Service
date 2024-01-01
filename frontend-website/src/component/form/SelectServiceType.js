import React from 'react';
import { Select } from '@windmill/react-ui';
import Label from '@component/form/Label';

const SelectServiceType = ({ vehicleType, register, name, label }) => {
  return (
    <>
      <Label label={label} />
      <Select
        onChange={(e) => vehicleType(e.target.value)}
        className="text-gray-800 focus-within:text-gray-900 sm:text-base"
        name={name}
        {...register(`${name}`, {
          required: `${label} is required!`,
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
    </>
  );
};

export default SelectServiceType;
