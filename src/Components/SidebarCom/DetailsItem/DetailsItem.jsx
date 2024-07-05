import { NavLink, useLocation } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoManOutline, IoWomanOutline } from 'react-icons/io5';
import './DetailsItem.css';

const DetailsItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const itemRef = useRef(null);
    const location = useLocation();

    const pathSec = location.pathname.split('/')[2];



    const isActive = pathSec === props.text; 

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (itemRef.current && !itemRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div 
            className={isActive
                ? `sideItem ${isOpen ? 'open' : ''} detailsItem`
                : `sideItem ${isOpen ? 'open' : ''} detailsItem`
            }
            id={props.id}
            ref={itemRef}
        >
            <div 
            className={isActive
            ? `sumTitle active`
            : `sumTitle `
            }
            onClick={toggleDetails}
            >
                <div className="d-flex gap-2">
                    {props.gender 
                    ? <IoManOutline />
                    : <IoWomanOutline />
                    }
                    <div className="name">
                        {props.text}
                    </div>
                </div>
                <span className= {isOpen ? "arrow opened" : "arrow"}>
                    <IoIosArrowDown /> 
                </span>
            </div>
            <ul
                className="content"
                ref={contentRef}
                style={{
                    height: isOpen ? 185 + 'px' : '0px',
                    opacity: isOpen ? 1 : 0
                }}
            >
                <li>
                    <NavLink to={props.allPaths.t_shirts}> T-Shirts </NavLink>
                </li>
                <li>
                    <NavLink to={props.allPaths.shirts}> Shirts </NavLink>
                </li>
                <li>
                    <NavLink to={props.allPaths.pants}> Pants </NavLink>
                </li>
                <li>
                    <NavLink to={props.allPaths.shoes}> Shoes </NavLink>
                </li>
                <li>
                    <NavLink to={props.allPaths.sport}> Sport </NavLink>
                </li>
                <li>
                    <NavLink to={props.allPaths.other}> Other </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default DetailsItem;
