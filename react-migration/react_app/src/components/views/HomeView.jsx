import Description from "../molecules/Description";
import Features from "../molecules/Features";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import IconsContainer from "../molecules/IconsContainer";
import MainContainer from "../molecules/MainContainer";
import MobileContainer from "../molecules/MobileContainer";
import Screens from "../molecules/Screens";
import FiguresContainer from "../molecules/figuresContainer";


const HomeView = () => {
  return (
    <>
      <body>
        <Header></Header>
 
        <main role="main" className="pt-5">
        <FiguresContainer/>
          <MainContainer/>
          <MobileContainer/>
          <IconsContainer/>
          <Description/>
          <Features/>
          <Screens/>
          <Footer/>
        </main>
      </body>
    </>
  );
};

export default HomeView;
