import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import "./sidebar.scss";
import "./sidebarTest.css";
import "boxicons/css/boxicons.min.css";

const sidebarNavItems = [
  {
    display: "Home",
    icon: <i className="bx bx-home"></i>,
    to: "/",
    section: "",
  },
  {
    display: "My Projects",
    icon: <i className="bx bx-receipt"></i>,
    to: "/projects",
    section: "projects",
  },
  {
    display: "Skills",
    icon: <i className="bx bx-receipt"></i>,
    to: "/skills",
    section: "skills",
  },
  {
    display: "GroceryLister",
    icon: <i className="bx bx-star"></i>,
    to: "/groceries",
    section: "groceries",
  },
  {
    display: "FIFAutobidder",
    icon: <i className="bx bx-star"></i>,
    to: "/autobidder",
    section: "autobidder",
  },
  {
    display: "Autocropper",
    icon: <i className="bx bx-star"></i>,
    to: "/autocropper",
    section: "autocropper",
  },
  {
    display: "FreeTimeFinder",
    icon: <i className="bx bx-star"></i>,
    to: "/freetimefinder",
    section: "freetimefinder",
  },
  {
    display: "Me",
    icon: <i className="bx bx-star"></i>,
    to: "/instagram",
    section: "instagram",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(".item");
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="logo">Tucker</div>
      <div ref={sidebarRef} className="menu">
        <div
          ref={indicatorRef}
          className="indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div className={`item ${activeIndex === index ? "selected" : ""}`}>
              <div className="icon">{item.icon}</div>
              <div className="text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  // return (
  //   <div className="sidebar">
  //     <div className="sidebar__logo">Tucker</div>
  //     <div ref={sidebarRef} className="sidebar__menu">
  //       <div
  //         ref={indicatorRef}
  //         className="sidebar__menu__indicator"
  //         style={{
  //           transform: `translateX(-50%) translateY(${
  //             activeIndex * stepHeight
  //           }px)`,
  //         }}
  //       ></div>
  //       {sidebarNavItems.map((item, index) => (
  //         <Link to={item.to} key={index}>
  //           <div
  //             className={`sidebar__menu__item ${
  //               activeIndex === index ? "active" : ""
  //             }`}
  //           >
  //             <div className="sidebar__menu__item__icon">{item.icon}</div>
  //             <div className="sidebar__menu__item__text">{item.display}</div>
  //           </div>
  //         </Link>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Sidebar;
