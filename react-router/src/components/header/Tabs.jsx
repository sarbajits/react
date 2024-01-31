import React from 'react'
import { NavLink } from 'react-router-dom'

function Tabs({address, tabName}) {
  return (
    <li>
    <NavLink
        to={"/"+address}
        className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700 dark:text-white dark:hover:text-blue-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
        }
    >
        {tabName}
    </NavLink>
</li>
  )
}

export default Tabs