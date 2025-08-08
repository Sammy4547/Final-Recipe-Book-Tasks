import React from "react";
import { useFormik } from "formik";
import { Step4Schema } from "../../validation/validationSchema";
import { useDispatch } from "react-redux";
import { resetRecipe } from "../../features/recipes/recipeSlice";
import { useNavigate } from "react-router-dom";
import Button from "../Reusable/Button";

export default function Step4ImageUpload({ onPrev, onNext, initialValues }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleSubmit, errors, touched, values, setFieldValue } = useFormik({
    initialValues: {
      img: initialValues?.img || "",
    },
    enableReinitialize: true,
    validationSchema: Step4Schema,
    onSubmit: (values) => {
      onNext(values);
      dispatch(resetRecipe());
      navigate("/recipes");
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-700 px-4">
      <form
        className="w-full max-w-lg bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-8 space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center">
          Upload Recipe Image
        </h2>

        {/* File Input */}
        <div>
          <label
            htmlFor="img"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Select an image
          </label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            className="block w-full text-sm text-gray-700 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition"
            onChange={(event) => {
              const file = event.currentTarget.files[0];
              const reader = new FileReader();
              reader.onloadend = () => {
                setFieldValue("img", reader.result);
              };
              if (file) {
                reader.readAsDataURL(file);
              }
            }}
          />
          {touched.img && errors.img && (
            <p className="mt-1 text-sm text-red-500">{errors.img}</p>
          )}
        </div>

        {/* Image Preview */}
        {values.img && (
          <div className="flex justify-center">
            <img
              src={values.img}
              alt="Preview"
              className="w-48 h-48 object-cover rounded-md border border-gray-300 dark:border-gray-600"
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          <Button
            type="button"
            variant="secondary"
            onClick={onPrev}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white px-4 py-2 rounded-md transition"
          >
            Back
          </Button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
