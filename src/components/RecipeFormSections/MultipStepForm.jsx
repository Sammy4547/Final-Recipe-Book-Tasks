import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  goToNextStep,
  goToPrevStep,
  updateStep1,
  updateStep2,
  updateStep3,
  updateStep4,
  savedRecipe,
} from "../../features/recipes/recipeSlice";
import Step1RecipeDetails from "./Step1RecipeDetails";
import Step2Ingredients from "./Step2Indegridents";
import Step3Instructions from "./Step3CookingStep";
import Step4ImageUpload from "./Step4ImageUpload";
import useLocalStorage from "../../lib/useLoacalStorage";
export default function MultiStepForm() {
  const dispatch = useDispatch();

  const currentStep = useSelector((state) => state.recipesForm.currentStep);
  const step1Data = useSelector((state) => state.recipesForm.step1);
  const step2Data = useSelector((state) => state.recipesForm.step2);
  const step3Data = useSelector((state) => state.recipesForm.step3);
  const step4Data = useSelector((state) => state.recipesForm.step4);

  const [finalRecipe, setFinalRecipe] = useLocalStorage("finalRecipe", {});
const recipeComplete = useSelector((state) => state.recipesForm.finalRecipe);

useEffect(() => {
  if (recipeComplete&& Object.keys(recipeComplete).length > 0) {
    setFinalRecipe(recipeComplete);
  }
}, [recipeComplete]);

  const steps = [
    "1. Recipe Details",
    "2. Ingredients",
    "3. Cooking Steps",
    "4. Image Upload",
  ];

  const handlePrev = () => {
    dispatch(goToPrevStep());
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1RecipeDetails
            initialValues={step1Data}
            onNext={(data) => {
              dispatch(updateStep1(data));
              dispatch(goToNextStep());
            }}
          />
        );
      case 2:
        return (
          <Step2Ingredients
            initialValues={step2Data}
            onPrev={handlePrev}
            onNext={(data) => {
              dispatch(updateStep2(data));
              dispatch(goToNextStep());
            }}
          />
        );
      case 3:
        return (
          <Step3Instructions
            initialValues={step3Data}
            onPrev={handlePrev}
            onNext={(data) => {
              dispatch(updateStep3(data));
              dispatch(goToNextStep());
            }}
          />
        );
      case 4:
        return (
          <Step4ImageUpload
            initialValues={step4Data}
            onPrev={handlePrev}
            onNext={(data) => {
              dispatch(updateStep4(data));
              dispatch(savedRecipe());
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Stepper */}
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
                      ? "bg-green-500 border-green-500 text-white"
                      : isActive
                      ? "bg-blue-500 border-amber-500 text-white"
                      : "bg-gray-400 border-gray-400 text-gray-600"
                  }`}
              >
                {isCompleted ? "✓" : stepNumber}
              </div>
              <span className="text-xs mt-2 text-gray-700">{label}</span>
              {index !== steps.length - 1 && (
                <div className="w-full h-0.5 bg-gray-300 mt-2" />
              )}
            </div>
          );
        })}
      </div>

      {/* Step Container */}
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 transition-all">
        {renderStep()}
      </div>
    </div>
  );
}
