import React, { useState } from 'react';
import Input from '../Input/Input';
import validator from 'validator';
import { stringChecker } from '../helper/helper';
import './BasicInfo.css';

export default function BasicInfo({ formData, setFormData, page, setPage }) {
  const [errorFields, setErrorFields] = useState([]);

  const validation = () => {
    let errors = [];
    if (stringChecker(validator, formData.firstName, 1, 20))
      errors.push('firstName');
    if (stringChecker(validator, formData.middleName, 0, 20))
      errors.push('middleName');
    if (stringChecker(validator, formData.lastName, 1, 20))
      errors.push('lastName');
    if (!validator.isMobilePhone(formData.mobileNumber, 'en-AU'))
      errors.push('mobileNumber');
    if (
      !formData.email ||
      (formData.email && !validator.isEmail(formData.email))
    )
      errors.push('email');

    console.log(errors);
    setErrorFields(errors);
    return errors;
  };

  const clearError = (error) => {
    let newErrors = errorFields.filter((e) => {
      return e !== error;
    });
    setErrorFields(newErrors);
  };

  const nextPage = () => {
    console.log(formData);
    if (!validation().length) setPage((currPage) => currPage + 1);
  };

  return (
    <div className="basic-info-container">
      <Input
        labelName="First name"
        inputType="text"
        defaultText="As it appears on your license"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
        error={errorFields.indexOf('firstName') > -1 ? 'hasError' : ''}
        errorMsg={'First name is not valid'}
        onFocus={() => {
          clearError('firstName');
        }}
      />
      <Input
        labelName="Middle name"
        inputType="text"
        defaultText="Optional"
        value={formData.middleName}
        onChange={(e) => {
          setFormData({ ...formData, middleName: e.target.value });
        }}
        error={errorFields.indexOf('middleName') > -1 ? 'hasError' : ''}
        errorMsg={'Middle name is not valid'}
        onFocus={() => {
          clearError('middleName');
        }}
      />
      <Input
        labelName="Last name"
        inputType="text"
        defaultText="As it appears on your license"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
        error={errorFields.indexOf('lastName') > -1 ? 'hasError' : ''}
        errorMsg={'Last name is not valid'}
        onFocus={() => {
          clearError('lastName');
        }}
      />
      <Input
        labelName="Mobile number"
        inputType="text"
        defaultText="+61"
        min="0"
        value={formData.mobileNumber}
        onChange={(e) => {
          setFormData({ ...formData, mobileNumber: e.target.value });
        }}
        error={errorFields.indexOf('mobileNumber') > -1 ? 'hasError' : ''}
        errorMsg={'Mobile number is not valid'}
        onFocus={() => {
          clearError('mobileNumber');
        }}
      />
      <Input
        labelName="Email"
        inputType="text"
        defaultText="Please enter a valid email"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
        error={errorFields.indexOf('email') > -1 ? 'hasError' : ''}
        errorMsg={'Email is not valid'}
        onFocus={() => {
          clearError('email');
        }}
      />
      {/* <button
        disabled={page === 0}
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      >
        Prev
      </button> */}
      <div className="button-container">
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}
