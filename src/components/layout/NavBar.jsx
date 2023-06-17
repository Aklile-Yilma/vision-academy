import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CgPlayListRemove } from "react-icons/cg";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../../assets/logo_cropped.png";
import classNames from "../../utils/classNames";

const NavBar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Admissions", to: "/admissions" },
    { name: "Staff", to: "/staff" },
    { name: "News", to: "/news" },
    { name: "Contact", to: "/contact-us" },
    { name: "About Us", to: "/about" },
    { name: "Gallery", to: "/gallery" },
  ];
  return (
    <>
      <div
        className={`fixed w-full transition-transform duration-700 z-50 mb-4 bg-white text-[15px]  ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-5 bg-primary w-full"></div>

        <div className="flex justify-around text-tertiary-text shadow items-center p-2 py-4 md:py-5 md:px-6">
          <div>
            <NavLink className="" to={"/"}>
              <img className="w-32" src={logo} alt="Vision Logo" />
            </NavLink>
          </div>
          <div className="space-x-8 hidden md:flex items-center font-semibold pr-10">
            {navItems.map((navItem, index) => (
              <NavLink
                key={index}
                className={classNames(
                  (isActive) => (isActive ? "text-primary underline" : ""),
                  "hover:underline underline-offset-4 decoration-primary decoration-2",
                  navItem.to === location.pathname
                    ? "underline underline-offset-4 decoration-primary decoration-4"
                    : ""
                )}
                to={navItem.to}
              >
                {navItem.name}
              </NavLink>
            ))}
          </div>
          <button
            className="md:hidden inline-flex  text-4xl "
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <CgPlayListRemove />
            ) : (
              <>
                <RiMenu3Fill />
              </>
            )}
          </button>
        </div>
        <div
          className={`${
            menu
              ? "font-semibold translate-x-0 bg-gray-200 shadow"
              : "translate-x-[40rem]"
          } z-30 absolute flex flex-col md:hidden duration-500 ease-out transition-all `}
          ref={menuRef}
        >
          <div className=" w-screen text-center p-5 flex flex-col space-y-3">
            {navItems.map((navItem, index) => (
              <NavLink
                onClick={() => setMenu(false)}
                key={index}
                className={classNames(
                  (isActive) => (isActive ? "text-primary" : ""),
                  "",
                  navItem.to === location.pathname
                    ? "underline underline-offset-4 decoration-primary decoration-4"
                    : ""
                )}
                to={navItem.to}
              >
                {navItem.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="h-32"></div>
    </>
  );
};

export default NavBar;
