import ArrowDown from "Components/ArrowDown/ArrowDown";
import "./SliderHeader.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const SliderHeader = () => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-visible");
            } else {
              entry.target.classList.remove("animate-visible");
            }
          });
        },
        { threshold: 0.2 } // Trigger animation when 20% of the section is visible
      );
  
      const sections = document.querySelectorAll(".animate-section");
      sections.forEach((section) => observer.observe(section));
  
      return () => observer.disconnect(); // Cleanup
    }, []);
  return (
    <>
    <div id="main"></div>
      <div className="banner-main-area--1 h-[100vh]">
        <div className="banner-one section-padding bg-image h-[90vh] lg:h-[100vh]  ">
          <div className="video-bg overlay-bg animate-section opacity-0 transition-opacity duration-1000">
            <video
              autoplay="autoplay"
              className="video-src"
              loop
              muted
              // @ts-ignore
              playsInline="playsinline"
              preload="auto"
            >
              <source src="https://s3-figma-videos-production-sig.figma.com/video/1252915703189651761/TEAM/bc1a/30a5/-ace5-4ced-8f63-278116711a10?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OwZhfbxT4Gc4F3eOzNQcwTplKk5rzQOGY0ZqBibUF2AZwagwaWK9895xf656Rl6pvdjfAo37MyptFm2Rw3EbxzvS5fL7KFVFDTBwEmYGDhSIqU-5o8o8A80lJsbxbWzI~IrEr~y5B~X1jISd0zEMim3z-QB4Kchtj8yqGw-Eh5acCbLeRalDHazPjtTBhq-3-A37VHggqvx56upEH86duva3Tr02D8Dx8C6DSKPx~obaxcsCWf8N9qh4YDQVT5HXggkhdTzMvmoZ7-u4Viqxgwm~zo~OIFAClrLIkPWvWH7yXqiDlVPo4Ratb7cp63SW15yrJEgE9iIzQ2W5rlDIag__" type="video/mp4" />
            </video>
          </div>
          <div className="info-banner relative z-1 scale-[85%] flex flex-col gap-6 items-end animate-section opacity-0 transition-opacity duration-1000 ">
          <div className=" flex flex-col gap-6 items-center mx-auto my-0 ">
      {/* Title */}
      <span className="flex w-full text_bold_Bukra justify-center items-start text-center  text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight animate-section opacity-0 transition-opacity duration-1000 ">
        خبرة تضع الحلول بين يديك
      </span>

      {/* Description */}
      <span className="flex w-full justify-center text_small_Bukra leading-[29px] pt-4 items-start text-center  text-[1.1rem]  font-normal text-white animate-section opacity-0 transition-opacity duration-1000">
        نحن في إنجاز للاستقدام، نقدم لك خدمات استقدام متكاملة تجمع بين الكفاءة
        والجودة، مع
        <br className="hidden lg:block"/>
         تدريب احترافي للعمالة لضمان تلبية احتياجات الأفراد والأعمال
        في جميع أنحاء المملكة.
      </span>
    </div>
  <Link to={"/contactus"} className=" border  border-1 text_small_Bukra  font-normal text-white  relative whitespace-nowrap pointer flex px-12 py-3 gap-2 justify-center items-center rounded-full border-white mx-auto my-5  hover:bg-[#0e4a79] hover:border-none transition-transform duration-300 hover:scale-90 ">
    تواصل معنا
  </Link>

<ArrowDown/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderHeader;
