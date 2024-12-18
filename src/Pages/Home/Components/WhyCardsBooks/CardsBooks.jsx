import "./CardsBooks.css";
import Victor1 from "assets/image1.svg";
import Victor2 from "assets/image2.svg";
import Victor3 from "assets/image3.svg";
import Victor4 from "assets/image4.svg";
import Victor5 from "assets/image5.svg";

const CardsBooks = () => {
  return (
    <div className="main-container w-full h-auto bg-[#fff] relative mx-auto my-0">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-4 w-full max-w-screen-lg mx-auto mt-[95.813px]">
        <span className=" text-[30px] font-bold leading-[54.6px] text-[#0e4a79] tracking-[0.6px] text-center">
          إنــجاز فــي أرقــام
        </span>
        <span className="text-[16px] font-normal leading-[29.12px] text-[#667680] tracking-[0.32px] text-center max-w-4xl mx-auto">
          منذ تأسيسها في عام 2015، أصبحت شركة إنجاز للاستقدام إحدى أبرز شركات مجموعة إنجاز،
          التي تفخر بتقديم حلول شاملة ومتكاملة في مجال استقدام العمالة المنزلية والمهنية
          من مختلف الجنسيات.
        </span>
      </div>

      {/* Stats Cards Section */}
      <div className="flex flex-wrap gap-4 justify-center mt-16">
        {/* Card 1 */}
        <div className="w-[250px] h-[354px]
        bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20
          relative overflow-hidden rounded-[24px]">
          <div className="flex flex-col items-start gap-4 mt-6 ms-3 ">
            <span className="text-[40px] font-semibold text-[#fff]">1,120</span>
            <span className="text-[24px] font-semibold text-[#fff]">عقد مساند</span>
          </div>
          <img src={Victor1}
           alt="" />
        </div>

        {/* Card 2 */}
        <div className="w-[250px] h-[354px]
        bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20
          relative overflow-hidden rounded-[24px]">
                      <div className="flex flex-col items-start gap-4 mt-6 ms-3 ">
            <span className="text-[40px] font-semibold text-[#fff]">50,000</span>
            <span className="text-[24px] font-semibold text-[#fff]">وكلاء</span>
          </div>
          <img src={Victor2}
           alt="" />
        </div>

        {/* Card 3 */}
        <div className="w-[250px] h-[354px]
        bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20
          relative overflow-hidden rounded-[24px]">
                      <div className="flex flex-col items-start gap-4 mt-6 ms-3 ">
            <span className="text-[40px] font-semibold text-[#fff]">1,120</span>
            <span className="text-[24px] font-semibold text-[#fff]">تقييم عبر مساند</span>
          </div>
          <img src={Victor3}
           alt="" />
        </div>

        {/* Card 4 */}
        <div className="w-[250px] h-[354px]
        bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20
          relative overflow-hidden rounded-[24px]">          <div className="flex flex-col items-start gap-4 mt-6 ms-3 ">
            <span className="text-[40px] font-semibold text-[#fff]">50,000</span>
            <span className="text-[24px] font-semibold text-[#fff]">خدمة مناطق إدارية</span>
          </div>
          <img src={Victor4}
           alt="" />
        </div>

        {/* Card 5 */}
        <div className="w-[250px] h-[354px]
        bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20
          relative overflow-hidden rounded-[24px]">
                      <div className="flex flex-col items-start gap-4 mt-6 ms-3 ">
            <span className="text-[40px] font-semibold text-[#fff]">50,000</span>
            <span className="text-[24px] font-semibold text-[#fff]">خدمة عميل</span>
          </div>
          <img src={Victor5}
           alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardsBooks;
