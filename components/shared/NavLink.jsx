import React from 'react'

const NavLink = ({index, name, isActive}) => {
  return (
    <div
        key={index}
        className={`py-2 border-r-2 transition-all duration-700 ${isActive ? "border-white" : "border-gray-700"} `}
    >
        <p
            className={`w-fit text-xl text-right pr-4 cursor-pointer ${ isActive ? "font-extrabold text-white" : "font-medium text-gray-400"}`}
        >
            {name}
        </p>
    </div>
  )
}

export default NavLink