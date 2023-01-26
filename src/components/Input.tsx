import React, { forwardRef, MouseEventHandler } from "react";

const Input = forwardRef<
  HTMLInputElement,
  {
    editable?: boolean;
    onClick?: MouseEventHandler<HTMLInputElement>;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    placeholder?: string;
    type?: string;
  }
>((props, ref) => {
  const {
    editable = false,
    value,
    onChange,
    label,
    placeholder,
    onClick,
    type = "text",
  } = props;

  return (
    <div className="textfield">
      {label && <label>{label}</label>}
      <input
        onClick={onClick}
        ref={ref}
        readOnly={editable}
        onChange={(e) => onChange && onChange(e.target.value)}
        value={type === "password" ? "*".repeat(value?.length || 0) : value}
        placeholder={placeholder}
      />
    </div>
  );
});
export default Input;
