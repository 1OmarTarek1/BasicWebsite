import { useState } from 'react';
import { FaBars} from 'react-icons/fa6';
import { IoCartOutline, IoContrastOutline, IoHeartOutline, IoHelpOutline, IoHomeOutline, IoInformationOutline, IoLogOutOutline, IoManOutline, IoNotificationsOutline, IoPersonOutline, IoSettingsOutline, IoWomanOutline } from 'react-icons/io5';
import { DetailsItem, Search, ThemeBtn } from '../../../Components';
import { MdSearch } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './SidebarContent.css';

const SidebarContent = ({ clickEvent }) => {
    const [searchValue, setSearchValue] = useState("");


    return (
        <div className="sidebar-content">
            <div className="sideHeader" onClick={clickEvent}>
                <FaBars /> <span>LOGO</span>
            </div>


            <div className="sideBody">
                <div className="searchWrapper">
                    <Search 
                        searchValue={searchValue} 
                        setSearchValue={setSearchValue} 
                        cla={"search sideSearch"} 
                        id={"sidebarSearch"}
                    />
                    <label htmlFor='sidebarSearch'>
                        <MdSearch />
                    </label>
                </div>


                <div className="containerIt">
                    <NavLink to={"/"} className="sideItem">
                        <IoHomeOutline />
                        <div className="name">Home</div>
                    </NavLink>
                    <NavLink to={"/Profile"} className="sideItem">
                        <IoPersonOutline />
                        <div className="name">Profile</div>
                    </NavLink>
                    <NavLink to={"/Notifications"} className="sideItem">
                        <IoNotificationsOutline  />
                        <div className="name">Notifications</div>
                    </NavLink>
                    <NavLink to={"/MyShop"} className="sideItem">
                        <IoCartOutline />
                        <div className="name">My Shop</div>
                    </NavLink>
                    <NavLink to={"/Favorites"} className="sideItem">
                        <IoHeartOutline />
                        <div className="name">Favorites</div>
                    </NavLink>
                </div>



                <DetailsItem 
                    id="menDetailsItem"
                    gender={true}
                    text="Men"
                    allPaths={{
                        t_shirts: "/Products/Men/T-Shirts",
                        shirts: "/Products/Men/Shirts",
                        pants: "/Products/Men/Pants",
                        shoes: "/Products/Men/Shoes",
                        sport: "/Products/Men/Sport",
                        other: "/Products/Men/Other"
                    }}
                />

                <DetailsItem 
                    id={"womenDetailsItem"}
                    text={"Women"}
                    gender={false}
                    allPaths={{
                        t_shirts: "/Products/Women/T-Shirts",
                        shirts: "/Products/Women/Shirts",
                        pants: "/Products/Women/Pants",
                        shoes: "/Products/Women/Shoes",
                        sport: "/Products/Women/Sport",
                        other: "/Products/Women/Other"
                    }}
                />

                <DetailsItem 
                    id={"boysDetailsItem"}
                    text={"Boys"}
                    gender={true}
                    allPaths={{
                        t_shirts: "/Products/Boys/T-Shirts",
                        shirts: "/Products/Boys/Shirts",
                        pants: "/Products/Boys/Pants",
                        shoes: "/Products/Boys/Shoes",
                        sport: "/Products/Boys/Sport",
                        other: "/Products/Boys/Other"
                    }}
                />

                <DetailsItem 
                    id={"girlsDetailsItem"}
                    text={"Girls"}
                    gender={false}
                    allPaths={{
                        t_shirts: "/Products/Girls/T-Shirts",
                        shirts: "/Products/Girls/Shirts",
                        pants: "/Products/Girls/Pants",
                        shoes: "/Products/Girls/Shoes",
                        sport: "/Products/Girls/Sport",
                        other: "/Products/Girls/Other"
                    }}
                />

                
            </div>

            <div className="sideFooter">
                <div className="footerItems">
                    <div className="sideItem">
                        <IoContrastOutline />
                        <div className="name">
                            <span>Theme</span>
                            <ThemeBtn btnID={"sideThe"}/>
                        </div>
                    </div>

                    <NavLink to={"/Profile/Settings"} className="sideItem">
                        <IoSettingsOutline />
                        <div className="name">Settings</div>
                    </NavLink>

                    <NavLink to={"/Info"} className="sideItem">
                        <IoInformationOutline />
                        <div className="name">Info</div>
                    </NavLink>

                    <NavLink to={"/Help"} className="sideItem">
                        <IoHelpOutline />
                        <div className="name">Help</div>
                    </NavLink>
                </div>

                <div className="Logout">
                    <div className="sideItem">
                        <IoLogOutOutline />
                        <div className="name">Logout</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarContent;

