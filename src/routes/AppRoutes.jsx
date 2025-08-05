import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import AppLayouts from '../layouts/AppLayouts'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import RecipeForm from '../pages/RecipeForm'

export default function AppRoutes() {
    const router=createBrowserRouter([
       {
        path:'/',
        element:<AppLayouts/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'recipes',
                element:<Recipes/>
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
