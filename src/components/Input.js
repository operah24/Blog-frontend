import React from 'react';

function Input({
  type,
  name,
  className,
  value,
  handleChange,
  label,
  placeholder,
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
