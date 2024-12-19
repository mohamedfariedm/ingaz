import logo from "../../assets/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NavbarMenu.css";

const NavbarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "الرئيسية", href: "/#main" },
    { name: "خدماتنا", href: "/#services" },
    { name: "انجاز في ارقام", href: "/#numbers" },
    { name: "رحلة العميل", href: "/#trip" },
    { name: "الشركاء", href: "/#partners" },
    { name: "الأقسام", href: "/#categories" },
    { name: "مناطق الاستقدام", href: "/#begin" },
    { name: "الشهادات", href: "/#certifications" },
    { name: "أخبارنا", href: "/#news" },
    { name: "تواصل معنا", href: "/#contactus" },
  ];

  // Scroll to hash
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const isLinkActive = (href) => {
    const { pathname, hash } = location;
    if (href.includes("#")) {
      const [basePath, hashValue] = href.split("#");
      return pathname === basePath && hash === `#${hashValue}`;
    }
    return pathname === href;
  };

  return (
    <div className="fixed top-0 start-0 end-0 main-container flex py-2 justify-around items-center bg-[rgba(255,255,255,0.3)] backdrop-blur-sm mx-auto z-40">
      <div className="scale-90 flex justify-between px-2 w-full lg:w-auto lg:justify-start items-center h-[70px] shrink-0 relative overflow-hidden z-[13]">
        {/* Logo */}
        <Link to={"/#main"}>
        
        <img className="md:h-[70px] object-contain" src={logo} alt="logo" />
        </Link>
        <span
          className="block lg:hidden p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-[2px] bg-[#0e4a79] mb-[4px]"></span>
          <span className="block w-6 h-[2px] bg-[#0e4a79] mb-[4px]"></span>
          <span className="block w-6 h-[2px] bg-[#0e4a79]"></span>
        </span>
      </div>
      <div className="hidden lg:flex flex-col items-end scale-90">
        <div className="flex flex-wrap gap-6 items-center w-full relative">
          {links.map((link) => (
            <span className="relative" key={link.name}>
              <NavLink
                to={link.href}
                className={() =>
                  `text-sm font-normal ${
                    isLinkActive(link.href)
                      ? "text-[#0e4a79] nav-link-active font-semibold"
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
                      isLinkActive(link.href)
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
