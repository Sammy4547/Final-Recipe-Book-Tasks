import React from 'react'
import * as Yup from 'yup'

export const Step1Schema=Yup.object().shape({
    recipes:Yup.string().required("recipeName is required"),
    cusines:Yup.string().required("cusines is required"),
    description:Yup.string().required("description is required")
})

export const Step2Schema=Yup.object().shape({
    indegridentName:Yup.string().required("RecipeName is required"),
    quantity:Yup.string().required("quantity is required")
   
})

export const Step3Schema=Yup.object().shape({
    cookingStep:Yup.string().required("cookingstep is required"),
  
})

export const Step4Schema=Yup.object().shape({
    img:Yup.string().required("image is required"),
  
})



