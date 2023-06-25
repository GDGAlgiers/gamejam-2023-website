import Link from "next/link"

const NavMobile = () => {
    return (
        <div className="w-screen bg-[#211D3D] h-full py-20 z-[9999] border border-[#8900EF66] ">
                <ul className="flex w-full no-scrollbar flex-col gap-1 list-none">
                    <li className="p-2 text-white text-center font-PTChaser">
                        <Link href="/#">
                            Home
                        </Link>
                    </li>
                    <li className="p-2 text-white text-center font-PTChaser">
                        <Link href="/#about">
                            About
                        </Link>
                    </li>
                    <li className="p-2 text-white text-center font-PTChaser">
                        <Link href="/#partners">
                            Partners
                        </Link>
                    </li>
                    <li className="p-2 text-white text-center font-PTChaser">
                        <Link href="/#sponsors">
                            Sponsors
                        </Link>
                    </li>
                    <li className="p-2 text-white text-center font-PTChaser">
                        <Link href="/#agenda">
                            Agenda
                        </Link>
                    </li>
                    <li className="p-2 text-white text-center font-PTChaser">
                        <Link href="/#faq">
                            FAQ
                        </Link>
                    </li>
                    <li className="p-2 text-white text-center font-PTChaser">
                        <Link href="/#contact">
                            Contact Us
                        </Link>
                    </li>
                </ul>
        </div>
    )
}

export default NavMobile