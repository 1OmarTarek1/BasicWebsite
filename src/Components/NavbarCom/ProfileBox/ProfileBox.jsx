import { NavLink } from 'react-router-dom';
import { ThemeBtn } from '../../../Components';
import { FaArrowRightFromBracket, FaCircleHalfStroke, FaGear, FaCircleUser, FaCartShopping, FaBell, FaHeart } from 'react-icons/fa6';
import './ProfileBox.css';

const ProfileBox = ({ profileBx }) => {
    return (
        <div className={profileBx ? "profileBox opened" : "profileBox"}>
            <ul className="BoxContainer">
                <li className="profileItem bxLink">
                    <NavLink className={"proBxLink clsProBx"} to={"/Profile"}>
                        <FaCircleUser />
                        <span>Omar Tarek</span>
                    </NavLink>
                </li>
                <li className="profileItem bxLink">
                    <NavLink className={"proBxLink clsProBx"} to={"/Notifications"}>
                        <FaBell />
                        <span>Notifications</span>
                    </NavLink>
                </li>
                <li className="profileItem bxLink">
                    <NavLink className={"proBxLink clsProBx"} to={"/MyShop"}>
                        <FaCartShopping />
                        <span>My Shop</span>
                    </NavLink>
                </li>
                <li className="profileItem bxLink">
                    <NavLink className={"proBxLink clsProBx"} to={"/Favorites"}>
                        <FaHeart />
                        <span>Favorites</span>
                    </NavLink>
                </li>
                <li className="profileItem bxLink">
                    <div className={"proBxLink"} >
                        <FaCircleHalfStroke />
                        <div className='d-flex' style={{flex:"1" ,justifyContent:"space-between", alignItems:"center"}}>
                            <span>Theme</span>
                            <ThemeBtn btnID={"proBxThe"}/>
                        </div>
                    </div>
                </li>
                <li className="profileItem bxLink">
                    <NavLink className={"proBxLink clsProBx"} to={"/Settings"}>
                        <FaGear />
                        <span>Settings</span>
                    </NavLink>
                </li>
                <li className="profileItem bxLink">
                    <div className={"proBxLink clsProBx"} >
                        <FaArrowRightFromBracket />
                        <span>Logout</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ProfileBox;
