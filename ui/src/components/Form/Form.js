import React, { useState } from 'react';
import BasicInfo from '../Step/BasicInfo';
import OtherInfo from '../Step/OtherInfo';
import { initialState } from './initialState';
import './Form.css';

export default function Form() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState(initialState);

  const FormTitles = ['Tell us about yourself', 'A little about you'];

  const PageBody = () => {
    if (page === 0)
      return (
        <BasicInfo
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
    if (page === 1)
      return (
        <OtherInfo
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
  };

  return (
    <div className="form">
      <div className="progressBar">
        <div
          style={{
            width: page === 0 ? '33.3%' : page === 1 ? '66.6%' : '100%',
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <label>{FormTitles[page]}</label>
        </div>
        <div className="body">{PageBody()}</div>
        <div className="footer"></div>
      </div>
    </div>
  );
}
