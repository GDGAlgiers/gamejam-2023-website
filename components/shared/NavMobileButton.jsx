import React from 'react'

const NavMobileButton = ( { showMobileNavBar, setShowMobileNavBar }) => {

    return (
        <div class="w-fit h-fit flex flex-col justify-center">
            <div class="relative py-3 sm:max-w-xl mx-auto">
                <nav x-data="{ open: false }">
                    <button class="w-14 h-14 relative focus:outline-none rounded" onClick={() => setShowMobileNavBar(prev => !prev)}>
                    
                        <div class="block w-5 absolute left-6 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                            <span  class={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${showMobileNavBar ? 'rotate-45' : '-translate-y-2.5'}`}></span>
                            <span  class={`block absolute  h-0.5 w-7 text-white bg-current   transform transition duration-500 ease-in-out ${showMobileNavBar ? 'opacity-0' : null}`}></span>
                            <span  class={`block absolute  h-0.5 w-7 text-white bg-current transform  transition duration-500 ease-in-out ${showMobileNavBar ? '-rotate-45' : 'translate-y-2.5'}`}></span>
                        </div>
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default NavMobileButton;