import React from "react";
import { Input, Checkbox, Button } from "antd";
import TextArea from "antd/es/input/TextArea";

const InputWithLabel = (label, placeholder, type) => {
  return (
    <div className="">
      <label htmlFor="driverName" className=" pb-3">
        {label}
      </label>
      <Input size="large" type={type} placeholder={placeholder} />
    </div>
  );
};
const From1 = () => {
  return (
    <div>
      <div className=" flex flex-col md:flex-row p-6">
        <div className=" flex-1  p-6">
          <p className=" text-center p-5">Driver's Address</p>
          <div className=" flex flex-row  flex-wrap gap-8 md:gap-16 ">
            {InputWithLabel("Full Name", "full name")}
            {InputWithLabel("Occupation", "occupation")}
            {InputWithLabel("License No", "license No")}
            {InputWithLabel("Phone Number", "phone number")}
          </div>
          <p className="text-center p-5">Details Of Accident</p>
          <div className=" flex  flex-wrap gap-8 md:gap-16 ">
            {InputWithLabel("Date Of Accident", "dateOfAccident", "date")}
            {InputWithLabel("Speed Of Car", "speedOfCar")}
            {InputWithLabel("Time Of Accident", "timeOfAccident")}
            {InputWithLabel("Place of Accident", "placeOfAccident")}
          </div>
        </div>
        <div>
          <div className=" flex-1 ">
            <div>
              <div>
                <label htmlFor="Description">Description of Accident</label>
                <TextArea
                  placeholder="Description of Accident"
                  size="large"
                  rows={4}
                />
              </div>
              <div className=" flex flex-col md:flex-row gap-6 items-center pt-6">
                <label htmlFor="Description">
                  Do you have another policy for the car ?
                </label>
                <div className=" flex gap-10">
                  <Checkbox>Yes</Checkbox>
                  <Checkbox>No</Checkbox>
                </div>
              </div>
              <div className=" flex gap-6 items-center pt-6">
                <label htmlFor="Description">
                  Do the accident registed by trafic police
                </label>
                <Checkbox>Yes</Checkbox>
                <Checkbox>No</Checkbox>
              </div>
              <div>
                <p className=" text-center pt-5">Witness</p>
                <div>
                  <div className=" flex gap-3 pt-4 items-center">
                    {InputWithLabel("Name", "name")}
                    {InputWithLabel("Phone Number", "phone_number")}
                  </div>
                  <div className=" flex gap-3 pt-4 items-center">
                    {InputWithLabel("Name", "name")}
                    {InputWithLabel("Phone Number", "phone_number")}
                  </div>
                  <div>
                    <div className=" flex flex-col md:flex-row gap-3 pt-4 items-center">
                      {InputWithLabel("Name", "name")}
                      {InputWithLabel("Phone Number", "phone_number")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default From1;
