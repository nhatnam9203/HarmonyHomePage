import React from "react";
import Topfooter from "../../components/Footer/TopFooter";
// import PopupAfterLoad from "../../components/PopupAfterLoad/PopupAfterLoad";
import HomeBanner2 from "./Banner2/HomeBanner2";
import HomeFeatures2 from "./Features2/HomeFeatures2";
import { Helmet } from "react-helmet";

// import HomeBanner from "./Banner/HomeBanner";
// import HomeFeatures from "./Features/HomeFeatures";
// import StarterKit from "./StarterKit/StarterKit";

function Home() {
  // useEffect(() => {

  // }, [])
  return (
    <>
      <Helmet>
        <title>Harmony | Home</title>
        <meta name="Home" content="Harmony HomePage" />
      </Helmet>
      {/* <HomeBanner />
      <HomeFeatures />
      <StarterKit /> */}
      {/* <PopupAfterLoad /> */}
      <HomeBanner2 />
      <HomeFeatures2 />
      <Topfooter />
    </>
  );
}

export default Home;
