import { PropsWithChildren } from "react"

const Button = ({ children, className, ...props }: PropsWithChildren & { className?: string }) => {
    return (
        <button className={"bg-[#2B3674] rounded-2xl py-3 text-white cursor-pointer " + className} {...props}>
            {children}
        </button>
    )
}
export default Button