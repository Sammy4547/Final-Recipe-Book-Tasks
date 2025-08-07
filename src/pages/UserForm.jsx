import React from "react";
import TextField from "../components/TextFiled";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { UserFormValidation } from "../validation/validationSchema";
import { useDispatch } from "react-redux";
import { setUser} from "../features/recipes/recipeSlice";
export default function Home() {

  const dispatch=useDispatch()


  const { handleChange, handleSubmit, errors, touched, values, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        meal: "",
        diet: "",
        agree: false,
      },
      validationSchema: UserFormValidation,
      onSubmit: (values) => {
         dispatch(setUser(values))
         dispatch(navigate('/recipes'))
}

    });
  const navigate = useNavigate();

  return (
    <div className=" bg-neutral-700 dark:bg-gray-100  flex justify-center items-center min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className=" w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Registration Form
        </h2>

        <TextField
          type="text"
          name="fullName"
          value={values.fullName}
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.fullName}
          touched={touched.fullName}
          label="FullName"
        />

        <TextField
          type="email"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          touched={touched.email}
          name="email"
          label="Email"
        />
        <TextField
          type="select"
          onBlur={handleBlur}
          name="meal"
          value={values.meal}
          onChange={handleChange}
          error={errors.meal}
          touched={touched.meal}
          label="MealTypes"
          options={["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"]}
        />
        <TextField
          label="Diet Preferences"
          onBlur={handleBlur}
          value={values.diet}
          onChange={handleChange}
          error={errors.diet}
          touched={touched.diet}
          name="diet"
          type="select"
          options={["Vegetarian", "Vegan", "Gluten-Free", "Keto", "None"]}
        />

        <input
          checked={values.agree}
          onChange={handleChange}
          name="agree"
          type="checkbox"
        />
        <label htmlFor="agree" className="p-2" >
          I agree the conditions
        </label>
        {errors.agree && touched.agree && (
          <p className="text-red-500 text-sm mt-1">{errors.agree}</p>
        )}
        <div className="flex justify-center items-center mt-2">
          <button
            type="submit"
            className="bg-blue-500 p-2 rounded hover:bg-blue-800 flex "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
