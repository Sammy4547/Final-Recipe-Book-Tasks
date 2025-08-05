import { configureStore } from '@reduxjs/toolkit'
import recipesFormReducer  from '../features/recipes/recipeSlice'

export const store=configureStore({
    reducer:{
        recipesForm:recipesFormReducer
    }
})
