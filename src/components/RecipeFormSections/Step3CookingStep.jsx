import React from "react";
import TextField from "../Reusable/TextFiled";
import { useFormik } from "formik";
import { Step3Schema } from "../../validation/validationSchema";
import Button from "../Reusable/Button";

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
    <div className="h-screen flex justify-center bg-gray-100 dark:bg-neutral-700 px-4">
      <form
        className="w-full max-w-lg bg-white dark:bg-neutral-800 dark:text-white p-6 rounded-lg shadow-lg space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
          Cooking Steps
        </h2>

        {/* Text Area Field */}
        <TextField
          label="Cooking Step"
          name="cookingstep"
          value={values.cookingstep}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter the cooking step..."
          error={errors.cookingstep}
          touched={touched.cookingstep}
          textarea
        />

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={onPrev}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white px-4 py-2 rounded-md transition"
          >
            Back
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
