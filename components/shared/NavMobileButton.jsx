import React from 'react'

const NavMobileButton = ( { showMobileNavBar, setShowMobileNavBar }) => {
    return (
        <div className="w-fit z-[999999] h-fit flex flex-col justify-center">
            <div className="relative py-3 sm:max-w-xl mx-auto">
                <nav x-data="{ open: false }">
                    <button className="w-14 h-14 relative focus:outline-none rounded" onClick={() => setShowMobileNavBar(prev => !prev)}>
                    
                        <div className="block w-5 absolute left-6 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                            <span  className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${showMobileNavBar ? 'rotate-45' : '-translate-y-2.5'}`}></span>
                            <span  className={`block absolute  h-0.5 w-7 text-white bg-current   transform transition duration-500 ease-in-out ${showMobileNavBar ? 'opacity-0' : null}`}></span>
                            <span  className={`block absolute  h-0.5 w-7 text-white bg-current transform  transition duration-500 ease-in-out ${showMobileNavBar ? '-rotate-45' : 'translate-y-2.5'}`}></span>
                        </div>
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default NavMobileButton;