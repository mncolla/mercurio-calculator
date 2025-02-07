import { create } from 'zustand'

export enum SellersReputation {
    ML_TO = "ml-to",
    YELLOW = "yellow",
    ORANGE_RED = "orange-red"
}

export const SellersReputationLabels: Record<SellersReputation, string> = {
    [SellersReputation.ML_TO]: "Mercado Lider / Tienda oficial",
    [SellersReputation.YELLOW]: "Reputación amarilla / vendedor sin reputación",
    [SellersReputation.ORANGE_RED]: "Reputación naranja o roja"
};

interface AppState {
    costoProductoBase: number;
    setCostoProductoBase: (costoProductoBase: number) => void,
    gananciaEstimada: number;
    setGananciaEstimada: (gananciaEstimada: number) => void,
    costoTransitorio: number;
    setCostoTransitorio: (costoTransitorio: number) => void,
    productWeight: number;
    setProductWeight: (productWeight: number) => void,
    reputation: SellersReputation,
    setReputation: (reputation: SellersReputation) => void
}

export const useAppStore = create<AppState>()(
    (set) => ({
        costoProductoBase: 0,
        setCostoProductoBase: (costoProductoBase) => set(() => ({ costoProductoBase })),
        gananciaEstimada: 0,
        setGananciaEstimada: (gananciaEstimada) => set(() => ({ gananciaEstimada })),
        costoTransitorio: 0,
        setCostoTransitorio: (costoTransitorio) => set(() => ({ costoTransitorio })),
        productWeight: 0,
        setProductWeight: (productWeight) => set(() => ({ productWeight })),
        reputation: SellersReputation.ML_TO,
        setReputation: (reputation) => set(() => ({ reputation })),
    }),
)