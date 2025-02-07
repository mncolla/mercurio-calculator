const SEND_COSTS_DISCOUNT = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZ2Nh4bWyF0VpaFZmqfcKFOCjNYrj_GppmOqgp2nDyxjNjxne210BpW4Dy3Hm5UCaDjbfI4iTCZ0Qp/pub?gid=425340304&single=true&output=csv"

export default async function getPorcentajeEnvioSegunReputacion(){
    const response = await fetch(SEND_COSTS_DISCOUNT)
    const data = await response.text()

    const lines = data.split("\n")

    const baseCost = parseFloat(lines[0].split(',')[2])

    const descuentoPorReputacion = lines.slice(2,5).reduce((acc: any, item) => {
        const [,key,value] = item.split(',').map(str => str.trim());
        acc[key] = parseFloat(value);
        return acc;
    }, {});

    return {
        descuentoPorReputacion,
        baseCost
    }
}