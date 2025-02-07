import { useMemo } from "react"
import useGSheetData from "../../hooks/useGSheetData"
import { useAppStore } from "../../lib/store"
import Steps from "../ui/steps"
import ResultTabItem from "../ui/result-item"

const ResultsStep = () => {

    const { costoTransitorio, productWeight, gananciaEstimada, costoProductoBase } = useAppStore()
    const gSheetData = useGSheetData()

    console.log({gSheetData})
    
    const { loading } = gSheetData

    const costoSegunCategoria = useMemo(()=>{
        if (!gSheetData.costosVenta) return 0
        const value = (gSheetData.costosVenta?.porcentajePorCategoria  / 100 ) * costoTransitorio 
        return value
    },[gSheetData.costosVenta])


    const costoEnvioSegunPeso = useMemo(()=>{
        if (!gSheetData.porcentajeEnvioSegunReputacion?.baseCost || !gSheetData.costosEnvio) return 0

        if (!gSheetData.porcentajeEnvioSegunReputacion.descuentoPorReputacion) return 0

        const aplicaDescuentoPorCategoria = costoTransitorio > gSheetData.porcentajeEnvioSegunReputacion?.baseCost

        console.log("aplica descuento? ", aplicaDescuentoPorCategoria)
        const resultado = gSheetData.costosEnvio.find((item) => productWeight >= item.min && productWeight <= item.max);

        return resultado ? resultado.value : 0
    },[gSheetData.porcentajeEnvioSegunReputacion?.baseCost, gSheetData.porcentajeEnvioSegunReputacion])


    const preciosSugeridosSegunPlan = useMemo(()=>{
        const impuestosPercent = gSheetData.impuestos?.porcentajeImpuestos
        const planComun = gSheetData.porcentajeSegunPlanes?.planComun

        if (!impuestosPercent || !planComun) return []


        const resultado = planComun.map(item => {
            const costoSegunCuota = (item.percent / 100) * costoTransitorio;
            const costosPorVender = costoSegunCategoria + costoEnvioSegunPeso + costoSegunCuota;

            console.log("costos por vender", costosPorVender)

            const impuestosPrecalculo = (costoProductoBase + costosPorVender) + ((costoProductoBase + costosPorVender) * (gananciaEstimada / 100));
            const impuestos = impuestosPrecalculo * (impuestosPercent / 100);

            const preFinal = costoProductoBase + costosPorVender

            const finalValue = (preFinal + (preFinal * (gananciaEstimada / 100))) + impuestos

            console.log("impuestos", impuestos)

            console.log("final value", finalValue)

            return {
                ...item,
                finalValue
            }
        })
        return resultado
    },[gSheetData.impuestos?.porcentajeImpuestos])

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-center mb-5"><Steps step={3} /></div>
            <div className="flex flex-col gap-y-1 mb-6">
                <h1 className="text-2xl  text-[#003164] font-bold">Sugerencia de precios por tipo de publicación</h1>
                <p className="text-sm  text-[#003164] ">Recuerda que las comisiones pueden variar según el tipo de publicación en MercadoLibre. Te mostraremos varias opciones de precios sugeridos, y puedes elegir publicar con una o más de ellas.</p>
            </div>
            {!loading && <>
                {preciosSugeridosSegunPlan.map((item:any) => <ResultTabItem key={item.id} title={item.description} price={item.finalValue} description="" />)}
            </>}

            <p className="text-[#003164] text-sm font-figtree mt-6">* Los precios que vamos a sugerir a continuación son estimados en base a los datos proporcionados y pueden sufrir variaciones al momento de publicarlos en MercadoLibre. Te recomendamos utilizarlos como guía y validar los montos una vez publicados, utilizando el simulador de costos oficial de MercadoLibre para obtener una precisión mayor.</p>
        </div>
    )
}

export default ResultsStep