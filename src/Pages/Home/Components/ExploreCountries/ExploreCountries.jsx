import "./Explore.css"

const ExploreCountries = () => {
  return (
    <div className=" w-full h-auto bg-[#fbfbfb] flex flex-col items-center py-8 px-4">
      {/* Title Section */}
      <div className="text-center mb-8">
        <span className="text-[30px] font-bold leading-[45.5px] text-[#0e4a79] block">
          شــــركـــاء الــنــجـاح
        </span>
      </div>

      {/* Partners Grid */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1264px]">
        {/* Partner Card */}
        {[
          "https://placehold.co/174x77",
          "https://placehold.co/174x77",
          "https://placehold.co/174x77",
          "https://placehold.co/174x77",
          "https://placehold.co/174x77",
          "https://placehold.co/174x77",
          "https://placehold.co/174x77",
        ].map((image, index) => (
<div
  key={index}
  className="card w-[214px] flex flex-col items-center p-6 gap-2"
>
  <div
    className="w-[174px] h-[77px] bg-cover bg-center"
    style={{
      backgroundImage: `url(${image})`,
    }}
  ></div>
</div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCountries;
