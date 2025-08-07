import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import AppLayouts from '../layouts/AppLayouts'
import UserForm from '../pages/UserForm'
import Recipes from '../pages/Recipes'
import RecipeForm from '../pages/RecipeForm'
import RecipeList from '../pages/RecipeList'

export default function AppRoutes() {
    const router=createBrowserRouter([
       {
        path:'/',
        element:<AppLayouts/>,
        children:[
            {
                index:true,
                element:<UserForm/>
            },
            {
                path:'recipes',
                element:<Recipes/>,
              
            },
            {
                path:'recipes/:id',
                element:<RecipeList/>
            },
            {
                path:'addrecipes',
                element:<RecipeForm/>
            }
        ]
       }
    ])
  return (
    <div>

<RouterProvider router={router}/>

    </div>
  )
}
