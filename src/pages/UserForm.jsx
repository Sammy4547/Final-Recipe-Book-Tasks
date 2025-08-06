import React, { useEffect, useState } from 'react'
import useFetch from '../lib/usefetch'

export default function Product() {
  const { data: apiData, loading } = useFetch('/data.json')
  const [localData, setLocalData] = useState([])

  useEffect(() => {
    const savedRecipes = localStorage.getItem('recipes')
    if (savedRecipes) {
      setLocalData(JSON.parse(savedRecipes))
    }
  }, [])

  const combinedData = [...(localData || []), ...(apiData || [])]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-blue-600">Loading...</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">
        Recipe Posts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {combinedData?.map((item, index) => (
          <div
            key={item.id || index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden border border-gray-200"
          >
            <img
              src={item.img || '/images/default.jpg'}
              alt={item.recipes}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
