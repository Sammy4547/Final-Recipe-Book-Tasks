import { useSelector, useDispatch } from "react-redux";
import {
  goToNextStep,
  goToPrevStep,
  updateStep1,
  updateStep2,
} from "../../features/recipes/recipeSlice";
import Step1RecipeDetails from "./Step1RecipeDetails";
import Step2Ingredients from "./Step2Indegridents";
import Step3Instructions from "./Step3CookingStep";
import Step4Image from "./Step4ImageUpload";

export default function MultiStepForm() {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.recipesForm.currentStep);
  const step1Data = useSelector((state) => state.recipesForm.step1);

  const handleNext = (data) => {
    if (currentStep === 2) {
      dispatch(updateStep2({ ingredients: data }));
    }
    dispatch(goToNextStep());
  };

  const handlePrev = () => {
    dispatch(goToPrevStep());
  };

  return (
    <div>
      {currentStep === 1 && (
        <Step1RecipeDetails
          initialValues={step1Data}
          onNext={(data) => {
            dispatch(updateStep1(data));
            dispatch(goToNextStep());
          }}
        />
      )}
      {currentStep === 2 && <Step2Ingredients onPrev={handlePrev} onNext={handleNext} />}
      {currentStep === 3 && <Step3Instructions onPrev={handlePrev} onNext={handleNext} />}
      {currentStep === 4 && <Step4Image onPrev={handlePrev} />}
    </div>
  );
}
