const Steps = ({ step: propStep }: { step: number }) => {
    const step = propStep ;
    return (
        <div className='flex gap-x-8'>{[...Array(3)].map((_, i) => <div key={i} data-focus={step <= i} className="rounded-full data-[focus=false]:border-[#3EB7FF] border-transparent border-2 flex justify-center items">
            <div data-focus={step <= i} className='border-2 data-[focus=false]:border-white rounded-full border-transparent'>
                <div data-focus={step <= i} className='border-2 data-[focus=false]:border-white rounded-full border-transparent'>
                    <div data-focus={step <= i} className='w-5 h-5 rounded-full data-[focus=false]:bg-[#3EB7FF] data-[focus=true]:bg-[#3EB7FF]/60 data-[focus=true]:border-4 data-[focus=true]:border-[#3EB7FF] data-[focus=true]:opacity-30'></div>
                </div>
            </div>
        </div>)}</div>
    )
}

export default Steps