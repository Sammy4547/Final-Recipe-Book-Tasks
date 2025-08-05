import useFetch from '../lib/usefetch';
export default function Recipes() {
    const { data, loading } = useFetch("../../public/data.json");

  return loading ? (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <p className="text-lg text-gray-600 animate-pulse">Loading recipes...</p>
    </div>
  ) : (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        🍽️ Popular Recipes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h4 className="text-xl font-semibold text-gray-800 mb-1">
                {post.title}
              </h4>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-2 text-sm mt-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                  Cuisine: {post.cuisine}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">
                  {post.mealType}
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                  {post.difficulty}
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded">
                  {post.dietaryPreference}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
