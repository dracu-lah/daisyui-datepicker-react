import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import CustomDatePicker from "./DatePicker";

export default function App() {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <CustomDatePicker name="dob" placeholder="Enter Dob" />
        <input type="submit" className="btn" />
      </form>
    </FormProvider>
  );
}
