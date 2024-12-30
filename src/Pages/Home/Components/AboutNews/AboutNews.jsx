import { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutNews = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          } else {
            entry.target.classList.remove("animate-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // News data array
  const newsData = [
    {
      title: "افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل",
      description:
        "في إطار خطتها التوسعية، افتتحت شركة إنجاز فرعها الجديد في المنطقة الشرقية لتقديم خدماتها المتميزة بشكل أوسع للعملاء في المملكة.",
      date: "24 نوفمبر 2023",
      category: "توسع",
      image:"https://s3-alpha-sig.figma.com/img/3d98/2391/5e2ef5f9d7297897ebe55176aac90e5a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GwvGYV1OQoxiAmfiNEpmhEqu8EDawrWp1uoGWoYAdY8CCz9xtuCN3j9T6YPWzln0SsfbBB9S712HUP6huQ6hAP3LFrM202xtHH3jPw00YmhEiDIhAJAJutxyUfLFhlMLmqhOfBkSmWz0lvttEsLTFLlBeD6x9IVWXUG1V5Y8E3RL9HyfQ8sb4lpA2KgjG4ABgPy4w5YZkOXtwDspxeF9jlE471U9By5RH9fkm5vSXm-isEQm4jWr5vuwL0o6MPoDvVWEWXXdEJfQbYhtNYBi-c6c5lkbojA40mP3P1yvOynLpHK1ue96gyweqiowcIS7pW7Ok2CQRTkiWNbW0xLGWw__"
    },
    {
      title:
        "شركة إنجاز تحصل على شهادة ISO 9001:2015 لتأكيد التزامها بمعايير الجودة العالمية",
      description:
        "حصلت شركة إنجاز على شهادة ISO 9001:2015 في إدارة الجودة، تأكيدًا على التزامها بتطبيق أفضل الممارسات لتلبية توقعات العملاء وضمان أعلى مستويات الجودة.",
      date: "10 ديسمبر 2023",
      category: "خدمات جديدة",
      image:"https://s3-alpha-sig.figma.com/img/4c95/2139/892dbb2f32ffd0c6cbf0542d41106d0b?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WN7mfUqcI1tSr2COvQOObLbeXaTg5Fm6v5BhZ1-EXCkXItZ7YZaW4~NK3v5rylYhY9EH-q-MhqQZIkCfwLtbSXOpaD8vVJedletQiIQDGHOb15x1MbaEsZAcdIXjs0enuFTFhX7v9edAgdpJru4CSuY2lsR3uW8e1-EXg1b2gH0LaVtWJRgtswAigue6qaX2RWU7WzUuoqBXAQ7lHiChHERKnnkkN0xZWVOF1su8IoxgtmNIJAFrtfLuqQPSwqP3LHz~HjSEGt4IR7x1sHgCdXc-9UIq5D4AiLYBiEBj7AA36SH6T5Aqs6A1BISlYf7XPpM8UTb9E1aiI598t4b~7A__"
    },
    {
      title: "إطلاق خدمة تدريب وتأهيل العمالة لضمان أعلى مستويات الكفاءة قبل الاستقدام",
      description:
        "أعلنت شركة إنجاز عن إطلاق خدمة جديدة تركز على تدريب العمالة وتأهيلها وفق أعلى المعايير العالمية قبل وصولها إلى العملاء، بهدف تعزيز الكفاءة والاحترافية.",
      date: "1 يناير 2024",
      category: "شهادة",
      image:"https://s3-alpha-sig.figma.com/img/c90f/b6b4/a3306158637335ea92a42ffe8bef973a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a-ub73lHjA-JLYMgJrkeu~FoX3O89pINc8frTO-tFgSnPQuCdskdcoQMmKzaYO2amSweKN0IqGZqzHqX4TWSHplnDXnEtwu0PyQi28w0AiwA-bp9vBxQhHf5kcd6bAzGqrcWsKEtBbu5D~XTywM9c6-iVAC~G0KVDXzFhv-zF4xwWR7jrIuwXgkz7eNVUWiVomzaDYBFMM5PjpHX6f12cWdgukVq~EhMgaNLtdjA2pdgHtE3zEifbDRunu~EKuWRugoi08mU-tqijy-F8rsJvQODiqFfRzULtV3TgtKCCMDggMWq4ZlUnvQ3yTew4z8ttAQ9tv4l3wo2XKjvxR80nw__"
    },
  ];

  return (
    <>
      <div id="news"></div>
      <div className="main-container bg-[#fbfbfb] relative mx-auto py-16">
        <div className="w-[88%] scale-95 mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-8 lg:gap-0 mt-8">
            <div className="flex flex-col items-start lg:w-1/2 animate-section opacity-0 transition-opacity duration-1000">
              <span className="text-[16px] text_small_Bukra font-normal leading-[29px] text-[#0e4a79] text-right">
                أخبارنا
              </span>
              <span className="text-[27px] text_bold_Bukra md:w-[70%] leading-[54.6px] text-[#0e4a79] text-right">
                اكتشف آخر أخبارنا وتحديثاتنا عن خدماتنا وإنجازاتنا
              </span>
            </div>
            <span className="text-[16px] text_small_Bukra font-normal leading-[29.12px] text-[#667680] text-right lg:w-[45%] animate-section opacity-0 transition-opacity duration-1000">
              ابقَ على اطلاع بكل جديد عن شركة إنجاز، من الإعلانات المهمة إلى إطلاق
              الخدمات والتطورات التي تؤكد التزامنا بتقديم الأفضل.
            </span>
          </div>

          {/* News Section */}
          <div className="flex flex-wrap md:flex-nowrap gap-6 justify-between mt-8">
            {/* News Cards */}
            {newsData.map((news, index) => (
              <Link
                to={"/stats"}
                key={index}
                className="flex flex-col sm:w-1/3 py-3 overflow-hidden group relative animate-section opacity-0 transition-opacity duration-1000"
              >
                            {/* Hover Effect */}
            <div className="absolute inset-0 border-b-2 border-transparent">
              <div className="absolute top-[100%] -start-[100%] w-full h-1 bg-gradient-to-r from-[#0e4a79] via-[#0e4a79] to-[#0e4a79] group-hover:-translate-x-full transition-all duration-500"></div>
            </div>
                {/* News Image */}
                <div className="rounded-[16px] overflow-hidden">
                  <div
                    className="h-[303px] bg-cover bg-center transition-transform duration-500 group-hover:scale-125"
                    style={{ backgroundImage: `url(${news.image})` }}
                  ></div>
                </div>
                {/* Card Content */}
                <div className="p-4 flex flex-col gap-4">
                  <span className="text-[18px] font-semibold group-hover:text-[#667680] transition-transform duration-500 tracking-wide leading-[35px] text-[#1d1d1d] line-clamp-2">
                    {news.title}
                  </span>
                  <span className="text-[15px] font-normal leading-[28px] text-[#667680] line-clamp-3">
                    {news.description}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] text_small_Bukra font-semibold text-[#667680]">
                      {news.date}
                    </span>
                    <span className="text-[16px] font-medium text-[#e7edf2]">•</span>
                    <span className="text-[16px] font-semibold text-[#0e4a79]">
                      {news.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All News Button */}
          <div className="flex justify-center mt-8 animate-section opacity-0 transition-opacity duration-1000">
            <Link
              to={"/news"}
              className="px-12 py-3 text_small_Bukra border border-[#0e4a79] text-[#0e4a79] hover:bg-[#0e4a79] hover:text-white hover:scale-90 rounded-full text-[14px] font-normal transition-all duration-500"
            >
              تصفح جميع الأخبار
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutNews;
