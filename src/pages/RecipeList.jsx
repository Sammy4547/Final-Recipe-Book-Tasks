import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../lib/usefetch";
import useLocalStorage from "../lib/useLoacalStorage";

export default function RecipeList() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: apiData } = useFetch("/data.json");
  const [localData] = useLocalStorage("finalRecipe", []);

  const safeApiData = Array.isArray(apiData) ? apiData : [];
  const safeLocalData = Array.isArray(localData) ? localData : [];

  const combinedData = [...safeApiData, ...safeLocalData];

  const selectedRecipe = combinedData.find(
    (item, index) => String(item.id || index) === id
  );

  if (!selectedRecipe) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-xl text-gray-500">Recipe not found!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <button
        onClick={() => navigate("/recipes")}
        className="mb-6 bg-blue-700 p-2 text-white inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back to Recipes
      </button>

      <div className="flex   ">
        <div>
          <img
            src={selectedRecipe.img || "/images/default.jpg"}
            alt={selectedRecipe.recipes}
            className="w-120 h-72 object-cover rounded"
          />
        </div>

        <div className="flex flex-col mt-10 ">
          <h2 className="dark:text-black text-white font-bold text-2xl ml-8 mb-2">{selectedRecipe.recipes}</h2>
           
          <div className="ml-10">
            <h3 className="dark:text-gray-700 text-white ">{selectedRecipe.description}</h3>
          <p className="text-md text-blue-600">{selectedRecipe.user?.diet||selectedRecipe.diet}</p>
          <p className="dark:text-gray-700 text-white mt-4">Steps:-{selectedRecipe.cookingstep||selectedRecipe.steps}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
