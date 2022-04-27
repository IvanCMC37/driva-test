import React from 'react';
import './Input.css';

export default function Input({
  labelName,
  inputType,
  defaultText,
  value,
  onChange,
  error,
  errorMsg,
  onFocus,
}) {
  return (
    <>
      <label className={labelName}>{labelName}</label>
      <div>
        <input
          type={inputType}
          placeholder={defaultText}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
        />
      </div>
      <div>
        <p style={error ? {} : { display: 'none' }}>{errorMsg}</p>
      </div>
    </>
  );
}
