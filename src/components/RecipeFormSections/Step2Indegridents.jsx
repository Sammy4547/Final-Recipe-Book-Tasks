import React from "react";
import { useFormik } from "formik";
import { Step2Schema } from "../../validation/validationSchema";
import TextField from "../Reusable/TextFiled";
import Button from "../Reusable/Button";

export default function IngredientForm({ onNext, onPrev, initialValues }) {
  const formik = useFormik({
    initialValues:
      initialValues && initialValues.ingredients
        ? initialValues
        : { ingredients: [{ name: "", quantity: "" }] },
    enableReinitialize: true,
    validationSchema: Step2Schema,
    onSubmit: (values) => {
      onNext(values);
    },
  });

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...formik.values.ingredients];
    updated[index][name] = value;
    formik.setFieldValue("ingredients", updated);
  };

  const handleAdd = () => {
    const updated = [...formik.values.ingredients, { name: "", quantity: "" }];
    formik.setFieldValue("ingredients", updated);
  };

  const handleRemove = (index) => {
    const updated = [...formik.values.ingredients];
    updated.splice(index, 1);
    formik.setFieldValue("ingredients", updated);
  };

  return (
    <div className="h-screen dark:bg-neutral-700">
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md dark:bg-neutral-800  h-auto mt-30"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center dark:text-white">
          Step 2: Ingredients
        </h2>

        {formik.values.ingredients.map((ing, index) => (
          <div
            key={index}
            className="flex gap-2 mb-4 dark:text-white text-black"
          >
            <TextField
              label="Ingredient"
              name="name"
              value={ing.name}
              onChange={(e) => handleChange(index, e)}
              touched={formik.touched.ingredients?.[index]?.name}
              error={formik.errors.ingredients?.[index]?.name}
              placeholder="e.g., Banana"
            />

            <TextField
              label="Quantity"
              name="quantity"
              value={ing.quantity}
              onChange={(e) => handleChange(index, e)}
              touched={formik.touched.ingredients?.[index]?.quantity}
              error={formik.errors.ingredients?.[index]?.quantity}
              placeholder="e.g., 1 cup"
            />

            {formik.values.ingredients.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="text-red-500"
              >
                ✖
              </button>
            )}
          </div>
        ))}

        {typeof formik.errors.ingredients === "string" && (
          <p className="text-red-500">{formik.errors.ingredients}</p>
        )}

        <div className="flex justify-between mt-6">
          <Button type="button" onClick={onPrev} variant="secondary">
            Back
          </Button>

          <Button type="button" onClick={handleAdd} variant="safer">
            +Add
          </Button>

          <Button type="submit" variant="primary">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
