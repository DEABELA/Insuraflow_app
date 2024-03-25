import React from "react";
import { Input, Checkbox } from "antd";
import TextArea from "antd/es/input/TextArea";

const InputWithLabel = ({ label, placeholder, value, type, onChange }) => {
  return (
    <div className="pb-3">
      <label htmlFor={label}>{label}</label>
      <Input
        size="large"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const From1 = ({ FormData, setFormData }) => {
  const handleInputChange = (key, newValue) => {
    setFormData({ ...FormData, [key]: newValue });
  };

  return (
    <div className="flex flex-col md:flex-row p-6">
      <div className="flex-1 p-6">
        <p className="text-center p-5">Driver's Address</p>
        <div className="flex flex-row flex-wrap gap-8 md:gap-16">
          {[
            { label: "Full Name", placeholder: "full name", key: "driverName" },
            { label: "Phone Number", placeholder: "Phone", key: "driverPhone" },
            { label: "Licence", placeholder: "Licence", key: "driverLicence" },
            {
              label: "Ocupation",
              placeholder: "Ocupation",
              key: "driverOcupation",
            },
          ].map(({ label, placeholder, key }) => (
            <InputWithLabel
              key={key}
              label={label}
              placeholder={placeholder}
              value={FormData[key]}
              type="text"
              onChange={(e) => handleInputChange(key, e.target.value)}
            />
          ))}
        </div>
        <p className="text-center p-5">Details Of Accident</p>
        <div className="flex flex-wrap gap-8 md:gap-16">
          {[
            {
              label: "Date Of Accident",
              placeholder: "Date of Accident",
              key: "dateOfAccident",
              type: "date",
            },
            {
              label: "Speed Of Car",
              placeholder: "Speed Of Car",
              key: "speedOfCar",
            },
            {
              label: "Time Of Accident",
              placeholder: "Time Of Accident",
              key: "timeOfAccident",
            },
            {
              label: "Place of Accident",
              placeholder: "Place of Accident",
              key: "placeOfAccident",
            },
          ].map(({ label, placeholder, key, type }) => (
            <InputWithLabel
              key={key}
              label={label}
              placeholder={placeholder}
              value={FormData[key]}
              type={type || "text"}
              onChange={(e) => handleInputChange(key, e.target.value)}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 p-6">
        <div className="text-center p-5">
          <label htmlFor="Description" className="text-center text-blue-700">
            Description of Accident
          </label>
          <TextArea
            placeholder="Description of Accident"
            size="large"
            rows={4}
            className=""
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center pt-6">
          <label htmlFor="Description">
            Do you have another policy for the car ?
          </label>
          <div className="flex gap-10">
            <Checkbox>Yes</Checkbox>
            <Checkbox>No</Checkbox>
          </div>
        </div>
        <div className="flex gap-6 items-center pt-6">
          <label htmlFor="Description">
            Do the accident registered by traffic police
          </label>
          <Checkbox>Yes</Checkbox>
          <Checkbox>No</Checkbox>
        </div>
        <div>
          <p className="text-center pt-5">Witness</p>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex gap-3 pt-4 items-center">
              <InputWithLabel
                label="Name"
                placeholder="Name"
                value={FormData[`witnessName${index}`]}
                type="text"
                onChange={(e) =>
                  handleInputChange(`witnessName${index}`, e.target.value)
                }
              />
              <InputWithLabel
                label="Phone Number"
                placeholder="Phone Number"
                value={FormData[`witnessPhone${index}`]}
                type="text"
                onChange={(e) =>
                  handleInputChange(`witnessPhone${index}`, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default From1;
