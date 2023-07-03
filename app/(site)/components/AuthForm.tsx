"use client";

import React, { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";

type Variant = "LOGIN" | "REGISTER";

function AuthForm() {
  const [variant, setVariant] = useState<Variant>("REGISTER");
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
          <Input id="name" label="Name" errors={errors} register={register} />

          <Input id="email" label="Email" errors={errors} register={register} />
          <Input
            id="password"
            label="Password"
            errors={errors}
            register={register}
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
              <AuthSocialButton />
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
        </form>
      </div>
    </div>
  );
}

AuthForm.propTypes = {};

export default AuthForm;
