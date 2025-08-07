import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../lib/usefetch'
import useLocalStorage from '../lib/useLoacalStorage'

export default function RecipeList() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: apiData } = useFetch('/data.json')
  const [localData] = useLocalStorage('finalRecipe', [])

  const safeApiData = Array.isArray(apiData) ? apiData : []
  const safeLocalData = Array.isArray(localData) ? localData : []

  const combinedData = [...safeApiData, ...safeLocalData]

  const selectedRecipe = combinedData.find(
    (item, index) => String(item.id || index) === id
  )

  if (!selectedRecipe) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-xl text-gray-500">Recipe not found!</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <button
        onClick={() => navigate('/recipes')}
        className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back to Recipes
      </button>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <img
          src={selectedRecipe.img || '/images/default.jpg'}
          alt={selectedRecipe.recipes}
          className="w-full h-72 object-cover"
        />

        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {selectedRecipe.recipes}
          </h2>

          <div className="mb-4">
            <span className="inline-block bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
              {selectedRecipe.cusines}
            </span>
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            {selectedRecipe.meal}
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            {selectedRecipe.description}
          </p>
           <p className="text-gray-900 text-base leading-relaxed">
            {selectedRecipe.steps}
          </p>
        </div>
      </div>
    </div>
  )
}
