import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  step1: {
    recipes: "",
    cusines: "",
    description: "",
  },
  step2: {
    indgridents: [],
  },
  step3: {
    cookingstep:null,
  },
  step4: {
    img: "",
  },
  currentStep: 1,
  finalRecipe: null,
  allrecipesStored:[]
};

export const recipeSlice = createSlice({
  name: "recipesForm",
  initialState,
  reducers: {
    updateStep1: (state, action) => {
      state.step1 = { ...state.step1, ...action.payload };
    },
    updateStep2: (state, action) => {
      state.step2 = action.payload;
    },
    updateStep3: (state, action) => {
      state.step3 = { ...state.step3, ...action.payload };
    },
    updateStep4: (state, action) => {
      state.step4 = { ...state.step4, ...action.payload };
    },
    goToNextStep: (state) => {
      if (state.currentStep < 4) state.currentStep += 1;
    },
    goToPrevStep: (state) => {
      if (state.currentStep > 1) state.currentStep -= 1;
    },
    savedRecipe: (state) => {
      state.finalRecipe = {
        ...state.step1,
        ...state.step2,
        ...state.step3,
        ...state.step4,
        id:nanoid()
      };
    },
    resetRecipe: (state) => {
      state.step1 = { recipes: "", cusines: "", description: "" };
      state.step2 = { indgridents: [] };
      state.step3 = { cookingstep: null };
      state.step4 = { img: "" };
      state.currentStep = 1;
    },
  },
});

export const {
  updateStep1,
  updateStep2,
  updateStep3,
  updateStep4,
  goToNextStep,
  goToPrevStep,
  savedRecipe,
  resetRecipe,
  allrecipesStored
} = recipeSlice.actions;
export default recipeSlice.reducer;
