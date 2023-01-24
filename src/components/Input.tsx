import React, { forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  {
    onClick?: (e: any) => void;
    value?: any;
    onChange?: (value: any) => void;
    label?: string;
    placeholder?: string;
    type?: string;
  }
>((props, ref) => {
  const { value, onChange, label, placeholder, onClick, type = "text" } = props;
  return (
    <div className="textfield">
      {label && <label>{label}</label>}
      <input
        onClick={onClick}
        ref={ref}
        type={type}
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
});
export default Input;
