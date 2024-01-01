import React from 'react';
import { Select } from '@windmill/react-ui';
import Label from '@component/form/Label';

const SelectServiceTime = ({ serviceTime, register, name, label }) => {
  return (
    <>
      <Label label={label} />
      <Select
        onChange={(e) => serviceTime(e.target.value)}
        className="text-gray-800 focus-within:text-gray-900 sm:text-base"
        name={name}
        {...register(`${name}`, {
          required: `${label} is required!`,
        })}
      >
        <option value="" defaultValue>
          --- Select ---
        </option>
        <option value="9.00 am - 10.00 am">9.00 am - 10.00 am</option>
        <option value="10.00 am - 11.00 am">10.00 am - 11.00 am</option>
        <option value="11.00 am - 12.00 am">11.00 am - 12.00 am</option>
        <option value="12.00 pm - 13.00 pm">12.00 pm - 13.00 pm</option>
        <option value="13.00 pm - 14.00 pm">13.00 pm - 14.00 pm</option>
        <option value="14.00 pm - 15.00 pm">14.00 pm - 15.00 pm</option>
        <option value="15.00 pm - 16.00 pm">15.00 pm - 16.00 pm</option>
        <option value="16.00 pm - 17.00 pm">16.00 pm - 17.00 pm</option>
      </Select>
    </>
  );
};

export default SelectServiceTime;
