import React from "react";
import { useFormik } from "formik";
import { Step4Schema } from "../../validation/validationSchema";
import { useDispatch } from "react-redux";
import { resetRecipe } from "../../features/recipes/recipeSlice";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="img"
          accept="image/*"
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
          <div className="text-red-500 text-sm">{errors.img}</div>
        )}

        {values.img && (
          <img
            src={values.img}
            alt="Preview"
            className="w-48 h-48 object-cover mt-4"
          />
        )}

        <Button>Upload</Button>

        <div className="flex justify-center space-x-4 mt-4">
          <Button type="button" variant="secondary" onClick={onPrev}>
            Back
          </Button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
