import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgPlayListRemove } from "react-icons/cg";
import { RiMenu3Fill } from "react-icons/ri";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
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
    { name: "About Us", to: "/about" },
    { name: "Our Team", to: "/our-team" },
    { name: "Posts", to: "/posts" },
    { name: "Resources", to: "/resources" },
    { name: "Contact", to: "/contact" },
  ];
  return (
    <div
      className={`fixed w-full transition-transform duration-700 z-50 bg-white text-[15px]  ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between text-tertiary-text shadow items-center p-2 py-4 md:py-5 md:px-6">
        <div>
          <NavLink className="py-5" to={"/"}>
            <img
              className="md:h-10 h-8"
              src="../../image/albert-logo.png"
              alt="Albert Logo"
            />
          </NavLink>
        </div>
        <div className="space-x-8 hidden md:flex items-center font-semibold pr-10">
          {navItems.map((navItem, index) => (
            <NavLink
              key={index}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
              to={navItem.to}
            >
              {navItem.name}
            </NavLink>
          ))}
        </div>
        {menu ? (
          <div className="hidden md:flex space-x-3 items-center">
            <Link to="/profile">
              <img
                src={""}
                alt={""}
                className="w-10 h-10 object-cover bg-blue-100 rounded-full"
              />
            </Link>
            <p className="uppercase text-sm">{"asdfsdaf"}</p>
            <button
              className="md:inline-flex border font-semibold text-gray-700 hover:bg-gray-300 transition-all duration-500 bg-gray-200 px-3 py-1 mx-2 rounded"
              onClick={() => setShowModal(true)}
            >
              Logout
            </button>
            {showModal && <></>}
          </div>
        ) : (
          <div className="flex items-center justify-end">
            <Link
              className="border font-semibold text-gray-700 hover:bg-gray-300 transition-all duration-500 bg-gray-200 px-3 py-1 mx-2 rounded"
              to="/register"
            >
              Sign up
            </Link>
            <Link
              className="border text-gray-50 font-semibold bg-primary hover:bg-blue-900 px-4 py-1 mx-2 rounded"
              to="/login"
            >
              Login
            </Link>
          </div>
        )}
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
        } z-30 absolute flex flex-col  md:hidden duration-500 ease-out transition-all `}
        ref={menuRef}
      >
        <div className=" w-screen text-center p-5 flex flex-col space-y-3">
          {navItems.map((navItem, index) => (
            <NavLink
              onClick={() => setMenu(false)}
              key={index}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
              to={navItem.to}
            >
              {navItem.name}
            </NavLink>
          ))}
          {"" && (
            <div className="flex flex-row space-x-4 bg-gray-300 rounded  py-4 justify-between px-10 items-center">
              <div className="flex items-center space-x-2">
                <Link to="/profile">
                  <img
                    src={""}
                    alt={""}
                    className="w-10 h-10 object-cover bg-blue-100 rounded-full"
                  />
                </Link>
                <p className="uppercase text-sm">{"fdsakf"}</p>
              </div>

              <button
                className="md:inline-flex border font-semibold text-gray-700 hover:bg-gray-300 transition-all duration-500 bg-gray-200 px-3 py-1 mx-2 rounded"
                onClick={() => setShowModal(true)}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
