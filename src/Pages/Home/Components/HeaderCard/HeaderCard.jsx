import Car from "assets/images/IconsHeader/Car";
import "./HeaderCard.css";
import Hotel from "assets/images/IconsHeader/Hotel";
import Fork from "assets/images/IconsHeader/Fork";
import Tree from "assets/images/IconsHeader/Tree";
import Ticket from "assets/images/IconsHeader/Ticket";
import Victor from "assets/Vector.svg";
const HeaderCard = () => {

  return (
    <div className=" w-[80%]  relative mx-auto">
      {/* Background Images */}
      <div className="pt-20">
<img className="relative w-[100%] xl:absolute xl:top-[200px]  xl:end-10 xl:w-[75%]"  src={Victor} alt="" />
      {/* Content Section */}
      <div className=" w-full xl:w-[40%] py-10">
      <div className="flex flex-col gap-8  items-start flex-nowrap">
        <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
          <span className=" text-[16px] font-normal leading-[29px] text-[#0e4a79]">
            من نحن
          </span>
          <span className="flex    text-[30px] font-bold leading-[54.6px] text-[#0e4a79] tracking-[0.6px] ">
            رحلة التميز في توفير الكوادر البشرية لتلبية احتياجات الأفراد
            والأعمال في المملكة
          </span>
        </div>
        <span className="flex  text-[16px] font-normal leading-[29.12px] text-[#667680] tracking-[0.32px]">
          منذ تأسيسها في عام 2015، أصبحت شركة إنجاز للاستقدام إحدى أبرز شركات
          مجموعة إنجاز، التي تفخر بتقديم حلول شاملة ومتكاملة في مجال استقدام
          العمالة المنزلية والمهنية من مختلف الجنسيات. تعمل إنجاز برؤية واضحة
          تواكب رؤية المملكة 2030، حيث تلتزم بتقديم خدمات عالية الجودة تسهم في
          بناء حياة مستدامة ومتميزة للمواطنين والمقيمين في جميع أنحاء المملكة.
        </span>
      </div>
      <button className="flex w-[159px] h-[49px] pt-[12px] pr-[49px] pb-[12px] pl-[49px] gap-[8px] justify-center items-center flex-nowrap rounded-[999px] border-solid border border-[#0e4a79] pointer mt-5">
        <span className="flex w-[61px] h-[25px] justify-center items-start shrink-0 basis-auto  text-[14px] font-normal leading-[25px] text-[#0e4a79] relative text-center whitespace-nowrap z-[9]">
          إقرأ المزيد
        </span>
      </button>
      </div>

      </div>
    </div>
  );
};

export default HeaderCard;
