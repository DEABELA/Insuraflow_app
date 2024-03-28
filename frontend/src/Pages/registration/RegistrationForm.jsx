import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
const RegistrationForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      phoneNumber: data.phoneNumber,
      role: data.role,
      address: {
        subCity: data.subCity,
        kebele: data.kebele,
        houseNumber: data.houseNumber,
        postalCode: data.postalCode,
      },
    };

    // console.log(Data);
    const response = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    });
    const Data = await response.json();
    if (response.status === 400) {
      console.log(data.error);

      return;
    } else {
      console.log("User Created");
    }
  };

  return (
    <div>
      <p className="text-[42px] font-normal leading-6 text-center pt-20">
        Register Here !!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-5 px-48">
          <div className="col-span-3 flex flex-col gap-6">
            <div>
              <p className="text-[32px] font-[300] text-center pt-32 pb-16">
                Personal Details
              </p>
              <div className="flex flex-wrap gap-9">
                <div className="w-96">
                  <Input
                    {...register("firstName")}
                    variant="st"
                    label="First Name"
                    placeholder="first name"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("lastName")}
                    variant="outlined"
                    label="Last Name"
                    placeholder="last name"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("email")}
                    variant="outlined"
                    label="email"
                    placeholder="email"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("password")}
                    variant="outlined"
                    label="Password"
                    placeholder="password"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("phoneNumber")}
                    variant="outlined"
                    label="Phone Number"
                    placeholder="phone number"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("role")}
                    variant="outlined"
                    label="role"
                    placeholder="role"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-[32px] font-normal text-center pb-10">
                Address
              </p>
              <div className="flex gap-9 flex-wrap">
                <div className="w-96">
                  <Input
                    {...register("subCity")}
                    variant="st"
                    label="Sub-City"
                    placeholder="sub-city"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("kebele")}
                    variant="st"
                    label="Kebele(Woreda)"
                    placeholder="Kebele(Woreda)"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("houseNumber")}
                    variant="st"
                    label="House-Number"
                    placeholder="House-Number"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("postalCode")}
                    variant="st"
                    label="Postal Code"
                    placeholder="postal code"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button color="indigo" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
