import { useState } from "react";
import "./CardsCollection.css"

const CardsCollections = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Steps data including text and placeholder image
  const steps = [
    { id: 1, text: "استقبال العميل والترحيب به حضورياً او الاونلاين.", image: "https://placehold.co/588x693" },
    { id: 2, text: "تحديد جنسية العاملة وعدد أفراد الأسرة.", image: "https://placehold.co/588x693" },
    { id: 3, text: "استخراج التاشيرة عبر منصة مساند.", image: "https://placehold.co/588x693" },
    { id: 4, text: "استخراج السيرة الذاتية المناسبة.", image: "https://placehold.co/588x693" },
    { id: 5, text: "رفع التعاقد عبر منصة مساند.", image: "https://placehold.co/588x693" },
    { id: 6, text: "الدفع.", image: "https://placehold.co/588x693" },
  ];

  // Update the active step
  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };

  return (
    <div className="main-container h-auto bg-[#fbfbfb] relative mx-auto mt-16 py-16 w-full">
      <div className="w-[80%] mx-auto">

      {/* Title Section */}
      <div className="flex flex-col lg:flex-row  gap-6 lg:gap-[204px] justify-center items-center relative mx-auto py-8 px-4 w-full ">
  {/* Left Section */}
  <div className="flex w-full lg:w-[493px] flex-col gap-2 lg:gap-[4px] items-start flex-nowrap relative z-1">
    <span className="text-[16px] font-normal leading-[29px] text-[#0e4a79] tracking-[0.32px] text-right">
      رحلة العميل
    </span>
    <span className="text-center lg:text-left text-[24px] lg:text-[30px] font-bold leading-[54.6px] text-[#0e4a79] tracking-[0.6px]">
      من طلب الخدمة إلى وصول العمالة
    </span>
  </div>

  {/* Right Section */}
  <span className="text-[16px] font-normal leading-[29.12px] text-[#667680] tracking-[0.32px] text-right w-full lg:w-[714px]">
    في إنجاز، نضمن لك تجربة سلسة تبدأ من تقديم الطلب وحتى وصول العمالة المؤهلة إلى
    باب منزلك. مع إجراءات ميسرة، تدريب احترافي
  </span>
</div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-8 mx-auto">
                {/* Right Image Section */}
                <div className="relative w-full lg:w-1/2 h-auto flex justify-center">
  {/* Image with shadow as a border-like box */}
  <div
    className="absolute  rounded-[24px] w-full h-full max-w-[693px] max-h-[588px] shadow-box"
  ></div>

  <img
    src={steps.find((step) => step.id === activeStep)?.image}
    alt={`Step ${activeStep}`}
    className="relative rounded-[24px] w-full max-w-[693px] max-h-[588px] object-cover"
  />

  {/* Overlay with full gradient */}
  <div
    className="absolute inset-0 rounded-[24px] flex items-end p-4"
    style={{
      background: "linear-gradient(to bottom, #149C7533 20%, #10637C 100%)",
    }}
  >
    <p className="text-white text-[16px] font-medium leading-[24px] text-right">
    {steps.find((step) => step.id === activeStep)?.text || ""}
    </p>
  </div>
</div>

        
        
        {/* Left Buttons Section */}
        <div className="flex flex-col gap-4 items-start w-full lg:w-1/2">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center gap-4">
                            <div
                className={`w-[64px] h-[64px] flex items-center justify-center rounded-[16px] ${
                  activeStep === step.id ? "bg-[#0e4a79] text-white" : "bg-[#e7edf2] text-[#0e4a79]"
                }`}
              >
                <span className="text-[24px] font-bold">{step.id}</span>
              </div>
              <button
                className={`flex-1 px-4 py-3 rounded-[16px] w-full md:w-[501px] text-start ${
                  activeStep === step.id ? "bg-[#0e4a79] text-white" : "bg-[#e7edf2] text-[#0e4a79]"
                } font-medium`}
                onClick={() => handleStepClick(step.id)}
              >
                {step.text}
              </button>

            </div>
          ))}
        </div>


      </div>

      </div>
    </div>
  );
}

export default CardsCollections;
