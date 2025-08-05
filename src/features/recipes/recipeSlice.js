import { createSlice } from "@reduxjs/toolkit";

const initialState={
  step1:{
    recipes:'',
    cusines:'',
    description:'',
  },
  step2:{
  indgridents:[]
  },
  step3:{
    cookingstep:null
  },
  step4:{
    img:''

  },
  currentStep:1

}

export const recipeSlice=createSlice({
    name:'recipesForm',
    initialState,
    reducers:{
    updateStep1:(state,action)=>{
        state.step1={...state.step1,...action.payload}
    },
     updateStep2:(state,action)=>{
        state.step2 = action.payload

    },
     updateStep3:(state,action)=>{
        state.step3={...state.step3,...action.payload}
    },
     updateStep4:(state,action)=>{
        state.step4={...state.step4,...action.payload}
    },
    goToNextStep:(state)=>{
     if (state.currentStep < 4) state.currentStep += 1;

    },
       goToPrevStep:(state)=>{
        if (state.currentStep > 1) state.currentStep -= 1;

    },
}   
})

export const {updateStep1,updateStep2,updateStep3,updateStep4,goToNextStep,goToPrevStep}=recipeSlice.actions
export default recipeSlice.reducer