import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import CustomDatePicker from "./DatePicker";
import { format } from "date-fns";

export default function App() {
  const methods = useForm();
  const onSubmit = (data) => console.log(format(data.dob, "dd-MM-yyyy"));

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <CustomDatePicker
          name="dob"
          placeholder="Enter Dob"
          btnText="Date of Birth"
        />
        <input type="submit" className="btn" />
      </form>
    </FormProvider>
  );
}
