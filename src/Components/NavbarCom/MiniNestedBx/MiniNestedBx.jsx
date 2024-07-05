import { NavLink } from 'react-router-dom';
import { FaTshirt } from 'react-icons/fa';
import './MiniNestedBx.css'





const MiniNestedBx = (props) => {
    return (
        <ul className="miniNestedBx" id={props.id}>
            <li className="miniItem">
                <NavLink to={props.allPaths.t_shirts}>
                    <FaTshirt />
                    <span>T-Shirts</span>
                </NavLink>
            </li>
            <li className="miniItem">
                <NavLink to={props.allPaths.shirts}>
                    <FaTshirt />
                    <span>Shirts</span>
                </NavLink>
            </li>
            <li className="miniItem">
                <NavLink to={props.allPaths.pants}>
                    <FaTshirt />
                    <span>Pants</span>
                </NavLink>
            </li>
            <li className="miniItem">
                <NavLink to={props.allPaths.shoes}>
                    <FaTshirt />
                    <span>Shoes</span>
                </NavLink>
            </li>
            <li className="miniItem">
                <NavLink to={props.allPaths.sport}>
                    <FaTshirt />
                    <span>Sport</span>
                </NavLink>
            </li>
            <li className="miniItem">
                <NavLink to={props.allPaths.other}>
                    <FaTshirt />
                    <span>Other</span>
                </NavLink>
            </li>
        </ul>
    )
}

export default MiniNestedBx