import { useNavigate } from "react-router"
import Navbar from "../../components/ui/navbar"
import { Button } from "@headlessui/react"
import Accordion from "../../components/ui/accordion"

const ITEMS_HOW_TO_USE = [
  {
    id: 1,
    title: "Costo del producto",
    description: "Ingresa el costo del producto, incluyendo el precio al que lo compraste o fabricaste. Ten en cuenta cualquier costo adicional, como envoltorios, bolsas para la entrega o cualquier otro gasto extra que impacte en el precio final del producto."
  },
  {
    id: 2,
    title: "Porcentaje de ganancia estimada",
    description: "Elige el porcentaje de ganancia que te gustaría obtener con la venta de tu producto. Ten en cuenta tus costos de fabricación o compra, gastos adicionales y lo que considered un margen de ganancia adecuado para asegurar la rentabilidad de tu negocio.",
  },
  {
    id: 3,
    title: "Categoría del producto",
    description: "Cada categoría en MercadoLibre tiene un valor de comisión distinto. Selecciona la categoría de tu producto para que podamos calcular un aproximado del costo de venta, considerando la comisión correspondiente a esa categoría"
  },
  {
    id: 4,
    title: "Selección de donde se publica el producto",
    description: "Elige si vas a vender en MercadoLibre, MercadoShop o en ambas plataformas. De esta manera, podremos sugerirte los tipos de operaciones disponibles, junto con los precios y comisiones correspondientes para cada canal de venta."
  },
  {
    id: 5,
    title: "Peso del Producto",
    description: "Cuando el precio de tu producto supera un monto específico, el costo de envío es gratis para el comprador. Sin embargo, el costo será compartido entre el vendedor y MercadoLibre, dependiendo de las políticas vigentes."
  },
  {
    id: 6,
    title: "Sugerencias de Precios",
    description: "Al completar todos los datos que te solicitamos, te ayudaremos a calcular el precio de venta ideal para tus productos en MercadoLibre y MercadoShops. Tendremos en cuenta los costos de fabricación o compra, las comisiones por categoría, los gastos adicionales y cualquier promoción de envío gratis aplicable."
  }
]


const LandingPage = () => {

  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <div className="container mx-auto w-full h-full flex flex-col md:flex-row md:items-start justify-around pt-28 z-10 relative my-10">
        <div className="absolute w-80 h-80 rounded-full bg-[#FFE600] bottom-20 -right-4 -z-10 md:-top-10 md:w-[80vw] md:h-[80vw] md:-right-48 max-w-[600px] max-h-[600px]"></div>
        <div className="max-w-5xl h-full flex flex-col md:flex-row items-center justify-center gap-x-7">
          <div className="w-fit md:w-1/3 md:flex md:flex-col md:justify-around flex-shrink-0">
            <div className="px-4 flex flex-col items-center md:items-start mb-6 gap-y-3">
              <span className="text-[#2B3674] font-bold">Simulador de costos</span>
              <p className="text-pretty font-bold text-center text-[#2B3674] md:text-left text-4xl">Calculá a cuanto deberías vender tus productos en MercadoLibre</p>
            </div>
            <div className="px-4">
              <p className="text-[#2B3674] text-sm font-extralight text-center md:text-left">Nuestro simulador de costos te permite calcular el precio ideal para tus productos en MercadoLibre, ajustando comisiones, costos y márgenes para maximizar la rentabilidad de tus ventas.</p>
            </div>
            <div className="w-full flex justify-center">
              <Button onClick={() => navigate("/calculator")} className="mt-4 md:mx-4 cursor-pointer px-5 md:w-full z-40">Calcular ahora</Button>
            </div>
          </div>
          
          <div className="relative mx-auto md:w-1/3 hidden md:block">
            <img className="mx-auto" src="/calculator-animated.png" alt="" />
          </div>
        </div>
      </div>

      {/* PORQUE MERCURIO LABS */}
      <section className="w-full flex-col items-center my-16">
        <div className="flex justify-center relative ">
          <div className="hidden md:block absolute left-0 -z-10 top-0 rounded-r-full h-full bg-[#FFE600] w-full xl:w-[90%]"></div>
          <div className="w-full bg-[#FFE600] md:bg-transparent mt-5 py-12 relative flex flex-col md:flex-row-reverse md:items-center max-w-5xl">
            <div className="max-w-1/2 flex flex-col items-center font-figtree text-[#003164]">
              <h4 className="text-pretty text-center text-3xl text-bold ">Te sugerimos el precio y el<br />tipo de operación a publicar</h4>
              <p className="text-center mt-5 max-w-[90%] font-light">Ingresa el costo de tu producto y cuánto deseas ganar, y nosotros te sugerimos el precio ideal para cada tipo de operación en MercadoLibre. </p>
            </div>
            <div className="hidden md:block w-full h-[500px] bg-[url('/why-preview-mobile.png')] bg-contain bg-center bg-no-repeat"></div>
            <div className="flex flex-col items-center gap-y-5 justify-center mt-5 md:hidden">
              <div className="flex flex-col items-center bg-[#FEFEFE] w-[260px] rounded-[5px] shadow-md">
                <p className="flex w-full rounded-[5px] justify-center items-center h-[50px] text-white bg-[#3EB7FF]">Precio sugerido en MercadoLibre</p>
                <div className="flex flex-col h-[80px] justify-center items-center">
                  <span>Precio de venta sugerido:</span>
                  <span>$48.800</span>
                </div>
              </div>

              <div className="flex flex-col items-center bg-[#FEFEFE] w-[260px] rounded-[5px] shadow-md">
                <p className="flex w-full rounded-[5px] justify-center items-center h-[50px] text-white bg-[#3EB7FF]">Precio sugerido en MercadoShop</p>
                <div className="flex flex-col h-[80px] justify-center items-center">
                  <span>Precio de venta sugerido:</span>
                  <span>$48.800</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section id="how-to-use" className="w-full flex flex-col items-center gap-y-16 font-figtree relative md:px-4  my-16">
        <h3 className="text-balance font-bold text-center text-[#2B3674] md:text-left text-2xl md:text-3xl lg:text-4xl">¿Cómo usar la calculadora de precio de venta?</h3>
        <div className="w-full flex flex-col items-center gap-y-16 font-figtree max-w-5xl relative ">
          <div className="absolute h-full w-[2px] left-1/2 -translate-x-1/2 md:left-3 md:translate-x-0 border border-dashed border-[#FFE600]/20 -z-10"></div>
          {ITEMS_HOW_TO_USE.map((item, i) => <div key={item.id} className="flex flex-col md:flex-row md:gap-x-4 items-center gap-y-5 text-[#003164]">
            <div data-side={i === 0 || i === ITEMS_HOW_TO_USE.length - 1} className="w-7 h-7 shrink-0 flex justify-center items-center rounded-full bg-transparent border-2 border-transparent data-[side=true]:border-[#FFE600]">
              <div className="w-5 h-5 rounded-full bg-[#FFE600]/50 border-2 border-[#FFE600]"></div>
            </div>
            <div className="flex flex-col items-center gap-y-5 md:items-start">
              <span className="text-center md:text-left text-lg font-semibold">{item.title}</span>
              <p className="text-center md:text-left font-light">{item.description}</p>
            </div>
          </div>)}
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full flex flex-col items-center gap-y-16 font-figtree relative  my-16">
        <div className="w-full max-w-5xl">
          <h3 className="text-balance font-bold text-center text-[#2B3674] lg:text-left lg:ml-7 text-2xl md:text-3xl lg:text-4xl self-start mb-8">Preguntas Frecuentes </h3>
          <Accordion title="¿Cuál es el beneficio de usar MercurioLabs?" description="MercurioLabs es una herramienta diseñada específicamente para vendedores y emprendedores que desean vender en MercadoLibre y MercadoShops sin perder dinero. Esta calculadora de precios te permite tener en cuenta todos los costos involucrados, desde el precio de compra o fabricación hasta las comisiones de la plataforma y los costos de envío, ayudándote a definir un precio de venta rentable y competitivo. Ideal para quienes quieren optimizar sus márgenes sin complicaciones." />
          <Accordion title="¿El precio sugerido es exacto?" description="Esta calculadora es una versión beta que se basa en los datos actualizados de costos de MercadoLibre. Si bien se tienen en cuenta muchas variables, el precio que te ofrece es solo una sugerencia. Te recomendamos validarlo con el simulador de precios de MercadoLibre para asegurarte de que se ajuste a tu estrategia de venta y a las condiciones del mercado." />
          <Accordion title="¿Por qué usar esta calculadora y no el simulador de MercadoLibre?" description="El simulador de costos de MercadoLibre es una excelente herramienta para entender las comisiones y calcular tus ganancias. Sin embargo, nuestra calculadora te permite establecer el precio de venta desde cero, utilizando los datos que ya conoces sobre tu producto, como costos de fabricación, gastos adicionales y margen de ganancia. Ambas herramientas son complementarias: el simulador te ayuda a conocer el impacto de las comisiones, mientras que nuestra calculadora te guía para fijar un precio competitivo y rentable desde el principio." />
        </div>
      </section>

      <footer className="w-full justify-center flex  bg-[#2B3674] py-10">
        <div className="max-w-5xl flex flex-col md:flex-row  items-center pt-10">
          <div className="w-full flex flex-col items-center h-full pt-4">
            <h3 className="text-balance font-semibold text-center text-white lg:text-left lg:ml-7 text-2xl md:text-3xl lg:text-4xl mb-8">¡Estemos en contacto!</h3>
            <h4 className="uppercase text-white text-[20px]">¡Tu opinión cuenta!</h4>
            <p className="text-white text-center font-extralight mt-8">Somos emprendedores comprometidos en ayudar a otros emprendedores. Por eso, tus comentarios y feedback son fundamentales para mejorar nuestra herramienta..</p>
          </div>
          <form className="flex flex-col w-full px-4 gap-y-4 mt-4">
            <div className="flex flex-col lg:flex-row justify-between gap-x-4">
              <div className="flex flex-col items-center w-full gap-y-4">
                <div className="rounded-full relative border h-[60px] border-white w-full">
                  <input placeholder="Nombre" className="w-full h-full pl-6 rounded-full bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-white placeholder:text-white/70" />
                </div>
                <div className="rounded-full relative border h-[60px] border-white w-full">
                  <input type="email" placeholder="Email" className="w-full h-full pl-6 rounded-full bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-white placeholder:text-white/70" />
                </div>
              </div>
              <div className="flex flex-col items-center w-full gap-y-4">
                <div className="rounded-full relative border h-[60px] border-white w-full mt-4 lg:mt-0">
                  <input type="text" placeholder="Teléfono" className="w-full h-full pl-6 rounded-full bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-white placeholder:text-white/70" />
                </div>
                <div className="rounded-full relative border h-[60px] border-white w-full">
                  <input type="text" placeholder="Empresa / Emprendimiento" className="w-full h-full pl-6 rounded-full bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-white placeholder:text-white/70" />
                </div>
              </div>
            </div>
            <div className="flex-col">
              <div className="rounded-3xl relative border border-white">
                <textarea placeholder="Mensaje" rows={6} className="w-full h-full pl-6 pt-3 rounded-3xl bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-white placeholder:text-white/70" />
              </div>
              <button className="py-2 bg-white px-7 rounded-[40px] mt-4">Enviar</button>
            </div>
          </form>
        </div>
      </footer>
    </>
  )
}
export default LandingPage