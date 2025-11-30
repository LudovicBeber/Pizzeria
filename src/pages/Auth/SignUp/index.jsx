import React, { useState } from "react";
import Input from "../../../components/form/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { apiService } from "../../../main";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    request: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({
      username: "",
      email: "",
      password: "",
      request: ""
    });

    const newErrors = {};

    if (!data.username || data.username.length < 3) {
      newErrors.username =
        "Le nom d'utilisateur doit comporter au moins 3 caractères";
    }

    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;

    if (!data.email || !emailRegex.test(data.email)) {
      newErrors.email = "Veuillez renseigner une adresse email valide";
    }

    if (!data.password || data.password.length < 8) {
      newErrors.password =
        "Le mot de passe doit comporter au moins 8 caractères";
    }

    if (newErrors.username || newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    apiService.users.signUp(data).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.error(err)
    });
  };

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white text-center">Sign Up</h1>
      <form
        className="mt-8 max-w-lg flex flex-col gap-2 mx-auto w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-2 items-start">
          <Input
            id={"username"}
            type={"text"}
            label={"Username"}
            onChange={handleChange}
            value={data.username}
            placeholder={"Enter your username"}
            errorMessage={errors?.username || ""}
          />
          <Input
            id={"email"}
            type={"email"}
            label={"Email"}
            onChange={handleChange}
            value={data.email}
            placeholder={"Enter your email"}
            errorMessage={errors?.email || ""}
          />
        </div>
        <Input
          id={"password"}
          type={"password"}
          label={"Password"}
          onChange={handleChange}
          value={data.password}
          placeholder={"********"}
          errorMessage={errors?.password || ""}
        />
        {errors?.request ?? <p className="mt-4 text-lg text-red-600">{errors?.request}</p>}
        <button
          type={'submit'}
          className={`px-4 py-2 font-bold bg-blue-600 rounded-md mt-4`}
        >
          Register my account
        </button>
      </form>
      <Link
        to={"/auth/sign-in"}
        className="text-white/75 text-bold mt-4 w-fit mx-auto underline"
      >
        I already have an account
      </Link>
    </div>
  );
};

export default SignUp;
