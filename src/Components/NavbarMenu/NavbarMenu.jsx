import logo from "../../assets/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./NavbarMenu.css";

const NavbarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const menuRef = useRef(null); // Ref for the dropdown menu

  const links = [
    { name: "الرئيسية", href: "/#main", id: "main" },
    { name: "خدماتنا", href: "/#services", id: "services" },
    { name: "انجاز في ارقام", href: "/#numbers", id: "numbers" },
    { name: "رحلة العميل", href: "/#trip", id: "trip" },
    { name: "الشركاء", href: "/#partners", id: "partners" },
    { name: "الأقسام", href: "/#categories", id: "categories" },
    { name: "مناطق الاستقدام", href: "/#begin", id: "begin" },
    { name: "الشهادات", href: "/#certifications", id: "certifications" },
    { name: "أخبارنا", href: "/#news", id: "news" },
    { name: "تواصل معنا", href: "/#contactus", id: "contactus" },
  ];

  // Scroll to hash on initial load
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      let mostVisibleSection = null;
      let maxIntersectionRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
          mostVisibleSection = entry.target.id;
          maxIntersectionRatio = entry.intersectionRatio;
        }
      });

      if (mostVisibleSection && mostVisibleSection !== activeSection) {
        setActiveSection(mostVisibleSection);

        const newUrl = `/#${mostVisibleSection}`;
        if (window.location.hash !== newUrl) {
          window.history.pushState(null, "", newUrl);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [links, activeSection]);

  const isLinkActive = (href) => {
    const id = href.split("#")[1];
    return activeSection === id;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="fixed top-0 start-0 end-0 main-container flex py-2 justify-around items-center bg-[rgba(255,255,255,0.3)] backdrop-blur-sm mx-auto z-40"
      ref={menuRef} // Attach ref here
    >
      <div className="scale-90 flex justify-between px-2 w-full lg:w-auto lg:justify-start items-center h-[70px] shrink-0 relative overflow-hidden z-[13]">
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
                      : "text-[#667680] font-semibold"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </span>
          ))}
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden z-50">
          <ul className="flex flex-col gap-4 p-4">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  className={() =>
                    `block text-sm font-normal ${
                      isLinkActive(link.href)
                        ? "text-[#0e4a79] nav-link-active"
                        : "text-[#667680]"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
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
