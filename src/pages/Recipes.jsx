import React, { useEffect, useState } from 'react'
import useFetch from '../lib/usefetch'

export default function Product() {
  const { data: apiData, loading } = useFetch('/data.json')
  const [localData, setLocalData] = useState([])

  useEffect(() => {
    const savedRecipes = localStorage.getItem('finalRecipe')
    if (savedRecipes) {
      setLocalData([JSON.parse(savedRecipes)])
    }
  }, [])

  const combinedData = [...(localData || []), ...(apiData || [])]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 dark:bg-gray-100">
        <p className="text-lg font-semibold text-blue-600">Loading...</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-900 dark:bg-gray-100 max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-white dark:text-black mb-8 text-center">
        Recipe Lists
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
                {item.recipes}
              </h4>
              <div className='flex flex-row gap-2'>
                 <p className="text-white text-sm bg-red-500 w-25 p-1 flex items-center justify-center rounded ">{item.cusines}</p>
              </div>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
