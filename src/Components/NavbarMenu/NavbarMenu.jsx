import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import "./NavbarMenu.css";
import { useState } from "react";

const NavbarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "تواصل معنا", href: "/contactus" },
    { name: "انجاز في ارقام", href: "/stats" },
    { name: "أخبارنا", href: "/news" },
    { name: "الأسئلة الشائعة", href: "/faq" },
    { name: "من نحن", href: "/aboutus" },
    { name: "رحلة العميل", href: "/journey" },
    { name: "الشركاء", href: "/partners" },
  ];

  return (
    <div className="fixed top-0  start-0 end-0 main-container flex px-4 py-2 justify-between items-center bg-[rgba(255,255,255,0.3)] backdrop-blur-sm mx-auto z-40">
      <div className="flex lg:flex-1 w-full lg:w-auto justify-between items-center h-[70px] shrink-0 relative overflow-hidden z-[13]">
        {/* Logo */}
        <img
          className="lg:ms-28 w-[50%] h-auto md:w-[246px] md:h-[70px]"
          src={logo}
          alt="logo"
        />
        <span
          className="block lg:hidden p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-[2px] bg-[#0e4a79] mb-[4px]"></span>
          <span className="block w-6 h-[2px] bg-[#0e4a79] mb-[4px]"></span>
          <span className="block w-6 h-[2px] bg-[#0e4a79] "></span>
        </span>
      </div>
      <div className="hidden lg:flex flex-1 flex-col items-end">
        <div className="flex flex-wrap gap-6 items-center w-full relative">
          {links.map((link) => (
            <span className="relative" key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-normal ${
                    isActive
                      ? "text-[#0e4a79] nav-link-active"
                      : "text-[#667680]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </span>
          ))}
        </div>
      </div>
      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden z-50">
          <ul className="flex flex-col gap-4 p-4">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `block text-sm font-normal ${
                      isActive
                        ? "text-[#0e4a79] nav-link-active"
                        : "text-[#667680]"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarMenu;
