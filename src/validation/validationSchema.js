import React from "react";
import * as Yup from "yup";

export const Step1Schema = Yup.object().shape({
  recipes: Yup.string().required("recipeName is required"),
  cusines: Yup.string().required("cusines is required"),
  description: Yup.string().required("description is required"),
});

export const Step2Schema = Yup.object().shape({
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Ingredient name is required"),
        quantity: Yup.string().required("Quantity is required"),
      })
    )
    .min(1, "At least one ingredient is required"),
  agree: Yup.boolean().oneOf([true], "You must accept the terms"),
});

export const Step3Schema = Yup.object().shape({
  cookingstep: Yup.string().required("cookingstep is required"),
});

export const Step4Schema = Yup.object().shape({
  img: Yup.string().required("image is required"),
});

export const UserFormValidation = Yup.object().shape({
  fullName: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  meal: Yup.string().required("Meal is Required"),
  diet: Yup.string().required("Diet is Required"),
  agree: Yup.boolean().oneOf([true], "You must accept the terms"),
});
