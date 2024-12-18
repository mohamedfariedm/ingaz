import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ImagesCard = () => {

  return (<>
<div className="main-container h-auto bg -[#fbfbfb] my-0 w-full  relative ">
      {/* Background Images */}
      
      {/* Content Section */}
      <div className=" w-[80%] md:w-[80%] mx-auto flex flex-col items-center md:flex-row md:items-end justify-between mb-10">
      <div className="flex flex-col gap-[24px] items-start z-[3] mt-16 sm:mt-8 md:w-[60%] ">
        <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
          <span className="  text-[16px] font-normal leading-[29px] text-[#0e4a79]">
            خدماتنا
          </span>
          <span className="flex   text-[30px] font-bold leading-[54.6px] text-[#0e4a79] tracking-[0.6px]">
            حلول شاملة تلبي جميع احتياجاتك
          </span>
        </div>
        <span className="flex   text-[16px] font-normal leading-[29.12px] text-[#667680] tracking-[0.32px]">
          منذ تأسيسها في عام 2015، أصبحت شركة إنجاز للاستقدام إحدى أبرز شركات
          مجموعة إنجاز، التي تفخر بتقديم حلول شاملة ومتكاملة في مجال استقدام
          العمالة المنزلية والمهنية من مختلف الجنسيات. تعمل إنجاز برؤية واضحة
          تواكب رؤية المملكة 2030، حيث تلتزم بتقديم خدمات عالية الجودة تسهم في
          بناء حياة مستدامة ومتميزة للمواطنين والمقيمين في جميع أنحاء المملكة.
        </span>
      </div>
      <div className="mt-5">
      <div className="flex gap-5">
            <div className="arrow-right swiper-prev flex w-[64px] h-[64px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[8px] justify-center items-center flex-nowrap rounded-[32px] border-solid border border-[#e7e7e7] ">
                        <FontAwesomeIcon className="text-[#0e4a79]" icon={faArrowRight} size="lg" />
              
            </div>
            <div className="arrow-left swiper-next flex w-[64px] h-[64px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[8px] justify-center items-center flex-nowrap rounded-[32px] border-solid border border-[#e7e7e7]">
            <FontAwesomeIcon className="text-[#0e4a79]" icon={faArrowLeft} size="lg" />

            </div>
          </div>
      </div>
      </div>

     {/* Swiper Slider */}
     <div className="swiper-container mt-8 sm:mt-4">
        <Swiper
        dir="ltr"
          spaceBetween={20} // Adjust space between cards
          slidesPerView={3.5} // Show 3 full cards and half of the 4th
          centeredSlides={true} // Center the active slide
          navigation={{
            nextEl: ".arrow-right",
            prevEl: ".arrow-left"
          }}
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex w-full h-[312px] bg-[url(https://placehold.co/454x312)] bg-cover bg-no-repeat rounded-[24px] flex-nowrap justify-center items-end p-8">
              <span className="flex text-white text-[32px] font-bold">نقل خادمات</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full h-[312px] bg-[url(https://placehold.co/454x312)] bg-cover bg-no-repeat rounded-[24px] flex-nowrap justify-center items-end p-8">
              <span className="flex text-white text-[32px] font-bold">استقدام سائقين</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full h-[312px] bg-[url(https://placehold.co/454x312)] bg-cover bg-no-repeat rounded-[24px] flex-nowrap justify-center items-end p-8">
              <span className="flex text-white text-[32px] font-bold">استقدام عاملات</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full h-[312px] bg-[url(https://placehold.co/454x312)] bg-cover bg-no-repeat rounded-[24px] flex-nowrap justify-center items-end p-8">
              <span className="flex text-white text-[32px] font-bold">خدماتنا</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full h-[312px] bg-[url(https://placehold.co/454x312)] bg-cover bg-no-repeat rounded-[24px] flex-nowrap justify-center items-end p-8">
              <span className="flex text-white text-[32px] font-bold">مناطق الاستقدام</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>






    
  </>
  );
};

export default ImagesCard;
