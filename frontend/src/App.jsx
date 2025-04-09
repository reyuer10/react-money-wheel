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
  const [resultPulse, setResultsPulse] = useState(false)
  const [resultNum, setResultNum] = useState(null);
  const [fastNumInterval, setFastNumInterval] = useState(2)
  const [count, setCount] = useState(0);
  const [isResultsHide, setIsResultsHide] = useState(false);

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
          setResultsPulse(true)
          setIsModalOpen(true)
          setFastNumInterval(30);
          setResultNum(1)
          setIsResultsHide(true)
        } else if (keySequence == 2) {
          const response = await fetchInsertResults({
            results_num: 3
          })
          setResults(response.tableResults)
          setPercentage(response.tablePercentage)
          setResultsPulse(true)
          setIsModalOpen(true)
          setCount(0)
          setFastNumInterval(30);
          setResultNum(3)
          setIsResultsHide(true)
        } else if (keySequence == 3) {
          const response = await fetchInsertResults({
            results_num: 5
          })
          setResults(response.tableResults)
          setPercentage(response.tablePercentage)
          setResultsPulse(true)
          setIsModalOpen(true)
          setCount(0)
          setFastNumInterval(30);
          setResultNum(5)
          setIsResultsHide(true)
        } else if (keySequence == 4) {
          const response = await fetchInsertResults({
            results_num: 10
          })
          setResults(response.tableResults)
          setPercentage(response.tablePercentage)
          setResultsPulse(true)
          setIsModalOpen(true)
          setCount(0)
          setFastNumInterval(30);
          setResultNum(10)
          setIsResultsHide(true)
        } else if (keySequence == 5) {
          const response = await fetchInsertResults({
            results_num: 25
          })
          setResults(response.tableResults)
          setPercentage(response.tablePercentage)
          setResultsPulse(true)
          setIsModalOpen(true)
          setCount(0)
          setFastNumInterval(30);
          setResultNum(25)
          setIsResultsHide(true)
        } else if (keySequence == 6) {
          const response = await fetchDeleteResults()
          setResults(response.tableResults)
          setPercentage(response.tablePercentage)
        } else if (keySequence == 51) {
          const response = await fetchInsertResults({
            results_num: 51
          })
          setResults(response.tableResults)
          setPercentage(response.tablePercentage)
          setResultsPulse(true)
          setIsModalOpen(true)
          setCount(0)
          setFastNumInterval(30);
          setResultNum(51)
          setIsResultsHide(true)
        } else if (keySequence == 52) {
          const response = await fetchInsertResults({
            results_num: 52
          })
          setResults(response.tableResults)
          setPercentage(response.tablePercentage)
          setResultsPulse(true)
          setIsModalOpen(true)
          setCount(0)
          setFastNumInterval(30);
          setResultNum(52)
          setIsResultsHide(true)
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
      setFastNumInterval(2)
      setIsModalOpen(false)
      setResultNum(null)
    }, 5000)

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
    <div className={`h-screen transition-colors bg-cover bg-[url(assets/pictures/bgPortraitEdit.PNG)]`}>
      <div className={`h-full p-4  ${isResultsHide ? " bg-gradient-to-b from-yellow-300/50 via-yellow-300 to-yellow-100/30" : "" }`}>
        <div className=" h-[5%] ">
          <Header />
        </div>
        <div className='h-[93%]'>
          <div className='h-full flex w-full'>
            <div className='text-center overflow-hidden w-[30%]'>
              <div className='bg-white/30 rounded-3xl m-4 mx-6 py-1 h-[99%]'>
                <SideSection
                  setIsResultsHide={setIsResultsHide}
                  isResultsHide={isResultsHide}
                  setResultsPulse={setResultsPulse}
                  resultPulse={resultPulse}
                  results={results} />
              </div>
            </div>
            <div className=' w-[70%] '>
              <div className='h-full'>
                <div className="h-[10%]">
                  <div className=''>
                    <TitleSection />
                  </div>
                </div>
                <div className="h-[31%]  overflow-hidden flex justify-center relative">
                  <TableInformation
                    count={count}
                    setCount={setCount}
                    fastNumInterval={fastNumInterval}
                  />
                </div>
                <div className="h-[30%] overflow-hidden ">
                  <div className='bg-white/30 rounded-3xl m-4 mx-6'>
                    <PercentageSection percentage={percentage} />
                  </div>
                </div>
                <div className="h-[29%] flex justify-center items-center ">
                  <div className=' bg-gradient-to-b from-white/30 via-white/20 to-white/10 rounded-3xl m-4 mx-6 p-4 h-[97%] w-full flex justify-center items-center overflow-hidden'>
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
      <ModalResults isModalOpen={isModalOpen}>
        <ResultsWinningSection
          resultNumber={resultNum}
          percentage={percentage}
        />
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
