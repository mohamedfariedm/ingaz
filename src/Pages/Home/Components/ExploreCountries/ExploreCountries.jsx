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
          "https://s3-alpha-sig.figma.com/img/5f86/0cdf/d7abede6d5a7e67a8cbbc9f6602154f7?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A-JJEu3U1FpQpBJG276jXXy0om9XpVjZb7xUJFuVLUHztnf9GBGpBVsj6DlU4Sa0Gxzc4MFsTN-wpdGh2XbeX6-hczIYS0MAICJim2rkXvN2DJLGpyPejVQVEdUq9J1bVL4Jw2QVuXGUCE5wbQ~NQne2KMl7Uh-7LPlL5TyyxdSeh8h1bUG6as14Ym80g~izToTlR~cWRiJZpzRbTzd6e5PmbI7E9br1RJpeykbltEBckRWMCiWZrOBbKCI3eoX~Oz0uirNGcL5VdK85TcUro-C~-tcvepXmjYzH2CIpE708RxfpZZfRUUNJi7VvLN1bNewqH1UH5d5bwnSGUTJoHQ__",
          "https://s3-alpha-sig.figma.com/img/017c/cae8/906cd77f85c99ea259693719851db601?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P6YYfrXppTCXuIPR24Q6gIFs22XIwPm0MONWeP5b~pK69mvyVqzpllNN32tfxmAaSRWH77MI8iVR1Tq0v2zlgOna59kGKcXtPLGfAtfgZiuIwzD-V2yGVBIF5V~k3pmcVmaXTYZkuXauO1iVTeHULliSjPkka-JHvtCtdoKmjdnaKmNeduAHPDqTYqkwA7rwfBSGhVpts9gQgEBVUCU2IqM6GZROJW27pTP4sROAsFTt7l~RKe~mMDB9GL~LOOiNEarsIDY8fMhXiypPf5Q6NAwyqRBP-In-fX3bJXAwedOUwr-PCb~rH4OTvELXxgZgJgiuF1fjVaCnqXi3FyOImg__",
          "https://s3-alpha-sig.figma.com/img/94be/8fb3/02f98ef2f413b2dbb58a5e1dc8ebe2fc?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lMQcKVEKjVfdU4giYFAj1GA7ji9Ad7smlgypaKi3LkfyrXPQredG0k36MEYJTmrkBu57mDw8dQpIMfGukbs2UJPZvmS1SFl5sxDGpHoZmfrF4hStTrF0BfSRQBMFyzm~S0QB17Hs6RL0CSOCjm7rojzbkNTJiTG3bsxesVczzCfFIQyRtaApRUuG7LruXpVFUhDeAj0xGG3xaREkfoW3uxeKqMyWwAf-39IjkTmv50ikNle56rh25XO4qbHj8dQJ2VMtzl9WHi-1d3PvP5BOwJBUPy3~mMRwf1mMKcu8Mw9LsrOGVjnwuSuCWPv0NpY5TmCeoFUjEZoYbMc9~O7yiA__",
          "https://s3-alpha-sig.figma.com/img/a428/abca/637c1853c4a7557c767c9d7f723fb65c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o0XLhL4c4Nznj1XpSks-eLKBcvnWefQ1vb2ROh-TdhjAxaAOXypR~tFRUmfiXWcrIleSvV0Mh~MXVCpFmAG05iY2uPjrLdICxCg2DB6hBQs5~AkCUsFe6GxpPqMe0RMXDyhaRfJmRTLgsOYJcklnlfwOZP6aULVZRXULkPRc25Es8w73qaltmY6ygTzeHQ~ON4lSqEOF7gMUdEI8T7EDq4jZsKFV7ju2HCFpMgqx7HqK4DQOeFXSa7PKWrnqxfzQ8SJeK4IVCXr8xeFCqSQJ8DMirk~a5cgIViNYnnbdK-hCGxfMTmGDX4axOrJyjhvZvZszJt2jq2qeyZ~Cw46doA__",
          "https://s3-alpha-sig.figma.com/img/1606/57dc/74158dfe9ab33cd8c5a9febc6c00afd1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UyayAkYDMVWrLxtaxEDD1bWg3X3G0~J2zvo1d7uTm2RT0~NqlFyTNHqi1LvD43jLRyK0ruHreAs8dd4cZlEUuxFuLA~4CYzNiwAywFI1zeWKlCIGLwuef01X6bAVbOE5osg98ghuZJy5LxeVgsIoUCtDySJ4wIYJysFVZIRbscxVKN82JqdMfheiQ-9NZ9LrkHyVQxa6VxFE6Ou1rF97nBksGm9QAgdoIESeWVp~PxCdY9Zm6yg6sSGZz~CPCrbacQb3U25TrELKSUbknXApuoa8cKKepELnDJO6beFjLr~gM02NjHqq7~j8XyI8CmLA-AlRi4OqYF3ZwkobqZT6iw__",
          "https://s3-alpha-sig.figma.com/img/150f/8e54/44038d1e1689ef29aefc699afa8b2bd2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m2TcnoO14BkHSTiUdYuSLL6mxn1b3X8cJvg0LOoEUciliz1UPMs1z97cogf3A7sLEsXUW0OQrbGjyYGZvbd6jtfD3XOtu8TrkqlqHhkA3Jo6gq-96jsl7aaR4HXsNMWtvjU3-HQ5B9hcKpsUoJAanfIRwk5Ti2-53mP4x1dAGGBRYtSTjRoHGnkGLFM-IwrJD6ojkkFupBDORGO06HWjgz2TWX3mRcqnutR2UAjoe4ukT5XQcWhxZkjettpIrGDwmysCNbKMdrlwpQcgLW-xVy-r7dUj8P5yaos~FIKmxVA71IzvRAYxcsd9p1hGECqCHK-vXVBmc-lGIKfVYteMqg__",
          "https://s3-alpha-sig.figma.com/img/da3c/078e/9f475f76dd40d69313e56bdd79c24343?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TrtxbpLPXq-hKaiAbehuEutJLZ6nG1IKKez3QVkm9sk9xcdeOYbJKeNcc6JwD5uY1ryT6AJf9kuENwhPggzjxrbpe5GoAPOgnt0e9-Owci4ezeXfjGqM~kkY6hFwiFZxRcKMBhjSd3coriR4mkTD5h33yOFe44rny2aq1Mljq2y3LCpMsKFOJIfZjVHiYZeqshgpPo9LWp20tkg3caBHpncHZvCnaN~OCVuwwoIdbifDmJLo~ulbKTY4onC6jAovHxHSawGVNcpo4ZvWSDnhaIIz1egKGUGTvwoaAO-3AgV~ksJSUjUSvMxeA2nME~kzttILGCKzveeNefajZhetIw__",
        ].map((image, index) => (
          <div
            key={index}
            className="card flex flex-col items-center p-6 gap-16 bg-white overflow-hidden border-2 hover:border-0 border-[#e7edf2] "
          >
            <div
              className="w-[174px] h-[77px] bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url(${image})`,
                scale:"3"
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCountries;
