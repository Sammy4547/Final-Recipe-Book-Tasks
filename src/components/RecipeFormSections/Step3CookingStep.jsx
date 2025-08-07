import React from "react";
import TextField from "../TextFiled";
import { useFormik } from "formik";
import { Step3Schema } from "../../validation/validationSchema";
import Button from "../Button";

export default function Step3CookingStep({ onNext, onPrev, initialValues }) {
  const { handleBlur, handleChange, errors, handleSubmit, touched, values } =
    useFormik({
      initialValues: {
        cookingstep: initialValues?.cookingstep || "",
      },
      enableReinitialize: true,
      validationSchema: Step3Schema,
      onSubmit: (values) => {
        onNext(values);
      },
    });
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Cooking Steps
        </h2>

        <TextField
          label="Cooking Step"
          name="cookingstep"
          value={values.cookingstep}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter a Cooking Step"
          error={errors.cookingstep}
          touched={touched.cookingstep}
          textarea
        />

        <Button
          className="mr-10"
          onClick={onPrev}
          type="button"
          variant="secondary"
        >
          Back
        </Button>

        <Button className="ml-50" type="submit" variant="primary">
          Next
        </Button>
      </form>
    </div>
  );
}
