import { useEffect, useState } from 'react';
import getCostoEnvio from '../services/getCostoEnvio';
import getCostoVenta from '../services/getCostoVenta';
import getImpuestos from '../services/getImpuestos';
import getPorcentajeEnvioSegunReputacion from '../services/getPorcentajeEnvioSegunReputacion';
import getPorcentajeSegunPlanes from '../services/getPorcentajeSegunPlanes';

// Definimos los tipos de datos que devuelven tus servicios
type CostoEnvio = {
  min: number;
  max: number;
  value: number;
};

type CostoVenta = {
  porcentajePorCategoria: number;
  costoPorPrecio: { min: string; max: string; value: number }[];
};

type Impuestos = {
  porcentajeImpuestos: number;
};

type DescuentoPorReputacion = {
  [key: string]: number;
};

type PorcentajeEnvioSegunReputacion = {
  descuentoPorReputacion: DescuentoPorReputacion;
  baseCost: number;
};

type Plan = {
  id: string;
  description: string;
  percent: number;
};

type PorcentajeSegunPlanes = {
  planComun: Plan[];
  planCuotaSimple: Plan[];
};

// Definimos el tipo de datos que devolverá el hook
type UseGSheetData = {
  costosEnvio: CostoEnvio[] | null;
  costosVenta: CostoVenta | null;
  impuestos: Impuestos | null;
  porcentajeEnvioSegunReputacion: PorcentajeEnvioSegunReputacion | null;
  porcentajeSegunPlanes: PorcentajeSegunPlanes | null;
  loading: boolean;
  error: string | null;
};

// Implementación del custom hook
export default function useGSheetData(): UseGSheetData {
  const [costosEnvio, setCostosEnvio] = useState<CostoEnvio[] | null>(null);
  const [costosVenta, setCostosVenta] = useState<CostoVenta | null>(null);
  const [impuestos, setImpuestos] = useState<Impuestos | null>(null);
  const [porcentajeEnvioSegunReputacion, setPorcentajeEnvioSegunReputacion] =
    useState<PorcentajeEnvioSegunReputacion | null>(null);
  const [porcentajeSegunPlanes, setPorcentajeSegunPlanes] =
    useState<PorcentajeSegunPlanes | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Llamamos a todos los servicios en paralelo
        const promises =
          await Promise.all([
            getCostoEnvio(),
            getCostoVenta(),
            getImpuestos(),
            getPorcentajeEnvioSegunReputacion(),
            getPorcentajeSegunPlanes(),
          ]);

          console.log("fetched data", promises)

          const [envio, venta, impuestosData, reputacion, planes] = promises

        setCostosEnvio(envio);
        setCostosVenta(venta);
        setImpuestos(impuestosData);
        setPorcentajeEnvioSegunReputacion(reputacion);
        setPorcentajeSegunPlanes(planes);
      } catch (err) {
        console.log("error", err)
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    costosEnvio,
    costosVenta,
    impuestos,
    porcentajeEnvioSegunReputacion,
    porcentajeSegunPlanes,
    loading,
    error,
  };
}