import React from "react";
import { Icon, Icons } from "./Icon";

export enum InputType {
  DATE = "date",
  TEL = "tel",
  EMAIL = "email",
  TEXT = "text",
  NUMBER = "number",
}

interface InputProps {
  id: string;
  type: InputType;
  pattern?: string;
  name?: string;
  isRequired?: boolean;
  autoComplete?: string;
  placeholder?: string;
  maxlength?: number;
  minlength?: number;
  information?: string;
  onChange?: (e: any) => void;
  value?: string;
  className?: string;
}

function Input({
  id,
  type,
  name,
  pattern,
  isRequired = true,
  autoComplete = "off",
  placeholder,
  maxlength,
  minlength,
  information = "",
  onChange,
  className = "",
}: InputProps) {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        id={id}
        name={id}
        pattern={pattern}
        required={isRequired}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxlength}
        minLength={minlength}
        className={`input-area ${className}`}
        onChange={onChange}
      />
      <label htmlFor={id} className="input-label">
        <span>{name}</span>
      </label>
      <div className="absolute right-4 top-2 cursor-pointer">
        {type === InputType.DATE && <Icon icon={Icons.CALENDAR_ICON} />}
        {!!information && (
          <div className="relative group">
            <Icon icon={Icons.INFO_ICON} />
            <div className="absolute -right-6 mt-2 w-[90vw] max-w-[470px] bg-blue-100 text-blue-400 text-sm font-light px-4 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-4 border-red-500">
              {information}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;