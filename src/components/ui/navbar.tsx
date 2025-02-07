
import { useNavigate } from "react-router"
import Dropdown from "./dropdown"

export const NAV_ITEMS = [
    {
        id: 1,
        href: '/#about',
        label: 'Sobre el Proyecto'
    },
    {
        id: 2,
        href: '/#how-to-use',
        label: 'Cómo se usa'
    },
    {
        id: 3,
        href: '/#faq',
        label: 'Preguntas frecuentes'
    },
]

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <>
            <nav className="absolute left-1/2 -translate-x-1/2 bg-white md:pl-10 top-3 py-2 pl-4 pr-8 rounded-3xl shadow-lg z-30">
                <ul className="flex justify-between gap-x-4 items-center">
                    <li className="flex items-center md:hidden z-[100]">
                        <Dropdown/>
                    </li>

                    <li className="w-[179px] cursor-pointer" onClick={()=>navigate('/')}>
                        <img src="/logo.png" alt="Mercurio Labs Logo" />
                    </li>
                    <div
                        className="hidden md:flex md:gap-x-4 p-0 m-0"
                    >
                        {NAV_ITEMS.map(item => (
                            <li key={item.id} className="text-nowrap text-[14px] cursor-pointer" onClick={()=>navigate(item.href)}>
                                {item.label}
                            </li>
                        ))}
                    </div>
                    <li className="flex justify-center md:ml-5 cursor-pointer" onClick={()=>navigate('/calculator')}>
                        <span className="font-bold">Calcular!</span>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar