import { useState } from "react";
import { Input, Checkbox, Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import From1 from "./From1";
import From2 from "./From2";

const ClaimForm = () => {
  const [page, setPage] = useState(0);
  const [FormData, setFormData] = useState({
    driverName: "",
    driverPhone: "",
    driverLicence: "",
    driverOcupation: "",
    driverAddress: "",
  });

  const DisplayPage = () => {
    if (page == 0) {
      return <From1 FormData={FormData} setFormData={setFormData} />;
    } else {
      return <From2 />;
    }
  };
  return (
    <div className=" px-10">
      <h1 className=" text-center pt-20 font-bold text-red-700">Claim Form</h1>

      {DisplayPage()}
      <div className=" px-10  flex justify-between items-center gap-10">
        <Button
          disabled={page == 0}
          onClick={() => {
            console.log(FormData);
            setPage((currPage) => currPage - 1);
          }}
          type="primary"
          size="large"
          className=" w-[100px] text-center bg-blue-500 "
        >
          prev
        </Button>
        <Button
          disabled={page == 1}
          onClick={() => {
            console.log(FormData);
            setPage((currPage) => currPage + 1);
          }}
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
