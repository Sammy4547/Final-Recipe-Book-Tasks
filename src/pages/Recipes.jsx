import React from "react";
import useFetch from "../lib/usefetch";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../lib/useLoacalStorage";
import { motion } from "motion/react";
export default function Recipes() {
  const navigate = useNavigate();
  const { data: apiData, loading } = useFetch("/data.json");
  const [localData] = useLocalStorage("finalRecipe", []);

  const safeLocalData = Array.isArray(localData) ? localData : [];
  const safeApiData = Array.isArray(apiData) ? apiData : [];
  const combinedData = [...safeApiData, ...safeLocalData];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen dark:bg-neutral-700 bg-gray-100">
        <p className="text-lg font-semibold text-blue-600">Loading...</p>
      </div>
    );
  }

  return (
    <div
      
      className="dark:bg-neutral-700 bg-gray-100 max-w-7xl mx-auto px-4 py-10"
    >
      <h2 className="text-3xl font-bold dark:text-white text-black mb-8 text-center">
        Recipe Lists
      </h2>

      <span className="flex flex-col justify-end items-end mb-2">
        <button
          onClick={() => navigate("/addrecipes")}
          className="px-2 py-1 bg-red-500 rounded text-white"
        >
          + Add Recipes
        </button>
      </span>

      <div className="flex flex-row flex-wrap gap-4">
        {combinedData.map((item, index) => (
          <Link className="hover:bg-amber-50" to={`/recipes/${item.id || index}`} key={item.id || index}>
            <div className="bg-white  transition-colors duration-300 ease-in-out flex flex-col rounded-xl shadow-md hover:shadow-lg  overflow-hidden border border-gray-200 w-70">
              <img
                src={item.img || "/images/default.jpg"}
                alt={item.recipes}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.recipes}
                </h4>
                <div className="flex flex-row gap-2">
                  <p className="text-white text-sm bg-red-500 w-25 p-1 flex items-center justify-center rounded">
                    {item.cusines}
                  </p>
                  <p className="text-white text-sm bg-yellow-500 w-25 p-1 flex items-center justify-center rounded">
                    {item.user?.meal || item.meal}
                  </p>
                  <p className="text-white text-sm bg-green-500 w-25 p-1 flex items-center justify-center rounded">
                    {item.user?.diet || item.diet}
                  </p>
                </div>
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
