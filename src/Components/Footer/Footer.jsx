import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faSnapchat,
  faWhatsapp,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {
  faTimes, // "X" Icon from FontAwesome
} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  const links = [
    { name: "الشهادات", href: "/certificates" },
    { name: "رحلة العميل", href: "/journey" },
    { name: "الأقسام", href: "/sections" },
    { name: "الشركاء", href: "/partners" },
    { name: "خدماتنا", href: "/services" },
    { name: "انجاز في ارقام", href: "/stats" },
    { name: "من نحن", href: "/about" },
    { name: "اخبار انجاز", href: "/news" },
  ];

  const policies = [
    { name: "الشروط والأحكام", href: "/terms" },
    { name: "سياسة الخصوصية", href: "/privacy" },
    { name: "أسئلة شائعة", href: "/faq" },
  ];

  return (
    <div className=" bg-[#0e4a79]">
    <div className=" scale-[98%] flex flex-col gap-6 items-center px-4 py-8 mx-auto">
      {/* Main Links and Subscription Section */}
      <div className=" main-container flex flex-col md:flex-row gap-10 justify-between items-center w-full max-w-screen-xl py-6">
        <div className="flex flex-wrap gap-6 justify-center md:justify-start items-center text-white">
        {links.reverse().map((link, index) => (
        <Link
          key={index}
          to={link.href}
          className="text-sm font-medium text_small_Bukra whitespace-nowrap text-white"
        >
          {link.name}
        </Link>
      ))}
        </div>
        <div className="flex flex-col items-center gap-4 scale-[90%]">
          <div className="relative w-full max-w-lg">
            <input
              type="email"
              placeholder="سجل هنا بريدك الالكتروني"
              className="w-[20rem] sm:w-[30rem] h-[3.375rem] text_small_Bukra px-4 rounded-full shadow-md text-sm text-gray-600"
            />
          <button className="bg-[#0e4a79] w-[7.5rem] h-[2.87rem] text_small_Bukra text-white text-[12px] rounded-full px-6 py-2 absolute end-1 top-1">
            اشترك الآن
          </button>
          </div>
        </div>
      </div>

      {/* Footer Links and Rights Section */}
      <div className="flex flex-col gap-4 items-center w-full max-w-screen-xl">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center w-full border-t border-[#4483B4] pt-4">




        <div className="flex flex-wrap  gap-4 items-center py-3 text-white">
      {policies.reverse().map((policy, index) => (
        <Link
          key={index}
          to={policy.href}
          className="text-[12px] text-white text_small_Bukra "
        >
          {policy.name}
        </Link>
      ))}
    </div>
    <div className="scale-[80%] flex flex-row-reverse gap-6 items-center text-white text_small_Bukra">
        <Link
          to="https://www.instagram.com/"
          target="_blank"
          className="text-sm"
        >
          <FontAwesomeIcon className="text-white" icon={faInstagram} size="2x" />
        </Link>

        <Link
          to="https://www.linkedin.com/"
          target="_blank"
          className="text-sm"
        >
          <FontAwesomeIcon className="text-white" icon={faLinkedinIn} size="2x" />
        </Link>
        <Link
          to="https://www.youtube.com/"
          target="_blank"
          className="text-sm"
        >
          <FontAwesomeIcon className="text-white" icon={faWhatsapp} size="2x" />
        </Link>
        <Link
          to="https://twitter.com/"
          target="_blank"
          className="text-sm"
        >
          <FontAwesomeIcon className="text-white" icon={faTimes} size="2x" />
        </Link>
        <Link
          to="https://www.snapchat.com/"
          target="_blank"
          className="text-sm"
        >
          <FontAwesomeIcon className="text-white" icon={faSnapchat} size="2x" />
        </Link>

      </div>

        </div>
        <span className=" text-[12px] text_small_Bukra text-[#4483B4] text-start w-full">
          جميع الحقوق محفوظة لشركة إنجاز للاستقدام 2024
        </span>
      </div>
    </div>

    </div>
  );
};

export default Footer;
