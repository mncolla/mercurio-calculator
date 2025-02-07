import { useState } from "react"
import Step1 from "./step-1"
import Step2 from "./step-2"
import ResultsStep from "./results"

const Form = () => {

    const [step, setStep] = useState(0)

    return (
        <>
            {step === 0 && <Step1 setStep={setStep}/>}
            {step === 1 && <Step2 onBack={() => setStep(0)} onNext={() => setStep(2)}/>}
            {step === 2 && <ResultsStep />}
        </>
    )
}

export default Form