import React, { useState } from 'react';
import Input from '../Input/Input';
import Selector from '../Selector/Selector';
import Toggle from '../Toggle/Toggle';
import validator from 'validator';
import { stringChecker } from '../helper/helper';
import axios from 'axios';
import { initialState } from '../Form/initialState';
import './OtherInfo.css';

export default function OtherInfo({ formData, setFormData, page, setPage }) {
  const [errorFields, setErrorFields] = useState([]);
  const [callStatus, setCallStatus] = useState(false);

  const validation = () => {
    let errors = [];
    if (!formData.relationshipStatus) errors.push('relationshipStatus');
    if (
      formData.incomeAmount <= 0 ||
      !validator.isInt(formData.incomeAmount?.toString())
    )
      errors.push('incomeAmount');
    if (!formData.incomeFrequency) errors.push('incomeFrequency');
    if (stringChecker(validator, formData.occupation, 1, 20))
      errors.push('occupation');
    if (stringChecker(validator, formData.employer, 1, 20, true))
      errors.push('employer');
    if (!formData.currentEmploymentYear) errors.push('currentEmploymentYear');
    if (!formData.currentEmploymentMonth) errors.push('currentEmploymentMonth');
    if (!formData.haveDepandants) errors.push('haveDepandants');

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

  const submitForm = () => {
    /*If passed validation, post request will start*/
    if (!validation().length) {
      createUser();
      console.log(formData);
    }
  };

  const createUser = async () => {
    try {
      setCallStatus(true);
      const resp = await axios.post('http://localhost:8080/api/user', formData);
      console.log(resp.data);

      setCallStatus(false);
      setFormData(initialState);

      setPage(0);
      alert('Submitted');
    } catch (error) {
      console.log(error.response);
      setCallStatus(false);
      alert(error);
    }
  };

  return (
    <div className="Other-info-container">
      <Selector
        labelText={"What's your relationship status?"}
        className={'relationship-selector'}
        options={['Single', 'Married']}
        placeHolder={'Please select'}
        value={formData.relationshipStatus}
        onChange={(e) => {
          setFormData({ ...formData, relationshipStatus: e.target.value });
          console.log(e.target.value);
        }}
        error={errorFields.indexOf('relationshipStatus') > -1 ? 'hasError' : ''}
        errorMsg={'Please select a value'}
        onFocus={() => {
          clearError('relationshipStatus');
        }}
      />
      <div className="spread-container">
        <div className="spread-container-div">
          <Input
            labelName="Your after-tax income"
            inputType="number"
            defaultText="$"
            value={formData.incomeAmount}
            onChange={(e) => {
              setFormData({
                ...formData,
                incomeAmount: Number(e.target.value),
              });
            }}
            error={errorFields.indexOf('incomeAmount') > -1 ? 'hasError' : ''}
            errorMsg={'income Amount is not valid'}
            onFocus={() => {
              clearError('incomeAmount');
            }}
          />
        </div>
        <div className="spread-container-div">
          <Selector
            labelText={''}
            className={'frequency-selector'}
            options={['Weekly', 'Fortnightly', 'Monthly']}
            placeHolder={'Select frequency'}
            value={formData.incomeFrequency}
            onChange={(e) => {
              setFormData({
                ...formData,
                incomeFrequency: e.target.value,
              });
              console.log(e.target.value);
            }}
            error={
              errorFields.indexOf('incomeFrequency') > -1 ? 'hasError' : ''
            }
            errorMsg={'Please select a value'}
            onFocus={() => {
              clearError('incomeFrequency');
            }}
          />
        </div>
      </div>
      <Input
        labelName="Occupation"
        inputType="text"
        defaultText="Enter your occupation"
        value={formData.occupation}
        onChange={(e) => {
          setFormData({ ...formData, occupation: e.target.value });
        }}
        error={errorFields.indexOf('occupation') > -1 ? 'hasError' : ''}
        errorMsg={'occupation is not valid'}
        onFocus={() => {
          clearError('occupation');
        }}
      />
      <Input
        labelName="Current Employer"
        inputType="text"
        defaultText="Enter your employer's name"
        value={formData.employer}
        onChange={(e) => {
          setFormData({ ...formData, employer: e.target.value });
        }}
        error={errorFields.indexOf('employer') > -1 ? 'hasError' : ''}
        errorMsg={'employer is not valid'}
        onFocus={() => {
          clearError('employer');
        }}
      />
      <div className="spread-container">
        <div className="spread-container-div">
          <Selector
            labelText={'Time in current employment'}
            className={'year-selector'}
            options={[
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12',
            ]}
            placeHolder={'Number of years'}
            value={formData.currentEmploymentYear}
            onChange={(e) => {
              setFormData({
                ...formData,
                currentEmploymentYear: Number(e.target.value),
              });
              console.log(e.target.value);
            }}
            error={
              errorFields.indexOf('currentEmploymentYear') > -1
                ? 'hasError'
                : ''
            }
            errorMsg={'Please select a value'}
            onFocus={() => {
              clearError('currentEmploymentYear');
            }}
          />
        </div>
        <div className="spread-container-div">
          <Selector
            labelText={''}
            className={'month-selector'}
            options={[
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12',
            ]}
            placeHolder={'Number of months'}
            value={formData.currentEmploymentMonth}
            onChange={(e) => {
              setFormData({
                ...formData,
                currentEmploymentMonth: Number(e.target.value),
              });
              console.log(e.target.value);
            }}
            error={
              errorFields.indexOf('currentEmploymentMonth') > -1
                ? 'hasError'
                : ''
            }
            errorMsg={'Please select a value'}
            onFocus={() => {
              clearError('currentEmploymentMonth');
            }}
          />
        </div>
      </div>
      <Selector
        labelText={'Have any dependants?'}
        className={'dependant-selector'}
        options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        placeHolder={'Please select'}
        value={formData.haveDepandants}
        onChange={(e) => {
          setFormData({
            ...formData,
            haveDepandants: Number(e.target.value),
          });
          console.log(e.target.value);
        }}
        error={errorFields.indexOf('haveDepandants') > -1 ? 'hasError' : ''}
        errorMsg={'Please select a value'}
        onFocus={() => {
          clearError('haveDepandants');
        }}
      />
      <Toggle
        labelText={'Do you have other sources of income?'}
        value={formData.haveOtherIncome}
        onChange={(e) => {
          setFormData({ ...formData, haveOtherIncome: e.target.checked });
        }}
      />
      <div className="button-container">
        <button
          disabled={callStatus}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button disabled={callStatus} onClick={submitForm}>
          Submit
        </button>
        <p style={callStatus ? {} : { display: 'none' }}>
          Please wait, your request is being submitted....
        </p>
      </div>
    </div>
  );
}
