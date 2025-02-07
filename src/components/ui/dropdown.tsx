import { NAV_ITEMS } from './navbar'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/solid'

export default function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ">
                    <Bars3Icon aria-hidden="true" className="-mr-1 h-8 w-8 text-gray-400"/>
                </MenuButton>
            </div>
            <MenuItems
                anchor="bottom start"
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    {NAV_ITEMS.map(item => <MenuItem key={item.id}>
                        <span
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            {item.label}
                        </span>
                    </MenuItem>)}
                </div>
            </MenuItems>
        </Menu>
    )
}