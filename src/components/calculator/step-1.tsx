import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import CurrencyInput from "react-currency-input-field";
import Steps from "../ui/steps";
import Button from "../ui/button";
import { useState } from "react";
import { useAppStore } from "../../lib/store";

const schema = Yup.object().shape({
    productCost: Yup
        .number()
        .typeError('El valor debe ser numérico')
        .required('El valor es obligatorio'),
    revenuePercent: Yup
        .number()
        .typeError('El valor debe ser numérico')
        .required('El valor es obligatorio'),
});


const Step1 = ({ setStep }: { setStep: (id: number) => void }) => {

    const setCostoProductoBase = useAppStore(state => state.setCostoProductoBase)
    const setCostoTransitorio = useAppStore(state => state.setCostoTransitorio)
    const setGananciaEstimada = useAppStore(state => state.setGananciaEstimada)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [productCost, setProductCost] = useState(0)

    const handleSubmitStep = (data: any) => {
        const costoTransitorio = productCost + (productCost * (data.revenuePercent / 100));
        setCostoTransitorio(costoTransitorio)

        console.log("product cost", productCost)
        setCostoProductoBase(productCost)
        setGananciaEstimada(data.revenuePercent)
        setStep(2)
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitStep)}>
            <div className="w-full flex justify-center mb-5"><Steps step={1} /></div>

            <div className="flex flex-col gap-y-1">
                <h1 className="text-2xl  text-[#003164] font-bold">Calculadora de precio de venta</h1>
                <p className="text-sm  text-[#003164] ">Completa los datos del formulario para que podamos sugerirte el precio ideal para cada tipo de publicación.</p>
            </div>
            <div className="flex flex-col mt-10 gap-y-10 lg:w-1/2">
                <label className="flex flex-col gap-y-2">
                    <span className=" text-[#003164] font-semibold">Costo del producto</span>
                    <p className="text-xs text-[#7C7C7C]">Cuanto te sale fabricarlo o comprarlo</p>
                    {/* <Input prefix="$"  /> */}
                    <div className="rounded-2xl relative border h-[50px] border-[#003164]">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#003164]">$</span>
                        <input type="hidden" defaultValue={productCost.toString()} {...register("productCost")} />
                        <CurrencyInput
                            groupSeparator='.'
                            decimalSeparator=','
                            onValueChange={(e) => e && setProductCost(parseInt(e))}
                            className="w-full h-full pl-10 rounded-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            decimalsLimit={2}
                            placeholder="Agrega el costo del producto"
                        />
                    </div>
                    {errors.productCost && <span className="text-sm text-red-600">{errors.productCost.message}</span>}
                </label>

                <label className="flex flex-col gap-y-2">
                    <span className=" text-[#003164] font-semibold">Porcentaje de ganancia estimada</span>
                    <p className="text-xs text-[#7C7C7C]">Cuanto te gustaria ganar por cada venta</p>
                    <div className="rounded-2xl relative border h-[50px] border-[#003164]">
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[#003164]">%</span>
                        <input
                            type="number"
                            min={1}
                            max={999}
                            placeholder="% de ganancia estimado"
                            className="w-full h-full pl-10 rounded-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            {...register("revenuePercent")}
                        />
                    </div>
                    {errors.revenuePercent && <span className="text-sm text-red-600">{errors.revenuePercent.message}</span>}
                </label>

                <Button className="w-1/2 mt-8">Continuar</Button>
            </div>
        </form>
    )
}

export default Step1