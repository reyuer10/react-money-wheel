import React, { useEffect, useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import SideSection from './components/SideSection'
import TitleSection from './components/TitleSection'
import PercentageSection from './components/PercentageSection'
import AdvertisementSection from './components/AdvertisementSection'
import TableInformation from './components/TableInformation'
import { fetchDeleteResults, fetchGetResults, fetchInsertResults } from './services/gameModifedApi'
import ModalResults from './modal/ModalResults'
import ResultsWinningSection from './components/ResultsWinningSection'




function App() {
  let keySequence = ''
  const [results, setResults] = useState([]);
  const [percentage, setPercentage] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultNum, setResultNum] = useState(null)

  const handleEnterKeyCode = async (e) => {
    let keyPress = e.key
    try {
      if (e.key === "Enter") {
        if (keySequence == 1) {
          const response = await fetchInsertResults({
            results_num: 1
          })
          setResults(response.tableResults);
          setPercentage(response.tablePercentage)
          setIsModalOpen(true)
          setResultNum(1)
        } else if (keySequence == 2) {
          const response = await fetchInsertResults({
            results_num: 3
          })
          setResults(response.tableResults)
          setPercentage(response.tablePercentage)
          setIsModalOpen(true)
          setResultNum(3)
        } else if (keySequence == 3) {
          const response = await fetchInsertResults({
            results_num: 5
          })
          setResults(response.tableResults)
          setPercentage(response.tablePercentage)
          setIsModalOpen(true)
          setResultNum(5)
        } else if (keySequence == 4) {
          const response = await fetchInsertResults({
            results_num: 10
          })
          setResults(response.tableResults)
          setPercentage(response.tablePercentage)
          setIsModalOpen(true)
          setResultNum(10)
        } else if (keySequence == 5) {
          const response = await fetchInsertResults({
            results_num: 25
          })
          setResults(response.tableResults)
          setPercentage(response.tablePercentage)
          setIsModalOpen(true)
          setResultNum(25)
        } else if (keySequence == 6) {
          const response = await fetchDeleteResults()
          setResults(response.tableResults)
          setPercentage(response.tablePercentage)
        }
        keySequence = ''
      }

      if (
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "00"
      ) {
        keySequence += keyPress
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    document.body.addEventListener("keydown", handleEnterKeyCode)
    return () => {
      document.body.removeEventListener("keydown", handleEnterKeyCode)
    }
  }, [results]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsModalOpen(false)
      setResultNum(null)
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [isModalOpen])




  useEffect(() => {
    const handleFetchGetTableInfo = async () => {
      try {
        const response = await fetchGetResults();
        // console.log(response)
        setResults(response.tableResults)
        setPercentage(response.tablePercentage)
      } catch (error) {
        console.log(error)
      }
    }

    handleFetchGetTableInfo()
  }, []);

  return (
    <div className="h-screen bg-cover bg-[url(assets/pictures/bgPortraitEdit.PNG)]">
      <div className='h-full p-4'>
        <div className=" h-[5%] border-b-4 border-pink-500">
          <Header />
        </div>
        <div className='h-[93%]'>
          <div className='h-full flex w-full'>
            <div className='text-center border-b-4 border-r-4 border-l-4 border-pink-500 w-[30%]'>
              <div>
                <SideSection results={results} />
              </div>
            </div>
            <div className=' w-[70%]'>
              <div className='h-full'>
                <div className="h-[10%] border-r-4 border-b-4 border-pink-500">
                  <TitleSection />
                </div>
                <div className="h-[10%] border-r-4 border-b-4 border-pink-500 overflow-hidden flex justify-center relative">
                  <TableInformation />
                </div>
                <div className="h-[30%] border-r-4 border-pink-500 overflow-hidden ">
                  <PercentageSection percentage={percentage} />
                </div>
                <div className="h-[50%] flex justify-center items-center border-b-4 border-r-4 border-t-4 border-pink-500 ">
                  <AdvertisementSection />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2%] ">
          <Footer />
        </div>
      </div>
      <ModalResults isModalOpen={isModalOpen}>
        <ResultsWinningSection resultNumber={resultNum} />
      </ModalResults>
    </div>
  );

}

export default App

{/* <div className="h-screen grid p-4 grid-cols-12 grid-rows-[100px_auto]">
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
</div> */}
