const QUOTA_COSTS = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZ2Nh4bWyF0VpaFZmqfcKFOCjNYrj_GppmOqgp2nDyxjNjxne210BpW4Dy3Hm5UCaDjbfI4iTCZ0Qp/pub?gid=157325150&single=true&output=csv"

export default async function getPorcentajeSegunPlanes(){
    const response = await fetch(QUOTA_COSTS)
    const data = await response.text()

    const lines = data.split("\n").slice()

    const planComun = lines.slice(1,5).map(plan => {
        const parts = plan.split(",")
        return ({
            id: parts[1],
            description: parts[0],
            percent: parseFloat(parts[2]),
        })
    })

    const planCuotaSimple = lines.slice(8,10).map(plan => {
        const parts = plan.split(",")
        return ({
            id: parts[1],
            description: parts[0],
            percent: parseFloat(parts[2]),
        })
    })

    return {
        planComun,
        planCuotaSimple
    }
}