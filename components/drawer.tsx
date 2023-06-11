import { ListBulletIcon } from "@heroicons/react/24/outline";

const Drawer = ({ children }) => {
    return <>
        <input type="checkbox" id="drawer-toggle" className="relative sr-only peer" />
        <nav className="fixed top-0 left-0 z-20 w-300 h-full transition-all duration-100 transform -translate-x-full  bg-black text-white border-r border-neutral-900 peer-checked:translate-x-0">
            <label htmlFor="drawer-toggle" className=" font-serif text-xs absolute w-8 flex h-8 items-center whitespace-nowrap  bg-black text-white border-neutral-900 border-r border-y -right-8 top-3 p-1 transition-all duration-100  peer-checked:rotate-180 peer-checked:left-64">
                <ListBulletIcon />
            </label>
            <div className="p-8">
                {children}
            </div>
        </nav>
    </>
}

export default Drawer