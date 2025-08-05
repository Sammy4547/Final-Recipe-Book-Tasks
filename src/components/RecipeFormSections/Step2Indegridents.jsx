import React, { useState } from "react";
import { useFormik } from "formik";
import TextField from "../TextFiled";
import { Step2Schema } from "../../validation/validationSchema";

export default function Step2Ingredients({ onPrev, onNext }) {
  const [ingredients, setIngredients] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const formik = useFormik({
    initialValues: {
      ingredientName: "",
      quantity: "",
    },
    validationSchema: Step2Schema,
    onSubmit: (values) => {
      const newIngredient = {
        id: Date.now(),
        ingredientName: values.ingredientName,
        quantity: values.quantity,
      };

      if (editIndex !== null) {
        const updated = [...ingredients];
        updated[editIndex] = { ...newIngredient, id: ingredients[editIndex].id };
        setIngredients(updated);
        setEditIndex(null);
      } else {
        setIngredients([...ingredients, newIngredient]);
      }

      formik.resetForm();
    },
  });

  const handleEdit = (index) => {
    const ingredient = ingredients[index];
    formik.setValues({
      ingredientName: ingredient.ingredientName,
      quantity: ingredient.quantity,
    });
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = ingredients.filter((_, i) => i !== index);
    setIngredients(updated);
    if (editIndex === index) {
      formik.resetForm();
      setEditIndex(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Add Ingredients
        </h2>

        {/* Ingredient Name */}
        <TextField
          label="Ingredient Name"
          name="ingredientName"
          value={formik.values.ingredientName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.ingredientName && formik.errors.ingredientName}
        />

        {/* Quantity */}
        <TextField
          label="Quantity"
          name="quantity"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.quantity && formik.errors.quantity}
        />

        {/* Add / Update Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editIndex !== null ? "Update Ingredient" : "Add Ingredient"}
        </button>

        {/* Display Ingredient List */}
        {ingredients.length > 0 && (
          <ul className="mt-6 divide-y divide-gray-200">
            {ingredients.map((indg, index) => (
              <li key={indg.id} className="py-2 flex justify-between items-center">
                <div>
                  <strong>{indg.ingredientName}</strong>: {indg.quantity}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="text-blue-500 hover:underline"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="text-red-500 hover:underline"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={onPrev}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => onNext(ingredients)}
            className="bg-green-500 text-white px-4 py-2 rounded"
            disabled={ingredients.length === 0}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
