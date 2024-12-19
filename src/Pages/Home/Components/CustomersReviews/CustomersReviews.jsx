
import Vector from"assets/certification.svg"
const CustomersReviews = () => {

  return (<>
    <div id="certifications"></div>
    <div className="w-full bg-[#fff] relative h-[110vh]  mx-auto py-4 scale-90">
    {/* Top Section */}
    <div className="flex flex-col lg:flex-row  gap-6 lg:gap-[204px] justify-center items-center relative mx-auto pb-8 pt-12 px-4 w-[85%] ">
    <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
        <span className="text-[16px] text-start font-normal leading-[29px] text-[#0e4a79] tracking-[0.32px]">
          الشهادات
        </span>
        <span className="text-[30px] font-bold leading-[54.6px] text-[#0e4a79] tracking-[0.6px]">
          شهادات الجودة والتميز
        </span>
      </div>
      <span className="text-start md:text-right text-[16px] font-normal leading-[29.12px] text-[#667680] tracking-[0.32px]">
        تفخر شركة إنجاز بحصولها على شهادات جودة معتمدة، تعكس التزامنا بأعلى
        المعايير العالمية في تقديم خدمات متميزة تلبي توقعات عملائنا وتحقق
        رضاهم.
      </span>

    </div>

    {/* Certification Section */}
    <div  className="relative mt-8 md:mt-[83px]">
      {/* Background Box */}
      <div className=" absolute inset-y-0 start-0 lg:-top-[15%] lg:-start-32 w-[80%] flex items-center justify-center max-w-[1166px] min-h-[530px] bg-[#0e4a79] rounded-tl-[32px] rounded-bl-[32px]" />

      {/* Content Section */}
      <div
      style={{top:"50%",transform:"translateY(30px)"}}
      className="flex flex-col pt-5 my-auto md:flex-row-reverse justify-center  gap-6 items-center relative z-10">
        {/* Text Card */}
        <div className="rounded-[32px] p-6 flex flex-col gap-4 ">
        <div className="flex flex-col gap-4 w-full max-w-[839px] bg-[#fbfbfb] rounded-[32px] p-10">
          <span className="text-[24px] font-medium leading-[43.68px] text-[#1d1d1d]">
            أيزو 9001 : 2015
          </span>
          <span className="text-[16px] font-medium leading-[29.12px] text-[#667680]">
            المواصفة الدولية ISO 9001:2015 هي المعيار الذي يحدد متطلبات نظام
            إدارة الجودة (QMS). من خلال تطبيق هذا المعيار في مجالات عملها،
            أثبتت شركة إنجاز كفاءتها في تقديم منتجات وخدمات تلبي احتياجات
            العملاء وتستوفي المتطلبات التنظيمية بكفاءة عالية.
          </span>
        </div>
        </div>

        {/* Images */}
        <div className="flex gap-4 items-center">
        <div
            className="w-[100px] md:w-[242px] h-[150px] md:h-[338px] bg-cover bg-center rounded-[16px]"
            style={{
              backgroundImage: "url(https://s3-alpha-sig.figma.com/img/b291/fe1f/6eb44daff1730c79b3b745d96a02c6d6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NW7g8C~Hrs3D09lWeZETwEQtprm--17vqgMrPK0RYVVgk~1I5tdOhq2ATZDZBFj-ZOEIwLrJEhiVQhETZn4QO4UOsxvrvl2Jpk8VVSAau2vz2sBS7abBo-GsmBzQdbfXEnTw0duhWa-jsfDC~lpU6rs1eoz4qd2QPBRMJ9Ceow-IJo9s9jxsaee03Co5DKsDHUBZPPqkwj4DtzTmRvT-yYH-cvcJMGneFC9C~nrG9POvfq70gI11JUbgfFPLly5Upw8p02ojI-F2Sw~nQHOvO8Yj7HC9XxjxBANuZHU3jrN34Mg2biYuru1ZteXmKfvrt5yYxU1mxn~D5e70l-Hjbg__)",
            }}
          />
          <div
            className="w-[100px] md:w-[262px] h-[100px] md:h-[262px] bg-cover bg-center rounded-[16px]"
            style={{
              backgroundImage: `url(${Vector})`,
            }}
          />

        </div>
      </div>
    </div>
  </div>
  
  </>
  );
};

export default CustomersReviews;
