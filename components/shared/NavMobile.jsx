import Link from "next/link"
import { useState } from "react"

const NavMobile = () => {
    const [navItems, setNavItems] = useState(require('@/data/nav').default)
    return (
        <div className="w-screen bg-[#211D3D] h-full py-20 z-[9999] border border-[#8900EF66] ">
                <ul className="flex w-full no-scrollbar flex-col gap-1 list-none">
                    {navItems.map(item => 
                        <li key={item.name} className="p-2 text-white text-center font-PTChaser">
                            <Link href={item.target}>
                                {item.name}
                            </Link>
                        </li>)
                    }
                </ul>
        </div>
    )
}

export default NavMobile