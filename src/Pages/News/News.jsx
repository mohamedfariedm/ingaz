import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import SingleStats from "./Components/SingleStats/SingleStats";
import BreadCrumb from "./Components/BreadCrumb/BreadCrumb";

const News = () => {


  return (
    <>
       <HelmetInfo titlePage={"أخبارنا"} />
       <div className="mt-[85px]"/>

    <div className=" w-[90%] flex bg-[#fff] mx-auto my-0 px-4 py-16 lg:px-16">
        {/* Blog Categories Section */}
  <div className="flex flex-col gap-8 mt-8 w-[30%] lg:w-[280px] mx-auto">
    <div className="flex items-center  border border-[#e7e7e7] rounded-[8px]">
      <span className="text-[#667680] px-2">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#667680" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </span>
      <input
        className="w-full bg-transparent outline-none"
        placeholder="بحث عن..."
      />
    </div>
    <div className="flex flex-col gap-4">
      <span className="text-[#0e4a79] text-[14px] font-medium ">Blog Categories</span>
      {["View all", "Design", "Product", "Software Development", "Customer Success", "Leadership", "Management"].map((category) => (
        <div key={category} className="p-2 hover:text-[#0e4a79] hover:border-l-4 hover:border-l-[#0e4a79]">
          {category}
        </div>
      ))}
    </div>
  </div>

  <div className="flex flex-wrap gap-8 items-start justify-center w-full">
    {[...Array(6)].map((_, index) => (
          <div
          key={index}
          className="flex flex-col gap-6 w-full p-3 sm:w-[48%] lg:w-[30%]  overflow-hidden group relative "
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
          <div className="flex flex-col gap-4">
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


</div>

    </>
  );
};

export default News;
