import React from "react";
import { Input, Checkbox, Button } from "antd";
import TextArea from "antd/es/input/TextArea";

const ClaimForm = () => {
  return (
    <div className=" px-20">
      <h1 className=" text-center pt-20 font-bold text-red-700">Claim Form</h1>

      <div className=" flex flex-col md:flex-row p-6">
        <div className=" flex-1  p-6">
          <p className=" text-center p-5">Driver's Address</p>
          <div className=" flex flex-row  flex-wrap gap-8 md:gap-16 ">
            <div className="">
              <label htmlFor="driverName" className=" pb-3">
                Name
              </label>
              <Input size="large" placeholder="name" />
            </div>
            <div className="">
              <label htmlFor="driverName">Name</label>
              <Input placeholder="name" size="large" />
            </div>
            <div className=" ">
              <label htmlFor="driverName">Name</label>
              <Input placeholder="name" size="large" />
            </div>
            <div className="">
              <label htmlFor="driverName">Name</label>
              <Input placeholder="name" size="large" />
            </div>
          </div>
          <p className="text-center p-5">Details Of Accident</p>
          <div className=" flex  flex-wrap gap-8 md:gap-16 ">
            <div className="">
              <label htmlFor="driverName">Name</label>
              <Input size="large" placeholder="name" />
            </div>
            <div className="">
              <label htmlFor="driverName">Name</label>
              <Input placeholder="name" size="large" />
            </div>
            <div className="">
              <label htmlFor="driverName">Name</label>
              <Input placeholder="name" size="large" />
            </div>
            <div className="">
              <label htmlFor="driverName">Name</label>
              <Input placeholder="name" size="large" />
            </div>
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
              <div className=" flex gap-6 items-center pt-6">
                <label htmlFor="Description">
                  Do you have another policy for the car
                </label>
                <Checkbox>Yes</Checkbox>
                <Checkbox>No</Checkbox>
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
                    <div>
                      <label htmlFor="name1">Name</label>
                      <Input placeholder="name" size="large" />
                    </div>
                    <div>
                      <label htmlFor="Phone No">phone number</label>
                      <Input placeholder="phone number" size="large" />
                    </div>
                  </div>
                  <div className=" flex gap-3 pt-4 items-center">
                    <div>
                      <label htmlFor="name1">Name</label>
                      <Input placeholder="name" size="large" />
                    </div>
                    <div>
                      <label htmlFor="Phone No">phone number</label>
                      <Input placeholder="phone number" size="large" />
                    </div>
                  </div>
                  <div>
                    <div className=" flex gap-3 pt-4 items-center">
                      <div>
                        <label htmlFor="name1">Name</label>
                        <Input placeholder="name" size="large" />
                      </div>
                      <div>
                        <label htmlFor="Phone No">phone number</label>
                        <Input placeholder="phone number" size="large" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-10  flex float-end">
        <Button
          type="primary"
          size="large"
          className=" w-[100px] text-center bg-blue-500 "
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ClaimForm;
