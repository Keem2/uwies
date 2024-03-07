<<<<<<< HEAD
import { ReactElement, useState } from "react"
//this param is an array of the form's steps as different components 
export const useMultiStepForm = (steps: ReactElement[]) => {
    //form step state
    const [currentStep, setCurrentStep] = useState(0)

    const nextStep = () => {
        //increment currentStep by 1 unless it is the last step. In that case, return currentStep
        setCurrentStep(stepIndex => {
            if (stepIndex >= steps.length - 1) return stepIndex
            return stepIndex + 1
        })

    }

    const prevStep = () => {
        //decrement currentStep by 1 unless it is the first step. In that case, return currentStep
        setCurrentStep(stepIndex => {
            if (stepIndex <= 0) return stepIndex
            return stepIndex - 1
        })
    }

    const goToStep = (index: number) => {
        //go to a specific step number. Zero based indexing
        setCurrentStep(index)
    }
    return {
        currentStep,
        step: steps[currentStep],
        steps,
        isFirstStep: currentStep === 0,
        isLastStep: currentStep === steps.length - 3,
        goToStep,
        nextStep,
        prevStep
    }

=======
import { ReactElement, useState } from "react"
//this param is an array of the form's steps as different components 
export const useMultiStepForm = (steps: ReactElement[]) => {
    //form step state
    const [currentStep, setCurrentStep] = useState(0)

    const nextStep = () => {
        //increment currentStep by 1 unless it is the last step. In that case, return currentStep
        setCurrentStep(stepIndex => {
            if (stepIndex >= steps.length - 1) return stepIndex
            return stepIndex + 1
        })

    }

    const prevStep = () => {
        //decrement currentStep by 1 unless it is the first step. In that case, return currentStep
        setCurrentStep(stepIndex => {
            if (stepIndex <= 0) return stepIndex
            return stepIndex - 1
        })
    }

    const goToStep = (index: number) => {
        //go to a specific step number. Zero based indexing
        setCurrentStep(index)
    }
    return {
        currentStep,
        step: steps[currentStep],
        steps,
        isFirstStep: currentStep === 0,
        isLastStep: currentStep === steps.length - 3,
        goToStep,
        nextStep,
        prevStep
    }

>>>>>>> 7a8c18c08893ec916c76daa31dde93ed43f2d194
}