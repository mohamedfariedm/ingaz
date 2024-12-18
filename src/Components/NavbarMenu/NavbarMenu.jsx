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
    // { name: "الأقسام", href: "/sections" },
    // { name: "مناطق الاستقدام", href: "/areas" },
    // { name: "الشهادات", href: "/certificates" },
  ];

  return (
    <div className="fixed top-0 start-0 end-0 main-container flex px-4 py-2 justify-between items-center bg-[rgba(255,255,255,0.3)]   overflow-hidden mx-auto z-40">
      <div className="flex-1 h-[70px] shrink-0 relative overflow-hidden z-[13]">
        {/* Logo */}
        <img className="ms-28" src={logo} alt="logo" width={"246px"} height={"70px"} />
        <button
          className="block lg:hidden p-2 text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-[2px] bg-[#0e4a79] mb-[4px]"></span>
          <span className="block w-6 h-[2px] bg-[#0e4a79] mb-[4px]"></span>
          <span className="block w-6 h-[2px] bg-[#0e4a79]"></span>
        </button>
      </div>
      <div className="hidden  lg:flex flex-1 flex-col items-end">
        <div className="flex flex-wrap gap-6 items-center w-full relative">
          {links.map((link) => (
            <span className="relative">

            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                ` text-sm font-normal ${
                  isActive ? "text-[#0e4a79] nav-link-active" : "text-[#667680]"
                }`
              }
            >
              {link.name}
              
            </NavLink>

            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
