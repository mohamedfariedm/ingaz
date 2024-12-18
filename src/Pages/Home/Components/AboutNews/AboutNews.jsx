const AboutNews = () => {

  return (
<div className="main-container  bg-[#fbfbfb] relative mx-auto my-16 py-16 ">
  <div className="w-[80%] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-8 lg:gap-0 mt-8">
      <div className="flex flex-col items-start lg:w-1/2">
          <span className="text-[16px] font-normal leading-[29px] text-[#0e4a79] text-right">
            أخبارنا
          </span>
          <span className="text-[30px] font-bold leading-[54.6px] text-[#0e4a79] text-right">
            اكتشف آخر أخبارنا وتحديثاتنا عن خدماتنا وإنجازاتنا
          </span>
        </div>
        <span className="text-[16px] font-normal leading-[29.12px] text-[#667680] text-right lg:w-1/2">
          ابقَ على اطلاع بكل جديد عن شركة إنجاز، من الإعلانات المهمة إلى إطلاق
          الخدمات والتطورات التي تؤكد التزامنا بتقديم الأفضل.
        </span>

      </div>

      {/* News Section */}
      <div className="flex flex-wrap justify-between mt-8">
        {/* News Cards */}
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="flex flex-col sm:w-[390px]  overflow-hidden group relative "
          >
              <div className="absolute inset-0  border-b-2 border-transparent">
    <div className="absolute top-[100%] -start-[100%] w-full h-1  bg-gradient-to-r from-[#0e4a79] via-[#0e4a79] to-[#0e4a79] group-hover:-translate-x-full transition-all duration-500"></div>
  </div>
            {/* Placeholder Image */}
            <div className="rounded-[16px] overflow-hidden">
            <div
              className="h-[303px] bg-cover bg-center  transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundImage: `url(https://placehold.co/454x303)`,
              }}
            ></div>
            </div>
            {/* Card Content */}
            <div className="p-4 flex flex-col gap-4">
              <span className="text-[20px] font-medium text-[#1d1d1d] line-clamp-2">
              افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل
              </span>
              <span className="text-[16px] font-normal text-[#667680] line-clamp-3">
                تفاصيل موجزة عن الخبر رقم {index + 1} مع وصف مختصر للمحتوى.
                تفاصيل موجزة عن الخبر رقم {index + 1} مع وصف مختصر للمحتوى.
                تفاصيل موجزة عن الخبر رقم {index + 1} مع وصف مختصر للمحتوى.
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-medium text-[#667680]">
                  24 نوفمبر 2023
                </span>
                <span className="text-[16px] font-medium text-[#e7edf2]">•</span>
                <span className="text-[16px] font-medium text-[#0e4a79]">
                  تصنيف
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All News Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 border border-[#0e4a79] text-[#0e4a79] rounded-full text-[14px] font-normal">
          تصفح جميع الأخبار
        </button>
      </div>

  </div>
    </div>
  );
};

export default AboutNews;
