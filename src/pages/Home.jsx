import React from "react";
import TextField from "../components/TextFiled";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Registration Form
        </h2>

        <TextField type="text" label="FullName" />
        <TextField type="email" label="Email" />
        <TextField type="text" label="Favourite Cusines" />
        <TextField label="Diet Preferences" />

        
          <input type="checkbox" />
          <label className="p-2  " htmlFor="">I agree the conditions</label>

         <div className="flex justify-center items-center mt-2">
           <button className="bg-blue-500 p-2 rounded hover:bg-blue-800 flex ">Submit</button>
         </div>
      </form>
    </div>
  );
}
