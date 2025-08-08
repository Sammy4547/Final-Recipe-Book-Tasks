import React from "react";
import { useSelector } from "react-redux";

export default function Stepper() {
  const steps = [
    "1. Recipe Details",
    "2. Ingredients",
    "3. Cooking Steps",
    "4. Image Upload",
  ];

  const currentStep = useSelector((state) => state.recipesForm.currentStep);

  return (
    <div className="flex items-center justify-between mb-10 relative">
      <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-300 z-0" />

      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;

        return (
          <div
            key={label}
            className="relative z-10 flex flex-col items-center w-1/4"
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-semibold text-sm transition-all duration-300
                ${
                  isCompleted
                    ? "bg-green-500 border-green-500 text-white"
                    : isActive
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "bg-gray-400 border-gray-400 text-white"
                }`}
            >
              {isCompleted ? "✓" : stepNumber}
            </div>

            <span className="text-xs mt-2 text-center text-gray-800 dark:text-gray-200">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
