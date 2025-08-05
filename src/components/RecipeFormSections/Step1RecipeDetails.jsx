import { useFormik } from "formik";
import { Step1Schema } from "../../validation/validationSchema";
import TextField from "../TextFiled";

export default function Step1RecipeDetails({ onNext, initialValues }) {
  const {
    handleBlur,
    handleChange,
    errors,
    handleSubmit,
    touched,
    values,
  } = useFormik({
    initialValues: {
      recipes: initialValues?.recipes || "",
      cusines: initialValues?.cusines || "",
      description: initialValues?.description || "",
    },
    enableReinitialize: true,
    validationSchema: Step1Schema,
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
          Recipe Details
        </h2>

        <TextField
          label="Recipe Name"
          name="recipes"
          value={values.recipes}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter a recipe"
          error={errors.recipes}
          touched={touched.recipes}
        />

        <TextField
          label="Cuisine"
          name="cusines"
          value={values.cusines}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter a cuisine"
          error={errors.cusines}
          touched={touched.cusines}
        />

        <TextField
          label="Description"
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter a short description"
          error={errors.description}
          touched={touched.description}
          textarea
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 mt-4"
        >
          Next
        </button>
      </form>
    </div>
  );
}
