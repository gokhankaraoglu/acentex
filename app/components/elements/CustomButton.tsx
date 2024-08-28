import { ReactNode } from "react";

type CustomButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
  form?: string;
  type?: "button" | "submit" | "reset";
  saturated?: boolean;
  className?: string;
  disabled?: boolean;
};

function CustomButton({
  onClick,
  children,
  form,
  type = "button",
  saturated = false,
  className = "",
  disabled = false,
}: CustomButtonProps) {
  const baseClass = "btn";
  const saturatedClass = saturated ? "saturated" : "";

  return (
    <button
      onClick={onClick}
      form={form}
      type={type}
      className={`${baseClass} ${saturatedClass} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default CustomButton;
