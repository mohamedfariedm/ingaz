import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Victor from "assets/Layer_1.svg";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faPhoenixFramework } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



const ContactInformations = () => {

  return (<>
    <div id="contactus"></div>
    <div className="main-container w-[80%] bg-[#fff] relative mx-auto my-5 p-4 md:py-16">
    {/* Main Section */}
    <div className="w-full bg-[#0e4a79] rounded-[32px] flex flex-col lg:flex-row justify-between items-center p-8">
            {/* Text Section */}
            <div className="flex flex-col text-right text-[#fff] lg:w-2/3">
        <h1 className="text-[24px] md:text-[36px] font-semibold leading-snug">
          تواصل مع فريقنا لتلبية احتياجاتك بكل احترافية
        </h1>
        <p className="text-[14px] md:text-[16px] mt-4 leading-relaxed">
          نحن هنا لخدمتك والإجابة على جميع استفساراتك. فريقنا المتخصص جاهز
          لتقديم الدعم والمساعدة على مدار الساعة لضمان راحتك ورضاك.
        </p>
        <Link to={"/contactus"} className="self-start my-6 px-6 py-2 border border-[#fff] rounded-full  hover:bg-white hover:text-[#0e4a79] hover:scale-110  text-[14px] font-normal transition-all duration-500">
          تواصل معنا
        </Link>
      </div>
      
      {/* Placeholder Image */}
      <div className="w-[258px] h-[311px] bg-cover bg-center rounded-[16px] mb-6 lg:mb-0 lg:ml-8"
        style={{
          backgroundImage: `url(${Victor})`,
        }}
      />

    </div>

    {/* Contact Information */}
    <div className="flex flex-col md:flex-row flex-wrap justify-between items-start mt-8 gap-6">
      {/* Card 1 */}
      <div className="flex items-start gap-4 w-full md:w-[30%]">
        <div className=" bg-[#0e4a79] p-[.75rem] rounded-full flex items-center justify-center">
        <FontAwesomeIcon icon={faPhone} className=" text-white" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-[16px] font-semibold text-[#0e4a79]">
             الاتصال الهاتفي
          </h2>
          <p className="text-[14px] text-[#667680] mt-2">
            ساعات العمل: من الأحد إلى الخميس، من 9 صباحًا حتى 5 مساءً.
          </p>
          <span className="text-[14px] text-[#0e4a79] mt-2">
            +966 920020077
          </span>
        </div>
      </div>


      {/* Card 2 */}
      <div className="flex items-start gap-4 w-full md:w-[30%]">
      <div className=" bg-[#0e4a79] p-[.75rem] rounded-full flex items-center justify-center">
      <FontAwesomeIcon icon={faEnvelope} className=" text-white" />

        </div>
        <div className="flex flex-col">
          <h2 className="text-[16px] font-semibold text-[#0e4a79]">
            البريد الإلكتروني
          </h2>
          <p className="text-[14px] text-[#667680] mt-2">
            الرد خلال 24 ساعة. لا تتردد في مراسلتنا لمزيد من المعلومات أو الدعم.
          </p>
          <span className="text-[14px] text-[#0e4a79] mt-2">
            info@enjaz.com
          </span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex items-start gap-4 w-full md:w-[30%]">
      <div className=" bg-[#0e4a79] p-[.75rem] rounded-full flex items-center justify-center">
      <FontAwesomeIcon icon={faLocationDot} className=" text-white" />

        </div>
        <div className="flex flex-col">
          <h2 className="text-[16px] font-semibold text-[#0e4a79]">
            موقعنا
          </h2>
          <p className="text-[14px] text-[#667680] mt-2">
            أوقات الزيارة: من الأحد إلى الخميس، من 9 صباحًا حتى 5 مساءً.
          </p>
          <a href="#" className="text-[14px] text-[#0e4a79] underline mt-2">
            الموقع على الخريطة
          </a>
        </div>
      </div>
    </div>
  </div>
  
  </>
  );
};

export default ContactInformations;
