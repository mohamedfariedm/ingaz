import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BannerHome.css";
import Victor from "assets/vectormap.svg";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const BannerHome = () => {
  const countries = [
    {
      title: "باكستان",
      description: "سرعة وصول مع عمالة مدربة وكفاءات عالية مختارة بعناية",
      topIcon: "https://s3-alpha-sig.figma.com/img/8d14/17d8/380cb3ab9935985e38e0e9be8bdd135c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YpDz87auno8UxDczi2fTdQ0cpOyMY1PhLOZJiTqi9pXjcIvybT9~DjKoPO7-Wt3dkW9dVio4j8d5e-4ZG7B8RHLlD1DNQm8-ect4LokvWyXwVVqmEX0yZ5xxCHmfT0gwcYUJc3idQvpAZSl3u8f~QlPTCzLB~-JzRONpf3bdhWWeRVzRaa1or3bG5hlM2fUo-DZleId7~1dRVT7Nvr7o51bZLmIhD3XvR62sZmHTNsEIpQNvAuxfN3dOybplEjWg6ulk-4TTNVIPH4IxHjlmYS8sbT0SQE5u~W9~mYzCvfDZPVERcms~z~~5bgkTk0TO-FHwjMOvAyh2KzcsTjO56w__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title:"الهند",
      description: "خدمات مميزة تلبي جميع احتياجاتكم بسرعة وأمان",
      topIcon: "https://s3-alpha-sig.figma.com/img/51a2/3cda/ef814bc043b26dc4ae5b93a987956d96?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TGO~b6oRZD16U71Z7L5itnM58jKnbu8hX42LXKhIxBifI9ef9LuTa6mZnI-~ztqQ82P20MZ2sry-AWhpsv7nRAXOfyXD1avGAs052abWER6tAKDxI6JyeTUWL6k8YZHt0BnLsfYQtpaXej8yAKYEsgzuGdWfFnlQn1lWP1qIBa82tT~~V4InxTm8tR56WEqy8I5xDU~JylELOw92APa37r6cBl7D6quRYJLmWEsQwNDGPdh-YTgZvl9p5WsbXlsleXzlUt2vYx-eRhQuXK1K8~sdIeV5ab8EQE-dZhq7FU9Pw8rhzaFlCJf~uxDFrp2uQ5~LFY1PSVLmkoIzoAKubg__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: "بنجلادش",
      description: "استقدام الكفاءات الأعلى تأهيلًا لأعمالكم",
      topIcon: "https://s3-alpha-sig.figma.com/img/3c29/3502/6a81c309a7ef60ae900495d5ccabfd58?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OS8wATYVPKXAS0mEXJQdHszOp3HsorieueT-s4Y2zBgeqqPgIp~NwPUFv77HIFEmUweoONfXyYlCs53nVxKkmDt5zpMIV1yEg6GMw0cCrscN3O~vUVkv08iEEtyyMx2xr8IxmjeKmxPJI-ZLDCnpxQhse3jK3RoQ9tfBG~srXBiN2nDwJ2BN9UNAw-flWBrRqOCCYDMwcEHybHiu1yUU6QZYh0CZc2Rc4TTc3tzvfF9HQt4OaUipciYJHk7eU0gRnFM-OxoQtBu9uScDD~d1Fp2dW7-7CyPDJmzezTM0ddyQjm43RvS-73IMU2iZO4s5-C~UVVGnywpTI2QNoydWDw__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: "غانا",
      description: "خدماتنا تغطي جميع متطلباتكم بأعلى جودة",
      topIcon: "https://s3-alpha-sig.figma.com/img/5f80/4bb4/7593e6e3cec1c953ebab8d4c10d703db?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iFCNhwoiRDSLUA~0xckrczWs7KxOhWjs2CKfQEAaa8tn7zYmmD9EFk~20iWIljWFfsSHL61SwLlSxgDaOTxUy0lDdXlquNG7-MNfV9DOaDLHJLDOmgHy-885G3I9Q3G4Kr8FvX2wy9t1-W9uQonPd0t2odfqWt4dHdpmRxv5yLbycFO7IAunUi-6tgugGhwwvamw7UqtWqrHdqpV-AMoqhej6~6uUgZ4xc9U2PeNKRuyv2G4ShEnbBfTOEeIMtCH2K8jC44hIwK8nx4kmjpOW8-AW385aN8uBJXddt1DkodpA52YZhUZjqxcmVYrq6sKmo3oVqobcAqPScECxBRx2A__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: "تنزانيا",
      description: "دقة في التوصيل وكفاءات مدربة لتلبية احتياجاتكم",
      topIcon: "https://s3-alpha-sig.figma.com/img/1ec7/adfd/d2115a695341ae0ac2c430850e5bf072?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KBF33h~2~L8qWUeqgz3sqIcC2drIQvOtHaB08jmvzeSKWhTeIf2qfJHbQ8ZHxIGy1gPtAj84fhECtgOwoR3yFVjSUoz9iM1YDn0WA~r33VZmhw1amDMJKVgBCdKi-E7PcNN1ZKDlrNGhBxOQ9CAotjXFZFCagYEeu1DVtTuA4vBXqcAXlRH8pOqgWO89XKLaOzlq39SvvNtpRxmqNulUI-XlJ~p58b2pWvhbDpAgNb7krU~cN-33y-VmTF44yL3Q2~lmF8xYBj8Wk~~ff7BuByULEFrE~lY0XoJSa0cTr1qAsyG~B0k2qEUptbSPFyMEhbTtiDc6cWJHPFzlSg2Azg__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: " أوغندا",
      description: "تجربة مميزة لتوفير العمالة الأكثر كفاءة",
      topIcon: "https://s3-alpha-sig.figma.com/img/7e43/ae11/f4ca286a165b6483be7d1a82f4173374?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BN5lOujVyABkZqttNcuDZOUrRGqiieIRkrWYBl3Rg1puxLyVivZuht7hBEeXndYw7ATeyx6hF7XOPFthrUIDzAxHj28sxpqzvHzvZQKjT8xu8FZpurKFdaYqlHzspNPrifqViqSsVARqzXNHdCtTwDpomI0yOpYE3JzOZwz7I8xhg3n4ypg-lFnbbccJFqxyq1qnUV688p6KMCxdP1XrUiAEhVAy4zffO8QlUSPWay7ENceSUh42no85-Xgh5W994D2HIfYa5R7WlNm7HeR-2c-udFmovbfARvPsb4~uWX9mkFgBrPIIJXVuY6HFZxXRc7XEUkZ17wYWm6uk5~qyqw__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: "إثيوبيا",
      description: "خدمات سريعة وموثوقة تناسب احتياجات الجميع",
      topIcon: "https://s3-alpha-sig.figma.com/img/2d86/dac2/4d67da8aa69b9665089ea3a261c1c443?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NKeL5vhkymFRMhK1dV4Ab5uyDKVkmL60gq-zlhHzgfJWcriDY8EmcWDHheXX78jwZ5~MSIZRfhimIZDcTw7DvE812GKsW~h33aj~nMk0jrX3Crb~xtuY2fBVhlFGVaGUNkVEB9LKa82Zakipyap-uX9YFKuNFp0Xk3I~d2OBlvs-0UmDUk56CAJVeeDqRLIZG8sYZduvgAzYy2kaC4-K4q0vOivGS3byuE2vTh0l-1Xg82Sqh54TH~sSyhyQb~RHEwGHIsdjczTo3SiQ~MO49RaKfxGpBUq7IGVxWadGkithme~VLMGDl2upfIP2G7z0uzhF4vyp~B1jShZbSd6P8Q__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: "كينيا",
      description: "كفاءات مدربة لتلبية جميع متطلباتكم",
      topIcon: "https://s3-alpha-sig.figma.com/img/129c/678f/b14bdf3e7abcd0ead2ddd47573fce0bb?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gjnKELS9LzP-02JcwyOMSnWy1WmHKOv6d3PUQdu5It8W~5ueerQcq5tRol4ylpas97Olx3hvzwXevALaZQVib5fQ6ymsH4Ix407C~nroCd9nX38g6KATSxnaLFiZh3oppt0xgFxFiKxAzlA~qkI0PE~02fArF-w2niNjFbVhwdtwuVjKnndRjQj-itPy4tUJDw1Xjn-8IAkhyxIsulrazw-zLx2uGK6yMlAKAbIg-C4xEM0em0e57fZ4-e01rCeI8tWnM1YBTErmr2LjsmnexF~Q~Iw~J0oKkFUQPPQttbNf~801j~004ssrwyHGgmrrp3mYEtEup68zercBosHQjw__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: "سيريلانكا",
      description: "اختيار الكفاءات الأنسب لنجاح أعمالكم",
      topIcon: "https://s3-alpha-sig.figma.com/img/175f/09aa/bd43318c6afeff5e7062c3bf4ab53e61?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOxeYCWdTBTENQiZgmbf8KIctr3wLCez0L3NFAG0qfck4UXgVYVSigTclgZtvdlqR63REonoZj-K2rGqXF7TY0gVURsnOUAJJU5VH~AWP~s4ZPC8wabvSPdKPTCn-2IalhE844X2YPEqfuwz81td95NEgl9yJbxmEOL2cpvnx-gRJEA2C2qt43xSrrDOx3VyAN2JPjvxeFYF70dlQ18Sk92Erae~TOqM8~nSk5MKTcBdKs-wKgbw7OLfLFG79NSFA1FEmFZeQlj7yltn-zmg6JUhvSuj3wtjRRh3OOZeQRD9kasdIUzTFTEFN~Cnclls1-vbwyakbvE5djqwmq-KOg__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: "الفلبين",
      description: "حلول استقدام شاملة بأعلى معايير الجودة",
      topIcon: "https://s3-alpha-sig.figma.com/img/9440/39c0/86cfe0f1e4fe9629d720a8cf10137f12?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6qoFKoOTSA9MBgb~IuTCMNLy2ps97Qa-GyzAr9HqG5A9zaLwcRjQiik~n7BfOHVMPG1Vs5cz-s95JseM3YePiKZxXk1afgGdYiVLJpYMs5Sg0ImJhSyPKkdHweKCjQ1YuwA1v-50uRkuhimVpu8y3kKqRblfBJUY8qTUckz1iNWNZ6yUKxhH3zTMm6ImeSzYsl97J7FjD2UQL3okTfkco2c0WOGC4r5PS8G7Ip7377v9Ia1XmuwaxcCSAXlmKnM0CrJOQoFLUSjqHplyI9kU8j4-nXJypjlfG0avm6aMz3-vSOUN~3PMZsGWFK-tmkMmHZySOy3pHQke6bNCIWNAg__",
      backgroundImage: "https://placehold.co/335x216",
    },
  ];

  return (
    <>
    <div id="begin"></div>
    <div className="main-container w-full bg-[#fbfbfb] py-20 relative mx-auto my-0">
      <div className="flex flex-col items-center px-4">
        <h1 className="text-[30px] font-bold leading-[54.6px] text-[#0e4a79] text-center pb-16">
          مناطق الاستقدام و أرقام المترجمين
        </h1>
        <div className="relative w-full mt-10 z-2">
          <div className="flex flex-wrap gap-y-11 gap-x-4 justify-center">
            {countries.map((country, index) => (
              <div
                key={index}
                className="relative w-full h-[216px] sm:w-[335px] border rounded-[16px] hover:bg-white flex flex-col items-center justify-center bg-[linear-gradient(45deg,transparent_25%,rgba(0,128,0,.3)_30%,rgba(0,128,0,.3)_30%,transparent_25%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] hover:shadow-lg transition-[background-position_2s_ease-in-out] hover:bg-[position:100%_100%,100%_0] hover:duration-[1000ms]"
              >
                {/* Top Icon */}
                <div
                  className="w-[82px] h-[48px] bg-cover bg-no-repeat absolute rounded-[12px] mt-4"
                  style={{
                    backgroundImage: `url(${country.topIcon})`,
                    top: "-25%",
                  }}
                />

                {/* Content */}
                <div className="flex flex-col items-center gap-2 mt-4 px-4">
                  <span className="text-[20px] font-bold text-[#000] text-center">
                    {country.title}
                  </span>
                  <span className="text-[12px] text-[#667680] text-center">
                    {country.description}
                  </span>
                </div>

                {/* Button */}
                <button className="mt-4 w-[186px] h-[48px] border border-[#0e4a79] text-[#0e4a79] rounded-full text-[16px] font-normal flex items-center justify-center relative overflow-hidden group">
                  <span className="flex items-center absolute translate-x-[100px] transition-transform duration-500 ease-in-out group-hover:translate-x-[35px]">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span className="relative z-10">تواصل</span>
                </button>
              </div>
            ))}
          </div>
          <div
            style={{ backgroundImage: `url(${Victor})` }}
            className="w-full h-[764px] bg-cover bg-no-repeat absolute top-0 left-0 -z-10"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default BannerHome;
