import ArrowDown from "Components/ArrowDown/ArrowDown";
import "./SliderHeader.css";
import { Link } from "react-router-dom";
const SliderHeader = () => {
  return (
    <>
    <div id="main"></div>
      <div className="banner-main-area--1 h-[100vh]">
        <div className="banner-one section-padding bg-image h-[100vh]">
          <div className="video-bg overlay-bg">
            <video
              autoPlay
              className="video-src"
              loop
              muted
              // @ts-ignore
              playsInline=""
              preload="auto"
            >
              <source src="https://s3-figma-videos-production-sig.figma.com/video/1252915703189651761/TEAM/bc1a/30a5/-ace5-4ced-8f63-278116711a10?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X8vTz0uT4RAy0k~ydsvVokxay7YUV40wvCyxCfGq6Xupcl9AKC7lHWc3VsLAIIE7pLHESCpXowsD9Uji4DZTAopXcQEkuLhJOEENnjNcfNCjYWgYiWtPKN5uSmlVku~V5YlzYEA8wVjldtaly8IGHLhVlI-kA2Q5pdy2mgRp4aipWGRAF5JjbgzlufMgAY8vtef3KBUDJxfhNEtxi97wH5a19Rv4co-rkKfuf-aM2~Vhb86CIESoiGedP-~YhzfJYCQSeGB9jOsuqwEvzKEVR0xxjXZSmuQGO0zi0JvyBNpUL~dDEUsIHSi5qasXQgC5y9Lfwo~OC6oeqfqAttFTIw__" type="video/mp4" />
            </video>
          </div>
          <div className="info-banner relative z-1">
          <div className=" flex flex-col gap-6 items-center mx-auto my-0 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <span className="flex w-full justify-center items-start text-center  text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight ">
        خبرة تضع الحلول بين يديك
      </span>

      {/* Description */}
      <span className="flex w-full justify-center items-start text-center  text-base sm:text-lg md:text-xl font-normal text-white">
        نحن في إنجاز للاستقدام، نقدم لك خدمات استقدام متكاملة تجمع بين الكفاءة
        والجودة، مع تدريب احترافي للعمالة لضمان تلبية احتياجات الأفراد والأعمال
        في جميع أنحاء المملكة.
      </span>
    </div>
  <Link to={"/contactus"} className="text-sm sm:text-base border  border-1  font-normal text-white  relative whitespace-nowrap pointer flex pt-3 pr-12 pb-3 pl-12 gap-2 justify-center items-center rounded-full border-white mx-auto my-8 w-16 h-6 sm:w-32 sm:h-10 hover:bg-[#0e4a79] hover:border-none transition-transform duration-300 hover:scale-110 ">
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
