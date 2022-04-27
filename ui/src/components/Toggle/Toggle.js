import React from 'react';
import './Toggle.css';

export default function Toggle({ labelText, value, onChange }) {
  return (
    <>
      <div>
        <label className="switch">
          <input type="checkbox" checked={value} onChange={onChange} />
          <span className="slider round"></span>
        </label>
        <label className="switch-text">{labelText}</label>
      </div>
    </>
  );
}
