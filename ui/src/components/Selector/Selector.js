import React from 'react';
import './Selector.css';

export default function Selector({
  labelText,
  className,
  options,
  value,
  placeHolder,
  onChange,
  error,
  errorMsg,
  onFocus,
}) {
  return (
    <>
      <div>
        <label>{labelText}</label>
      </div>
      <div>
        <select className={className} onChange={onChange} onFocus={onFocus}>
          <option hidden value="" className="placeHolder">
            {value === '' || value === undefined ? placeHolder : value}
          </option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <p style={error ? {} : { display: 'none' }}>{errorMsg}</p>
      </div>
    </>
  );
}
