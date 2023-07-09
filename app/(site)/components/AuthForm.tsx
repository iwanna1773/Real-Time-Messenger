"use client";

import React, { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";

import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";

type Variant = "LOGIN" | "REGISTER";

function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("data", data);
    setIsLoading(true);

    if (variant === "REGISTER") {
      //
    }

    if (variant === "LOGIN") {
      //
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
  };

  const showFormRegister = () => {
    if (variant === "REGISTER") {
      return (
        <>
          <Input
            id="name"
            label="Name"
            errors={errors}
            register={register}
            disabled={isLoading}
          />

          <Input
            id="email"
            label="Email"
            errors={errors}
            register={register}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            errors={errors}
            register={register}
            disabled={isLoading}
          />
          <Button disabled={isLoading} fullWidth type="submit">
            Register
          </Button>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gay-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <AuthSocialButton
                icon={BsGithub}
                onClick={() => socialAction("github")}
              />
              <AuthSocialButton
                icon={BsGoogle}
                onClick={() => socialAction("google")}
              />
            </div>
            <div
              className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
            >
              <div>Already have an account?</div>
              <div onClick={toggleVariant} className="underline cursor-pointer">
                Login
              </div>
            </div>
          </div>
        </>
      );
    }
    return null;
  };

  const showFormLogin = () => {
    if (variant === "LOGIN") {
      return (
        <>
          <Input
            id="email"
            label="Email"
            errors={errors}
            register={register}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            errors={errors}
            register={register}
            disabled={isLoading}
          />
          <Button disabled={isLoading} fullWidth type="submit">
            Sign in
          </Button>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gay-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <AuthSocialButton
                icon={BsGithub}
                onClick={() => socialAction("github")}
              />
              <AuthSocialButton
                icon={BsGoogle}
                onClick={() => socialAction("google")}
              />
            </div>
            <div
              className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
            >
              <div>New to Messenger?</div>
              <div onClick={toggleVariant} className="underline cursor-pointer">
                Create an account
              </div>
            </div>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {showFormRegister()}
          {showFormLogin()}
        </form>
      </div>
    </div>
  );
}

AuthForm.propTypes = {};

export default AuthForm;
