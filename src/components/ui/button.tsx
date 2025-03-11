import { PropsWithChildren } from "react"

const Button = ({ children, className, onClick, ...props }: PropsWithChildren & { className?: string, onClick?: () => void }) => {
    return (
        <button onClick={onClick} className={"bg-[#2B3674] rounded-2xl py-3 text-white cursor-pointer " + className} {...props}>
            {children}
        </button>
    )
}
export default Button