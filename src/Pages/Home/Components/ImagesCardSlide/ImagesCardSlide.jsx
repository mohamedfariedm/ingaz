import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Victor1 from "assets/1.svg";
import Victor2 from "assets/2.svg";
import Victor3 from "assets/3.svg";
import Victor4 from "assets/4.svg";
import Victor5 from "assets/5.svg";
const ImagesCardSlide = () => {
  const cards = [
    {
      title: "التواصل الاجتماعي",
      description: "قسم يدير وسائل التواصل لنشر الثقافة وبناء ثقة العملاء.",
      image: Victor1,
    },
    {
      title: "الإدارة المالية",
      description: "قسم يدير جميع الشؤون المالية لشركة إنجاز للاستقدام.",
      image: Victor2,
    },
    {
      title: "تقنية المعلومات",
      description:
        "قسم مسؤول عن الحاسب الآلي، البرامج، الأجهزة، والشبكات بالشركة.",
      image: Victor3,
    },
    {
      title: "الإدارة القانونية",
      description:
        "قسم يقدم الاستشارات القانونية ويحل الشكاوى وفق أنظمة المملكة.",
      image:"",
    },
    {
      title: "الترجمة",
      description:
        "قسم الترجمة يقدم ترجمات دقيقة ومتخصصة حسب احتياجات الشركة.",
      image: Victor5,
    },
    {
      title: "مراكز الاتصال",
      description:
        "مركز اتصالات ينسق الخدمات ويضمن الجودة والتطوير المستمر.",
      image: Victor4,
    },
  ];

  return (
    <div className="main-container h-auto my-0 py-16 w-full relative">
      {/* Content Section */}
      <div className="w-[80%] mx-auto flex flex-col items-center md:flex-row md:items-end justify-between mb-10">
        <div className="flex flex-col gap-[24px] items-start z-[3] mt-16 sm:mt-8 md:w-[60%]">
          <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
            <span className="text-[16px] font-normal leading-[29px] text-[#0e4a79]">
              الأقسام
            </span>
            <span className="text-[30px] font-bold leading-[54.6px] text-[#0e4a79] tracking-[0.6px]">
              خبرة شاملة تغطي جميع احتياجاتك
            </span>
          </div>
          <span className="text-[16px] font-normal leading-[29.12px] text-[#667680] tracking-[0.32px]">
            في إنجاز للاستقدام، نقدم خدمات متكاملة من خلال أقسامنا المتخصصة التي
            تعمل بتناغم لضمان تحقيق أعلى مستويات الجودة والتميز. كل قسم مصمم
            لتلبية احتياجات الأفراد والشركات بكفاءة واحترافية.
          </span>
        </div>
        <div className="mt-5">
      <div className="flex gap-5">
            <div className="group hover:bg-[#0e4a79] arrow-right swiper-prev flex w-[64px] h-[64px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[8px] justify-center items-center flex-nowrap rounded-[32px] border-solid border border-[#e7e7e7] ">
                        <FontAwesomeIcon className="text-[#0e4a79] group-hover:text-white" icon={faArrowRight} size="lg" />
              
            </div>
            <div className="group hover:bg-[#0e4a79] arrow-left swiper-next flex w-[64px] h-[64px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[8px] justify-center items-center flex-nowrap rounded-[32px] border-solid border border-[#e7e7e7]">
            <FontAwesomeIcon className="text-[#0e4a79] group-hover:text-white" icon={faArrowLeft} size="lg" />

            </div>
          </div>
      </div>
      </div>

      {/* Swiper Slider */}
      <div className="swiper-container mt-8 sm:mt-4 w-[80%] mx-auto ">
        <Swiper
          dir="ltr"
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          navigation={{
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
          }}
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-[#fbfbfb] rounded-[10px] border border-[#e7edf2]">
                <div className="flex justify-center">
                <div
                  className="w-full h-[136px] max-w-[136px] bg-cover bg-center rounded-t-[16px] mb-4"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>
                </div>
                <h3 className="text-[20px] text-center line-clamp-1 font-medium leading-[36px] text-[#0e4a79] mb-2">
                  {card.title}
                </h3>
                <p className="text-[14px] text-center line-clamp-2 leading-[25.48px] text-[#667680]">
                  {card.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImagesCardSlide;
