import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { redirect } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const LoginFrom = () => {
  const { register, handleSubmit } = useForm();
  const notify = () => toast.success("Login Successfull !");
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    };

    // console.log(Data);
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    });
    const Data = await response.json();
    if (response.status === 400) {
      console.log(data.error);

      return;
    } else {
      console.log(Data);
      const accessToken = Data.accessToken;
      const decoded = jwtDecode(accessToken);
      console.log(decoded.role);

      const userRole = decoded.role;
      localStorage.setItem("token", accessToken);

      notify();
      switch (userRole) {
        case "admin":
          navigate("/admin");
          break;
        case "user":
          console.log(user);
          navigate("/signup");
          break;
        default:
          console.log(home);
      }
    }
  };

  return (
    <div>
      <p className="text-[42px] font-normal leading-6 text-center pt-20">
        Login Here !!
      </p>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-5 px-48 pt-12">
          <div className="col-span-3 flex flex-col gap-6 items-center">
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
                variant="st"
                label="password"
                placeholder="password"
              />
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

export default LoginFrom;
