import React from "react";
import Header from "../components/Header";
import SideSection from "../components/SideSection";
import TableInformation from "../components/TableInformation";
import PercentageSection from "../components/PercentageSection";
import AdvertisementSection from "../components/AdvertisementSection";
import ModalResults from "../modal/ModalResults";
import ResultsWinningSection from "../components/ResultsWinningSection";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <div className="h-screen transition-colors bg-cover bg-[url(assets/pictures/bgPortraitEdit.PNG)]">
      <div className="h-full p-4">
        <div className=" h-[5%]">
          <Header />
        </div>
        <div className="h-[93%]">
          <div className="h-full flex w-full">
            <div className="text-center overflow-hidden w-[30%]">
              <div className="bg-white/30 rounded-3xl m-4 mx-6 py-1 h-[99%]">
                <SideSection />
              </div>
            </div>
            <div className="w-[70%] ">
              <div className="h-full">
                <div className="h-[31%]  overflow-hidden flex justify-center relative">
                  <TableInformation />
                </div>
                <div className="h-[30%] overflow-hidden ">
                  <div className="bg-white/30 rounded-3xl m-4 mx-6">
                    <PercentageSection />
                  </div>
                </div>
                <div className="h-[39%] flex justify-center items-center ">
                  <div className="bg-gradient-to-b from-white/30 via-white/20 to-white/10 rounded-3xl mx-6 h-[97%] w-full flex justify-center items-center overflow-hidden">
                    <AdvertisementSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2%] w-full relative">
          <Footer />
        </div>
      </div>
      <ModalResults>
        <ResultsWinningSection />
      </ModalResults>
    </div>
  );
}

export default MainPage;
