import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import SideSection from './components/SideSection'
import TitleSection from './components/TitleSection'
import PercentageSection from './components/PercentageSection'
import AdvertisementSection from './components/AdvertisementSection'
import TableInformation from './components/TableInformation'

function App() {
  return (
    <div className="h-screen grid p-4 grid-cols-12 grid-rows-[100px_auto]">
      <div className="border col-span-12">
        <Header />
      </div>
      <div className="border col-span-5 row-span-12">
        <SideSection />
      </div>
      <div className="border col-span-7 row-span-1">
        <TitleSection />
      </div>
      <div className="border col-span-7 row-span-1">
        <TableInformation />
      </div>
      <div className="border col-span-7 row-span-5">
        <PercentageSection />
      </div>
      <div className="border col-span-7 row-span-5">
        <AdvertisementSection />
      </div>
      <div className="border col-span-12">
        <Footer />
      </div>
    </div>
  );

}

export default App