const SEND_COSTS = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZ2Nh4bWyF0VpaFZmqfcKFOCjNYrj_GppmOqgp2nDyxjNjxne210BpW4Dy3Hm5UCaDjbfI4iTCZ0Qp/pub?gid=1219251843&single=true&output=csv"

export default async function getCostoEnvio(){
    const response = await fetch(SEND_COSTS)
    const data = await response.text()

    const lines = data.split("\n").slice(2,15)

    const costosDeEnvioPorPeso = lines.map(line => {
        const parts = line.split(",");
        return {
            min: parseFloat(parts[0]),
            max: parseFloat(parts[1]),
            value: parseFloat(parts[2]),
        }
    })

    return costosDeEnvioPorPeso
}