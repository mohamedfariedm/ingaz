import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import SingleStats from "./Components/SingleStats/SingleStats";
import BreadCrumb from "./Components/BreadCrumb/BreadCrumb";

const Stats = () => {
  return (
    <>
       <HelmetInfo titlePage={"انجاز فى ارقام"} />
<div className="mt-[85px]"/>
       <div className="main-container bg-[#fff] mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-8 max-w-screen-lg mx-auto">
        {/* Breadcrumb */}
      <BreadCrumb/>

        {/* Title Section */}
        <div className="text-center flex flex-col gap-6">
          <span className="text-lg font-medium text-[#0e4a79]">شهادة</span>
          <h1
                    style={{lineHeight:"87.36px"}}

          className="text-4xl lg:text-5xl font-bold text-[#0e4a79] leading-snug">
            رحلة التميز في توفير الكوادر البشرية لتلبية احتياجات الأفراد والأعمال في المملكة
          </h1>
          <p
          style={{lineHeight:"32.76px"}}
          className="text-lg lg:text-xl  text-[#667680] leading-relaxed">
            منذ تأسيسها في عام 2015، أصبحت شركة إنجاز للاستقدام إحدى أبرز شركات مجموعة إنجاز، التي تفخر بتقديم حلول
            شاملة ومتكاملة في مجال استقدام العمالة المنزلية والمهنية من مختلف الجنسيات. تعمل إنجاز برؤية واضحة تواكب
            رؤية المملكة 2030، حيث تلتزم بتقديم خدمات عالية الجودة تسهم في بناء حياة مستدامة ومتميزة للمواطنين
            والمقيمين في جميع أنحاء المملكة.
          </p>
        </div>
      </div>

      <SingleStats/>

    </div>
    </>
  );
};

export default Stats;
