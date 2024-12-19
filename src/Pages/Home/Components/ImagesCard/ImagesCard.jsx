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
  <div id="services" className=" "></div>
<div  className="main-container h-auto bg -[#fbfbfb] w-full mt-[85px] relative ">
      {/* Background Images */}
      
      {/* Content Section */}
      <div className=" w-[80%] md:w-[80%] mx-auto flex flex-col items-center md:flex-row md:items-end justify-between mb-10">
      <div className="flex flex-col gap-[24px] items-start z-[3] mt-16 sm:mt-8 md:w-[70%] ">
        <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
          <span className="  text-[16px] font-normal leading-[29px] text-[#0e4a79]">
            خدماتنا
          </span>
          <span className="flex   text-[30px] font-bold leading-[54.6px] text-[#0e4a79] tracking-[0.6px]">
            حلول شاملة تلبي جميع احتياجاتك
          </span>
        </div>
        <span className="flex   text-[16px] font-normal leading-[29.12px] text-[#667680] tracking-[0.32px]">
        في إنجاز للاستقدام، نقدم مجموعة متنوعة من الخدمات المصممة لتلبية احتياجات الأفراد والشركات باحترافية وجودة عالية. نسعى لتقديم حلول متكاملة في استقدام العمالة والتدريب والتأهيل لضمان راحتك ورضاك.
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
     <div className="swiper-container mt-8 px-2  sm:mt-4  ">
        <Swiper
        dir="ltr"
          spaceBetween={20} // Adjust space between cards
          slidesPerView={1} // Show 3 full cards and half of the 4th
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
            <div className="flex relative w-full h-[312px] bg-[url(https://s3-alpha-sig.figma.com/img/e9e3/1f11/ccfbeec9641dc3b5ff77bc218a6c7411?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0ujUsxkiwTGh7fsfMg2fd4~Q~w-SNj0GICo95QmEv~hwqV~VedAJh76J2ZNbl6GNiMeSXNaB3hCHzox2iof2QNzgWLRCK2MUmd4db~KvfS3HwLKFXzKe1Goj5YKyqmqI4kq76vSIN3vWO~dReN1TGCKF850KUNZX2oI7bDl0PPKbjPIQ37KKy-TBgLmnM8ZS6NW5VnJPaoEryl3NiBFsijGhQw2JL5gOvCqKC~V4~bs96lcLJyq5xGGEn2QdehQMC4HQbu~TejVlGZWPmPIcuz9mKiiutoz1cLl3dfmwwvcXZfOzJeE1jtt-euOl30i5poW6oPYKr-bHRjKOSSAEQ__)] bg-cover bg-center bg-no-repeat rounded-[24px] flex-nowrap justify-center items-end p-8">
            <div className="absolute inset-0 bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20 rounded-[24px]"></div>

              <span className="flex relative text-white text-[32px] font-bold">نقل خادمات</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex relative w-full h-[312px] bg-[url(https://s3-alpha-sig.figma.com/img/7457/69e9/eec30ec0783fa56a574d2f8a05000975?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wj8EDHw3raZolus4PYA9H4vUAjSAJCgnNsLvYDhiOLr6R1yQ7e6jyKFaorqVDdmxm2zki0C3VccBKBCb5SZrXN6I2y7hBwWnfnyBEURhBSS294doDkQ~IRBJcT3AfqTfhrVRjSsey-VKp0gpFuacMvUiTDcZ~Pi9YPhRXY5d5sq6noOsSUkbvF1x2Bix7dV2siaMx~Wh68U7GFCl0EK70jX632btIuOqdtyNWUHGJ2tjY05~uxuTRz3KyyXZrzYqXrp9hDhBfMNAyLw9V4btGqFhqQDFxATEcnpYGJQatS~I4BzkF6s23MEpVF9LyoUSHpQSnk~dun7sG1IOlJhCHA__)] bg-cover bg-no-repeat bg-center rounded-[24px] flex-nowrap justify-center items-end p-8">
            <div className="absolute inset-0 bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20 rounded-[24px]"></div>

              <span className="flex relative text-white text-[32px] font-bold">استقدام سائقين</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex relative w-full h-[312px] bg-[url(https://s3-alpha-sig.figma.com/img/b81c/8433/2980222d00047f2a0f4bfc86b8b45582?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RVV2sZ42LnRY5HeN1hxi1KLUhuxUmPzqoDK2~z7mf96~CSK6kwNemIgWfs5XZQpvrNbHEfJvC-kRiuoWs9~npT5Lgr0-TDmooSN5QWKzurnf5nIbyMGLd4vz9lI-KHV3EwgYyfhUf7tdHovVmA3oNBdPgukLBU~SSGZjgnGGGmyV2ol4AamR4O1BLraglHnOMEK7wS1We1b17qXx0xDk998CKRNfzc3tP~Tyv0JD2rrukxo58Aj~YoYgkNO385HHTCYWYfhKHc4bpvgnZpeWixdIuRj50RMvoOMNhc2xQDDpSZYJDteKHnvcM9D6lVwadsbenKflSBqUl8nYyqciTg__)] bg-cover bg-no-repeat bg-center rounded-[24px] flex-nowrap justify-center items-end p-8">
            <div className="absolute inset-0 bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20 rounded-[24px]"></div>

              <span className="flex relative text-white text-[32px] font-bold">استقدام عاملات</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex relative w-full h-[312px] bg-[url(https://s3-alpha-sig.figma.com/img/851a/68be/cccbe746d0166050deb81be3a53252ad?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d7HbwCCZwM0y83R0OEyrGT5dUGY1ZDYi0IMr03sZK8CbRdHK~BsXRHiX~ep9zA3AoNpuBTR-Mm~Cl5agS22-eqWusM5MimAzWaar-P8bVAIbafQ4zJXaKbeYBqsx5X8LHjTQT-y~a68knn36jKIAVQ~cnFg9zeHR-hIjepEVBRMz~DYr6St-4~GtjZnDZXIdmAFZs-sBsYWaShEOeHZU~snB0BpTLYeUPxlssghOFKACmqE0rcVg29HEnBLkJURpilBx9-MVSRQhvbeW70nWFiyGhq~wJ9ao54-GKZ8KdpYYoKdE4tGQVhaFBiTPiVydBzK544f6XmkYtKPc0j4ChQ__)] bg-cover bg-no-repeat bg-center rounded-[24px] flex-nowrap justify-center items-end p-8">
            <div className="absolute inset-0 bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20 rounded-[24px]"></div>
            <span className="flex relative text-white text-[32px] font-bold">خدماتنا</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative w-full h-[312px] bg-[url(https://s3-alpha-sig.figma.com/img/7f5c/5e6d/c2278dead62f9f642e71645560046e7a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OJsHI6uF0Jsz1fZo7eg6QuNRc5fW3rj02d4KJtuUXzOLBw2XCF7I8LVoqdPkIlvvTc68fJKio0HpcNNVyT02dxOhsJujJy6gc4Z9Ap7ly59BtNOKvuHybUFXP4Nhbrx5Z0sZKJ8cvgEvFmQbI5rbW~WhawNahazj3SXsnxwN6pz9y-ViuP1BAP95d7Bw0218KIAGk-Et2TtO9qeIDpZ5L9x2KDo6r5huGtvdf2hDCqi7lswmdUnjZNh4ZHl-Zx3JJVXc63ZW7tkQlmE4bO2N~x5mF7hRNGaBNYQD3MXneCyYdHD0bLR~~pSvcSdWFrFbUSoC0WWKnF1ZRYBL05rbAg__)] bg-cover bg-no-repeat bg-center rounded-[24px] flex justify-center items-end p-8">
  {/* Linear Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20 rounded-[24px]"></div>
  {/* Content */}
  <span className="relative text-white text-[32px] font-bold">مناطق الاستقدام</span>
</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>






    
  </>
  );
};

export default ImagesCard;
