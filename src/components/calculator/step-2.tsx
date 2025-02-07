import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BackButton from '../ui/back';
import Button from '../ui/button';
import Steps from '../ui/steps';
import { SellersReputation, SellersReputationLabels, useAppStore } from '../../lib/store';

const schema = Yup.object().shape({
    productWeight: Yup
        .number()
        .typeError('El valor debe ser numérico')
        .required('El valor es obligatorio'),
    reputation: Yup
        .string()
        .required('Debes elegir un nivel de reputación')
        .oneOf(['ml-to', 'yellow', 'orange-red'], 'Invalid category selection')

});

const Step2 = ({ onBack, onNext }: { onBack: () => void, onNext: () => void }) => {

    const setProductWeight = useAppStore(state => state.setProductWeight)
    const setReputation = useAppStore(state => state.setReputation)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const handleSubmitStep = (data: any) => {
        setReputation(data.reputation)
        setProductWeight(data.productWeight)
        onNext()
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitStep)}>
            <BackButton onClick={onBack} className="absolute cursor-pointer z-10" />
            <div className="w-full flex justify-center mb-5"><Steps step={2} /></div>
            <div className="flex flex-col gap-y-1 text-[#003164]">
                <h1 className="text-2xl font-bold">Completa mas datos sobre tu producto</h1>
                <p className="text-sm">Para poder ofrecerte una sugerencia mas acertadas ayudanos con estos datos extras.</p>
            </div>
            <div className="flex flex-col mt-10 gap-y-10 lg:w-1/2">
                <label className="flex flex-col gap-y-2">
                    <span className="font-figtree text-[#003164] font-semibold">Peso del producto</span>
                    <p className="text-xs text-[#7C7C7C]">Ayudanos a calcular el costo de envío</p>
                    <div className="rounded-2xl relative border h-[50px] border-[#003164]">
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[#003164]">Kg</span>
                        <input
                            type="number"
                            step=".01"
                            placeholder="Agrega el peso del producto"
                            className="w-full h-full pl-10 rounded-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            {...register("productWeight")}
                        />
                    </div>
                    {errors.productWeight && <span className="text-sm text-red-600">{errors.productWeight.message}</span>}
                </label>

                <label className="flex flex-col gap-y-2">
                    <span className="font-figtree text-[#003164] font-semibold">Reputación</span>
                    <p className="text-xs text-[#7C7C7C]">Elige la reputación que tienes en tu cuenta</p>
                    <div className="rounded-2xl relative border h-[50px] border-[#003164]">
                        <div className="rounded-2xl relative border h-[50px] border-[#003164]">
                            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[#003164]   ">▼</span>
                            <select className="w-full h-full pl-5 rounded-2xl appearance-none" {...register('reputation')}>
                                {Object.values(SellersReputation).map((key) => (
                                    <option key={key} value={key}>
                                        {SellersReputationLabels[key as SellersReputation]}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {errors.reputation && <span className="text-sm text-red-600">{errors.reputation.message}</span>}
                </label>
                <p className="text-[#003164] text-sm font-figtree mt-6">* Los precios que vamos a sugerir a continuación son estimados en base a los datos proporcionados y pueden sufrir variaciones al momento de publicarlos en MercadoLibre. Te recomendamos utilizarlos como guía y validar los montos una vez publicados, utilizando el simulador de costos oficial de MercadoLibre para obtener una precisión mayor.</p>
                <Button>Continuar</Button>
            </div>
        </form>
    )
}
export default Step2