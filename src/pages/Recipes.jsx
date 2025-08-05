import React, { useEffect, useState } from 'react'

export default function Recipes() {
    const [recipe,setRecipe]=useState([])

    useEffect(()=>{
         async function fetchrecipe() {
            const res= await fetch('/data.json')
            const data=await res.json()
            setRecipe(data)
        }
        fetchrecipe()
    },[])
  return (
    <div>
        {
            recipe?.map((rec)=>(
             <li className='flex flex-col space-x-2' key={rec.id}>
               Title:- {rec.title}
               Cusines:-{rec.cuisine}
               Difficulty:-{rec.difficulty}
               Meal Type:-{rec.mealType}
             </li>
            ))
        }
    </div>
  )
}
