import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  goToNextStep,
  goToPrevStep,
  updateStep1,
  updateStep2,
  updateStep3,
  updateStep4,
  saveFinalRecipeWithUser,
} from "../../features/recipes/recipeSlice";
import Step1RecipeDetails from "./Step1RecipeDetails";
import Step2Ingredients from "./Step2Indegridents";
import Step3Instructions from "./Step3CookingStep";
import Step4ImageUpload from "./Step4ImageUpload";
import useLocalStorage from "../../lib/useLoacalStorage";
import Stepper from "./Stepper";
import { nanoid } from "nanoid";

export default function MultiStepForm() {
  const dispatch = useDispatch();

  const currentStep = useSelector((state) => state.recipesForm.currentStep);
  const step1Data = useSelector((state) => state.recipesForm.step1);
  const step2Data = useSelector((state) => state.recipesForm.step2);
  const step3Data = useSelector((state) => state.recipesForm.step3);
  const step4Data = useSelector((state) => state.recipesForm.step4);
  const recipeComplete = useSelector((state) => state.recipesForm.finalRecipe);

  const [finalRecipe, setFinalRecipes] = useLocalStorage("finalRecipe", []);

  useEffect(() => {
    if (recipeComplete && Object.keys(recipeComplete).length > 0) {
      const exists = finalRecipe.some(
        (r) => r.recipes === recipeComplete.recipes
      );

      if (!exists) {
        setFinalRecipes([...finalRecipe, { ...recipeComplete, id: nanoid() }]);
      }
    }
  }, [recipeComplete]);

  const handlePrev = () => dispatch(goToPrevStep());

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
              dispatch(saveFinalRecipeWithUser());
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
   <div className="max-w-3xl mx-auto p-6 h-auto bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-neutral-700 relative z-50">
  <Stepper />
  <div className="bg-gray-100 dark:bg-neutral-700 rounded-xl p-4 transition-all">
    {renderStep()}
  </div>
</div>

  );
}
