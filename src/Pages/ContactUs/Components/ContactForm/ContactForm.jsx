import Vector from "assets/contactus.svg"
import Vector1 from "assets/Icon.svg"
import Vector2 from "assets/mail-02.svg"
const ContactForm = () => {

  return (
    <div className="flex flex-col lg:flex-row  gap-8 items-center bg-[#fff] overflow-hidden mx-auto w-[90%] md:[80%] px-4 py-8">

            {/* Form Section */}
            <div className="w-full max-w-screen-md bg-[#fbfbfb] p-8 rounded-lg shadow-md">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#667680] mb-2">
                الاسم الأول
              </label>
              <input
                type="text"
                placeholder="الاسم الأول"
                className="w-full px-4 py-2 bg-[#f4f4f4] rounded-full focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#667680] mb-2">
                الاسم الأخير
              </label>
              <input
                type="text"
                placeholder="الاسم الأخير"
                className="w-full px-4 py-2 bg-[#f4f4f4] rounded-full focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#667680] mb-2">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full px-4 py-2 bg-[#f4f4f4] rounded-full focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#667680] mb-2">
              رقم الهاتف
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-2 bg-[#f4f4f4] rounded-full focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#667680] mb-2">
              الرسالة
            </label>
            <textarea
              placeholder="اترك لنا رسالة..."
              rows={4}
              className="w-full px-4 py-2 bg-[#f4f4f4] rounded-lg focus:outline-none"
            />
          </div>

          <button className="w-full bg-[#0e4a79] text-white py-2 rounded-full text-center font-medium">
            إرسال
          </button>
        </form>
      </div>
      {/* Upper Section */}
      <div className="flex flex-col  gap-8 items-center justify-between w-full max-w-screen-xl">
                {/* Placeholder Image */}
                <div className="w-full lg:w-[591px] h-[250px] bg-cover bg-center rounded-md">
          <img
            src={Vector}
            alt="Placeholder"
            className="w-[80%] h-full object-contain rounded-md"
          />
        </div>
        <div className="flex flex-col lg:flex-row">

                  {/* Phone Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 bg-[#0e4a79] rounded-full flex items-center justify-center">
            <img
              src={Vector1}
              alt="Phone Icon"
              className="w-6 h-6"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold text-[#1d1d1d]">
              الاتصال الهاتفي
            </span>
            <span className="text-sm text-[#94969c] leading-6">
              ساعات العمل: من الأحد إلى الخميس، من 9 صباحًا حتى 5 مساءً.
            </span>
          </div>
        </div>
        
        {/* Email Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 bg-[#0e4a79] rounded-full flex items-center justify-center">
            <img
              src={Vector2}
              alt="Email Icon"
              className="w-6 h-6"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold text-[#1d1d1d]">
              البريد الإلكتروني
            </span>
            <span className="text-sm text-[#94969c] leading-6">
              الرد خلال 24 ساعة. لا تتردد في مراسلتنا لمزيد من المعلومات أو الدعم.
            </span>
          </div>
        </div>





        </div>
      </div>


    </div>
  );
};

export default ContactForm;
