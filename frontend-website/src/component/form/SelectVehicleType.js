import React from 'react';
import { Select } from '@windmill/react-ui';
import Label from '@component/form/Label';

const SelectVehicleType = ({ serviceType, register, name, label }) => {
  return (
    <>
      <Label label={label} />
      <Select
        onChange={(e) => serviceType(e.target.value)}
        className="text-gray-800 focus-within:text-gray-900 sm:text-base"
        name={name}
        {...register(`${name}`, {
          required: `${label} is required!`,
        })}
      >
        <option value="" defaultValue>
          --- Select ---
        </option>
        <option value="Car">Car</option>
        <option value="Van">Van</option>\
        <option value="Jeep">Jeep</option>
        <option value="Lorry">Lorry</option>
        <option value="Bike">Bike</option>
      </Select>
    </>
  );
};

export default SelectVehicleType;
