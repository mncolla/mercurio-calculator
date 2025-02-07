import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid'

const Accordion = ({title, description}: {title: string, description: string}) => {
    return (
        <Disclosure as="div" className="p-6 w-full">
            <DisclosureButton className="group flex w-full items-center justify-between border-b border-b-[#3EB7FF] pb-8">
                <span className="text-[20px] font-semibold text-left text-[#003164] group-data-[hover]:text-[#003164]/80">
                    {title}
                </span>
                <PlusIcon className="size-5 fill-[#3EB7FF]/60 group-data-[hover]:fill-[#3EB7FF]/50 group-data-[open]:hidden" />
                <MinusIcon className="size-5 fill-[#3EB7FF]/60 hidden group-data-[hover]:fill-[#3EB7FF]/50 group-data-[open]:block" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 font-light text-[#003164]">{description}</DisclosurePanel>
        </Disclosure>
    )
}
export default Accordion