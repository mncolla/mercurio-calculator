const SALES_COSTS = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZ2Nh4bWyF0VpaFZmqfcKFOCjNYrj_GppmOqgp2nDyxjNjxne210BpW4Dy3Hm5UCaDjbfI4iTCZ0Qp/pub?gid=1095830088&single=true&output=csv"

export default async function getCostoVenta(){
    const response = await fetch(SALES_COSTS)
    const data = await response.text()

    const lines = data.split("\n")
    const porcentajePorCategoria = parseFloat(lines[0].split(",")[2])
    
    const costoPorPrecio = [{
        min: lines[2].split(",")[0],
        max: lines[2].split(",")[1],
        value: parseFloat(lines[2].split(",")[2]),
    },{
        min: lines[3].split(",")[0],
        max: lines[3].split(",")[1],
        value: parseFloat(lines[3].split(",")[2]),
    }]

    return {
        porcentajePorCategoria,
        costoPorPrecio,
    }
}