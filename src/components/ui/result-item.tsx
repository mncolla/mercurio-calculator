const ResultTabItem = ({ title, description, price }: { title: string, description: string, price: number }) => {
    return (
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 w-full pt-[34px] pb-[27px] border border-gray-500/40 pl-[31px] gap-x-[120px] bg-white">
            <div className="flex flex-col gap-y-[14px] text-[#7C7C7C]">
                <span className="font-bold text-center md:text-left">{title}</span>
                <span className="hidden md:block font-normal">{description}</span>
            </div>
            <div className="flex flex-col gap-y-[14px] text-center text-[#003164]">
                <span>Precio de venta sugerido</span>
                <span className="font-bold">{price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 })}</span>
            </div>
        </div>
    )
}
export default ResultTabItem