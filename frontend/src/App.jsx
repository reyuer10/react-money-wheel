import React, { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SideSection from './components/SideSection'
import PercentageSection from './components/PercentageSection'
import AdvertisementSection from './components/AdvertisementSection'
import TableInformation from './components/TableInformation'
import ModalResults from './modal/ModalResults'
import ResultsWinningSection from './components/ResultsWinningSection'
import moneyWheelLogo from "./assets/pictures/money_wheel_logo.png"

import { fetchDeleteResults, fetchGetResults, fetchInsertResults } from './services/gameModifedApi'
import { Route, Routes, useLocation } from 'react-router-dom'
import HeaderSection from './components/HeaderSection'


export const MoneyWheelContext = createContext()
function App() {
  const location = useLocation()
  const locationTableName = location.pathname;
  const tableName = String(locationTableName).split("=").at(1);
  const [secondCount, setSecondCount] = useState(0)

  let keySequence = ''
  const numInput = ["1", "2", "3", "4", "5", "6", "7", "0"]


  const [results, setResults] = useState([]);
  const [percentage, setPercentage] = useState([]);
  const [tableInfo, setTableInfo] = useState([]);

  const [fastNumInterval, setFastNumInterval] = useState(2)
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultPulse, setResultsPulse] = useState(false)
  const [isResultsHide, setIsResultsHide] = useState(false);

  const [resultNum, setResultNum] = useState(null);


  const handleEnterKeyCode = async (e) => {
    let keyPress = e.key
    try {
      if (e.key === "Enter") {
        if (keySequence == 1) {
          const response = await fetchInsertResults({
            table_name: tableName,
            results_num: 1
          })
          setResults(response.tableResults);
          setPercentage(response.tablePercentage)
          setResultsPulse(true)
          setIsModalOpen(true)
          setFastNumInterval(30);
          setResultNum(1)
          setIsResultsHide(true)
        } else if (keySequence == 3) {
          const response = await fetchInsertResults({
            table_name: tableName,
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
        } else if (keySequence == 5) {
          const response = await fetchInsertResults({
            table_name: tableName,
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
        } else if (keySequence == 10) {
          const response = await fetchInsertResults({
            table_name: tableName,
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
        } else if (keySequence == 25) {
          const response = await fetchInsertResults({
            table_name: tableName,
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
        } else if (keySequence === '00') {
          const response = await fetchDeleteResults()
          setResults(response.tableResults)
          setPercentage(response.tablePercentage)
        } else if (keySequence == 51) {
          const response = await fetchInsertResults({
            table_name: tableName,
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
            table_name: tableName,
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

      numInput.map(num => {
        if (e.key === num) {
          keySequence += keyPress
        }
      })
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
        const response = await fetchGetResults(tableName);
        setResults(response.tableResults)
        setPercentage(response.tablePercentage)
        setTableInfo(response.tableInfo)
      } catch (error) {
        console.log(error)
      }
    }

    handleFetchGetTableInfo()
  }, []);

  return (
    <Routes>
      <Route path={`tableName=${tableName}`} element={tableInfo.length <= 0 ?
        <div className='h-screen transition-colors bg-cover bg-[url(assets/pictures/bgPortraitEdit.PNG)] space-y-10 flex flex-col justify-center items-center'>
          <img
            className='h-[200px]'
            src={moneyWheelLogo}
            alt="money_wheel_logo" />
          <p className='text-[72px] font-bold text-white text-shadow'>NO TABLE FOUND</p>
        </div>
        :
        <MoneyWheelContext.Provider value={{
          isModalOpen,
          resultNum,
          tableInfo,
          fastNumInterval,
          count,
          resultPulse,
          results,
          isResultsHide,
          percentage,
          setResultsPulse,
          setIsResultsHide,
          setCount
        }}>
          <div className="h-screen transition-colors bg-cover lilita-one-regular bg-[url(assets/pictures/bgPortraitEdit.PNG)]">
            <div className="h-full p-4">
              {/* <div className=" h-[5%]">
                <Header />
              </div> */}
              <div className='h-[98%]'>
                <div className='h-full flex w-full'>
                  <div className='text-center overflow-hidden w-[30%]'>
                    <div className='bg-white/30 rounded-3xl m-4 mx-4 py-1 h-[99%] overflow-hidden'>
                      <SideSection />
                    </div>
                  </div>
                  <div className='w-[70%]'>
                    <div className='h-full'>
                      <div className='h-[5%] flex justify-czrczrcenter items-center bg-white/30 rounded-3xl m-4 overflow-hidden'>
                        <HeaderSection />
                      </div>
                      <div className="h-[30%] overflow-hidden flex justify-center relative mx-6">
                        <TableInformation />
                      </div>
                      <div className="h-[40%] overflow-hidden ">
                        <div className='bg-white/30 rounded-3xl m-4 mx-6'>
                          <PercentageSection />
                        </div>
                      </div>
                      <div className="h-[24%] flex justify-center items-center ">
                        <div className=' bg-gradient-to-b from-white/30 via-white/20 to-white/10 rounded-3xl mx-6 h-[97%] w-full flex justify-center items-center overflow-hidden'>
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
            <ModalResults >
              <ResultsWinningSection />
            </ModalResults>
          </div>
        </MoneyWheelContext.Provider>
      } />
    </Routes>

  );
}

export default App