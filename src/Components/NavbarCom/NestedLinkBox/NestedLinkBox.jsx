import { NavLink } from 'react-router-dom';
import { IoManOutline, IoWomanOutline } from 'react-icons/io5';
import './NestedLinkBox.css'
import { MiniNestedBx } from '../../../Components';






const NestedLinkBox = ({ nestedLinkBox }) => {
    return (
        <div className={nestedLinkBox ? "nestedLinkBox opened" : "nestedLinkBox"}>
            <ul className="linkBoxContainer">
                <li className="linkItem bxLink">
                    <NavLink className="itemLink clsLink" to={"/Products/Men"}>
                        <IoManOutline />
                        <span>Men</span>
                    </NavLink>
                    <MiniNestedBx 
                    id="menItem"
                    allPaths={{
                        t_shirts: "/Products/Men/T-Shirts",
                        shirts: "/Products/Men/Shirts",
                        pants: "/Products/Men/Pants",
                        shoes: "/Products/Men/Shoes",
                        sport: "/Products/Men/Sport",
                        other: "/Products/Men/Other"
                    }}
                    />
                </li>
                <li className="linkItem bxLink">
                    <NavLink className="itemLink clsLink" to={"/Products/Women"}>
                        <IoWomanOutline />
                        <span>Women</span>
                    </NavLink>
                    <MiniNestedBx 
                        id="womenItem"
                        allPaths={{
                            t_shirts: "/Products/Women/T-Shirts",
                            shirts: "/Products/Women/Shirts",
                            pants: "/Products/Women/Pants",
                            shoes: "/Products/Women/Shoes",
                            sport: "/Products/Women/Sport",
                            other: "/Products/Women/Other"
                        }}
                    />
                </li>
                <li className="linkItem bxLink">
                    <NavLink className="itemLink clsLink" to={"/Products/Boys"}>
                        <IoManOutline />
                        <span>Boys</span>
                    </NavLink>
                    <MiniNestedBx
                        id="boysItem"
                        allPaths={{
                            t_shirts: "/Products/Boys/T-Shirts",
                            shirts: "/Products/Boys/Shirts",
                            pants: "/Products/Boys/Pants",
                            shoes: "/Products/Boys/Shoes",
                            sport: "/Products/Boys/Sport",
                            other: "/Products/Boys/Other"
                        }}
                    />
                </li>
                <li className="linkItem bxLink">
                    <NavLink className="itemLink clsLink" to={"/Products/Girls"}>
                        <IoWomanOutline />
                        <span>Girls</span>
                    </NavLink>
                    <MiniNestedBx 
                        id="girlsItem"
                        allPaths={{
                            t_shirts: "/Products/Girls/T-Shirts",
                            shirts: "/Products/Girls/Shirts",
                            pants: "/Products/Girls/Pants",
                            shoes: "/Products/Girls/Shoes",
                            sport: "/Products/Girls/Sport",
                            other: "/Products/Girls/Other"
                        }}
                    />
                </li>
            </ul>
        </div>
    )
}

export default NestedLinkBox