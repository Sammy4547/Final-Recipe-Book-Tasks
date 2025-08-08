import { useFormik } from "formik";
import { Step1Schema } from "../../validation/validationSchema";
import TextField from "../Reusable/TextFiled";
import Button from "../Reusable/Button";

export default function Step1RecipeDetails({ onNext, initialValues }) {
  const { handleBlur, handleChange, errors, handleSubmit, touched, values } =
    useFormik({
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
    <div className="flex justify-center items-center min-h-screen dark:bg-neutral-700 dark:text-white bg-gray-100 text-black">
      <form
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg dark:bg-neutral-800 dark:text-white text-black "
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center dark:text-white text-gray-800">
          Recipe Details
        </h2>

        <div className="dark:text-white text-black">
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
            label="Cusines"
            name="cusines"
            value={values.cusines}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter a recipe"
            error={errors.cusines}
            type="select"
            options={["Indian", "Thai", "Chinese", "American", "Mexican"]}
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
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 mt-4"
        >
          Next
        </Button>
      </form>
    </div>
  );
}
