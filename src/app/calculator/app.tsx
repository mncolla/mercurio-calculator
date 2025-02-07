import { useEffect } from "react"
import Navbar from "../../components/ui/navbar"
import Form from "../../components/calculator/form"

const CalculatorPage = () => {

    useEffect(()=>{
        document.body.style.backgroundColor = "#FFF059"

        return () => {
            document.body.style.backgroundColor = "white"
        }
    },[])

    return (
        <div className="h-full w-full bg-[#FFF059]">
            <Navbar />
            <div className="w-full h-full pb-14 px-3 sm:px-6 md:px-14 pt-20 container mx-auto">
                <div className="flex flex-col bg-white rounded-2xl p-8 sm:p-12 md:p-16 lg:p-24 shadow-2xl font-figtree">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default CalculatorPage