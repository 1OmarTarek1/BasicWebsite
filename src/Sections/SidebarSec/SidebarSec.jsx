import { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { SidebarContent } from '../../Components';
import './SidebarSec.css';

const SidebarSec = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const sidebarBtnRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // const Items = document.querySelectorAll(".sideItem");
    // Items.forEach(item => item.classList.remove('active'));
  };
  const handleCloseSidebar = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      sidebarBtnRef.current &&
      !sidebarBtnRef.current.contains(event.target)
    ) {
      // const Items = document.querySelectorAll(".sideItem");
      // Items.forEach(item => item.classList.remove('active'));
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleCloseSidebar);
    } else {
      document.removeEventListener('mousedown', handleCloseSidebar);
    }

    return () => {
      document.removeEventListener('mousedown', handleCloseSidebar);
    };
  }, [isOpen]);

  return (
    <>
      <div 
      ref={sidebarRef} 
      className={`sidebar ${isOpen ? 'open' : ''}`}
      >

      <SidebarContent clickEvent={toggleSidebar}/>

        <button 
          onClick={toggleSidebar} 
          className="open-sidebar-btn"
          ref={sidebarBtnRef}
        >
          { isOpen
            ? <FaArrowLeft data-aos="fade" data-aos-duration="500"/> 
            : <FaArrowRight data-aos="fade" data-aos-duration="500"/>
          }
        </button>
      </div>
    </>
  );
}

export default SidebarSec;
