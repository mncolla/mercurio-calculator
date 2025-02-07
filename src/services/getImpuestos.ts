const TAXES_PERCENT = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZ2Nh4bWyF0VpaFZmqfcKFOCjNYrj_GppmOqgp2nDyxjNjxne210BpW4Dy3Hm5UCaDjbfI4iTCZ0Qp/pub?gid=1664031832&single=true&output=csv"

export default async function getImpuestos(){
    const response = await fetch(TAXES_PERCENT)
    const data = await response.text()

    const lines = data.split("\n")
    const porcentajeImpuestos = parseFloat(lines[1].split(",")[1])

    return {
        porcentajeImpuestos,
    }
}