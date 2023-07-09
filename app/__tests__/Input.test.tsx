import React from "react";
import { render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import Input from "@/app/components/inputs/Input";

describe("Input", () => {
  it("renders label correctly", () => {
    const registerMock = jest.fn(); // Tạo hàm mock cho register
    const label = "Email";
    const errorsMock = {} as Record<string, any>;

    render(
      <Input
        label={label}
        id="email"
        register={registerMock}
        errors={errorsMock}
      />
    );

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });

  //   it("renders input with correct attributes", () => {
  //     const id = "email";
  //     const type = "text";
  //     const required = true;
  //     const { register } = useForm();

  //     render(
  //       <Input
  //         label="Email"
  //         id={id}
  //         type={type}
  //         required={required}
  //         register={register}
  //         errors={{}}
  //       />
  //     );

  //     const inputElement = screen.getByRole("textbox", { name: "Email" });
  //     expect(inputElement).toBeInTheDocument();
  //     expect(inputElement).toHaveAttribute("id", id);
  //     expect(inputElement).toHaveAttribute("type", type);
  //     expect(inputElement).toHaveAttribute("required");
  //   });

  //   it("applies error styles when there are errors", () => {
  //     const id = "email";
  //     const { register } = useForm();
  //     const errors = {
  //       [id]: "Email is required",
  //     };

  //     render(<Input label="Email" id={id} register={register} errors={errors} />);

  //     const inputElement = screen.getByRole("textbox", { name: "Email" });
  //     expect(inputElement).toHaveClass("focus:ring-rose-500");
  //   });
});
