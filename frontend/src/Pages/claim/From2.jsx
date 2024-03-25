import React from "react";
import { Input, Checkbox, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import ImageUploader from "../../components/ImageUploader";
const From2 = () => {
  return (
    <div className="">
      <div className=" flex flex-col gap-7 ">
        <label htmlFor="Description" className="">
          Description of Accident
        </label>
        <TextArea
          className=" "
          placeholder="Description of Accident"
          size="large"
          rows={7}
        />
      </div>
      <div className=" flex  justify-between mt-20 flex-wrap">
        <ImageUploader inputFieldClassName="front-side" />
        <ImageUploader inputFieldClassName="back-side" />
        <ImageUploader inputFieldClassName="right-side" />
        <ImageUploader inputFieldClassName="left-side" />
      </div>
    </div>
  );
};

export default From2;
