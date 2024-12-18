
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BannerHome.css";
import Victor from "assets/vectormap.svg";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

const BannerHome = () => {

  const cardsData = Array.from({ length: 10 }, (_, index) => ({
    title: `بلد ${index + 1}`,
    description: "سرعة وصول مع عمالة مدربة وكفاءات عالية مختارة بعناية",
    topIcon: "https://placehold.co/82x48", // Replace with the actual icon URL
    backgroundImage: "https://placehold.co/335x216", // Replace with the actual background image URL
  }));
  return (
    <div className="main-container w-full bg-[#fbfbfb] py-16 relative mx-auto my-0">
      <div className="flex flex-col items-center px-4">
        <h1 className="text-[30px] font-bold leading-[54.6px] text-[#0e4a79] text-center pb-16">
          مناطق الاستقدام و أرقام المترجمين
        </h1>
        <div className="relative w-full mt-10 z-2">
        <div className="flex flex-wrap gap-y-11 gap-x-4 justify-center">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className=" relative w-full h-[216px] sm:w-[335px] border rounded-[16px] hover:bg-white flex flex-col items-center justify-center bg-[linear-gradient(45deg,transparent_25%,rgba(0,128,0,.3)_30%,rgba(0,128,0,.3)_30%,transparent_25%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] hover:shadow-lg transition-[background-position_2s_ease-in-out] hover:bg-[position:100%_100%,100%_0] hover:duration-[1000ms]"

          >

            {/* Top Icon */}
            <div
              className="w-[82px] h-[48px] bg-cover bg-no-repeat absolute  rounded-[12px] mt-4 "
              style={{ backgroundImage: `url(${card.topIcon})`,top:"-25%" }}
            />

            {/* Content */}
            <div className="flex flex-col items-center gap-2 mt-4 px-4">
              <span className="text-[20px] font-bold text-[#000] text-center">
                {card.title}
              </span>
              <span className="text-[12px] text-[#667680] text-center">
                {card.description}
              </span>
            </div>

            {/* Button */}
            <button className="mt-4 w-[186px]  h-[48px] border border-[#0e4a79] text-[#0e4a79] rounded-full text-[16px] font-normal flex items-center justify-center relative overflow-hidden group">
  <span
   className="flex items-center absolute translate-x-[100px] transition-transform duration-500 ease-in-out   group-hover:translate-x-[35px]"
   >
    <FontAwesomeIcon icon={faPhone} className="" />
  </span>
  <span className="relative z-10">تواصل</span>
</button>

          </div>
          
        ))}
      </div>
          <div
                      style={{ backgroundImage: `url(${Victor})` }}
          className="w-full h-[764px] bg-cover bg-no-repeat absolute top-0 left-0 -z-10" />
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
