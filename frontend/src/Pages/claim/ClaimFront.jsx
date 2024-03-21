import React from "react";
import NavBar from "../../components/NavBar";

const ClaimFront = () => {
  return (
    <div>
      <NavBar />
      <div className=" mt-12 ">
        <div className="grid grid-cols-4">
          <div className=" col-span-2 grid px-36">
            <div className=" text-[50px] text-[#264a9f] font-medium leading-[68px]">
              We Hope Everything Is Fine
            </div>
            <div className=" mt-12 text-[20px] text-[#071e54cc] font-medium leading-[30px]">
              Do You Have A Claim Request To Make, Or Already Have A Claim
              Registered With Us And Wish To Track Its Progress?
            </div>
            <div className=" flex mt-12 justify-between">
              <div className="  flex items-center justify-between m-7 p-16 w-full bg-[#E9eaee]  shadow-xl rounded-md">
                <h1>Icon</h1>
                <p className="text-[16px] text-[#264a9f] font-medium leading-[27px]">
                  initiate Claim
                </p>
              </div>
              <div className="  flex items-center justify-between m-7 p-16 w-full shadow-xl rounded-md bg-[#E9eaee]">
                <h1>Icon</h1>
                <p className="text-[16px] text-[#264a9f] font-medium leading-[27px]">
                  initiate Claim
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ClaimFront;
