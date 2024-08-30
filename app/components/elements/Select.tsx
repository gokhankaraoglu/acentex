import { capitalize } from "@/app/utils";
import React from "react";

interface SelectProps {
  id: string;
  name: string;
  isRequired?: boolean;
  options: { value: string; label: string }[];
}

function Select({ id, name, isRequired = true, options }: SelectProps) {
  return (
    <div className="select-wrapper">
      <label htmlFor={id} className="select-label">
        {capitalize(name)}
      </label>
      <select className="select-area" id={id} name={id} required={isRequired}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
