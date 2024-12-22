import { Link } from "react-router-dom";
import "./HeaderCard.css";
import Victor from "assets/Vector.svg";
const HeaderCard = () => {

  return (
    <div className=" w-[90%]  relative mx-auto scale-95 "
        // style={
    //   {
    //     backgroundImage:`url(${Victor})`,
    //     backgroundPosition:"-100px,0",
    //     backgroundSize:"80%",
    //     backgroundRepeat:"no-repeat"
    //   }
    // }
    >
      {/* Background Images */}
      <div className="pt-20">
<img className="relative w-[100%] xl:absolute xl:bottom-[10%]  xl:-end-1 xl:w-[75%]"  src={Victor} alt="" />
      {/* Content Section */}
      <div className=" w-full xl:w-[50%] py-10">
      <div className="flex flex-col gap-8  items-start flex-nowrap">
        <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
          <span className=" text-[16px] font-normal leading-[29px] text-[#0e4a79] text_small_Bukra">
            من نحن
          </span>
          <span className="flex  text-[25px] text_bold_Bukra  leading-[54.6px] text-[#0e4a79] w-[70%]  ">
            رحلة التميز في توفير الكوادر البشرية لتلبية احتياجات الأفراد
            والأعمال في المملكة
          </span>
        </div>
        <span className="flex  font-normal text-sm leading-[29px] text_small_Bukra text-[#667680] w-[79%]">
          منذ تأسيسها في عام 2015، أصبحت شركة إنجاز للاستقدام إحدى أبرز شركات
          مجموعة إنجاز، التي تفخر بتقديم حلول شاملة ومتكاملة في مجال استقدام
          العمالة المنزلية والمهنية من مختلف الجنسيات. تعمل إنجاز برؤية واضحة
          تواكب رؤية المملكة 2030، حيث تلتزم بتقديم خدمات عالية الجودة تسهم في
          بناء حياة مستدامة ومتميزة للمواطنين والمقيمين في جميع أنحاء المملكة.
        </span>
      </div>
      <Link to={"/aboutus"} className="flex w-[159px] h-[49px] pt-[12px] pr-[49px] pb-[12px] pl-[49px] gap-[8px] justify-center items-center flex-nowrap rounded-[999px] border-solid border border-[#0e4a79] hover:bg-[#0e4a79] hover:text-white hover:border-white pointer mt-16">
        <span  className="flex w-[61px] h-[25px] justify-center items-start shrink-0 basis-auto  text-[14px] font-normal leading-[25px]  relative text-center whitespace-nowrap z-[9] ">
          إقرأ المزيد
        </span>
      </Link>

      </div>

      </div>
    </div>
  );
};

export default HeaderCard;
