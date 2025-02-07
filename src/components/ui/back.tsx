const BackButton = ({ onClick, className }: { onClick: () => void, className: string }) => {

    return (
        <svg
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            width={24}
            height={24}
            strokeWidth={2}
            className={className}
        >
            <path d="M5 12l14 0"></path>
            <path d="M5 12l6 6"></path>
            <path d="M5 12l6 -6"></path>
        </svg>
    )
}

export default BackButton