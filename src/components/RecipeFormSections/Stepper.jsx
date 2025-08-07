import React from 'react'
import  {useSelector}  from "react-redux";

 


export default function Stepper() {
 const steps = [
     "1. Recipe Details",
     "2. Ingredients",
     "3. Cooking Steps",
     "4. Image Upload",
   ];
   const currentStep = useSelector((state) => state.recipesForm.currentStep);
  return (
     <div className="flex justify-between mb-10">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;

          return (
            <div
              key={label}
              className="flex flex-col items-center w-1/4 text-center"
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-semibold text-sm transition-all duration-300
                  ${
                    isCompleted
                      ? "bg-green-500 border-green-500 dark:text-black text-white"
                      : isActive
                      ? "bg-blue-500 border-amber-500 dark:text-black text-white"
                      : "bg-gray-400 border-gray-400 dark:text-black text-gray-700"
                  }`}
              >
                {isCompleted ? "✓" : stepNumber}
              </div>
              <span className="text-xs mt-2 dark:text-black text-gray-200">{label}</span>
              {index !== steps.length - 1 && (
                <div className="w-full h-0.5 bg-gray-300 mt-2" />
              )}
            </div>
          );
        })}
      </div>
  )
}
