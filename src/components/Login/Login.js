import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Email"
        {...register("Email", {
          required: "This field is required",
          max: 150,
          pattern: /(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))/i,
        })}
      />
      <ErrorMessage
        errors={errors}
        name="Email"
        render={({ message }) => <p>{message}</p>}
      />
      <input
        type="password"
        placeholder="Password"
        {...register("Password", {
          required: "Please write your password",
          max: 50,
          min: 8,
          pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/i,
        })}
      />
      <ErrorMessage
        errors={errors}
        name="Password"
        render={({ message }) => <p>{message}</p>}
      />

      <button className="btn btn-primary" type="submit">
        Log In
      </button>
    </form>
  );
};
export default Login;
