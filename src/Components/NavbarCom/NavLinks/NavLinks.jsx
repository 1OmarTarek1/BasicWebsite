import { NavLink } from 'react-router-dom'
import {NestedLink} from '../../../Components'
import { FaHome } from 'react-icons/fa'
import { FaShop, FaSquarePhone, FaUsersRectangle } from 'react-icons/fa6'

import './NavLinks.css'

const NavLinks = () => {
    return (
    <>
        <li>
            <NavLink to="/" className="navLink clsLink">
                <FaHome /> 
                <span>Home</span>
            </NavLink>
        </li>
        <li> 
            <NavLink to="/Shop" className="navLink clsLink">
                <FaShop />
                <span>Shop</span>
            </NavLink>
        </li>
        <li className='nestedLI'>
            <NestedLink />
        </li>
        {/* <li> 
            <NavLink to="/Contact" className="navLink clsLink">
                <FaSquarePhone />
                <span>Contact</span>
            </NavLink>
        </li> */}
        <li>
            <NavLink to="/About" className="navLink clsLink">
                <FaUsersRectangle />
                <span>About</span>
            </NavLink>
        </li>
    </>
    )
}

export default NavLinks