import { capitalize } from "@/app/utils";
import React from "react";

interface SelectProps {
  id: string;
  name: string;
  isRequired?: boolean;
  options: { value: string; label: string }[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

function CustomSelect({
  id,
  name,
  isRequired = true,
  options,
  onChange,
}: SelectProps) {
  return (
    <div className="select-wrapper">
      <label htmlFor={id} className="select-label">
        {capitalize(name)}
      </label>
      <select
        className="select-area"
        id={id}
        name={id}
        required={isRequired}
        onInput={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CustomSelect;
