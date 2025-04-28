import React, { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideSection from "./components/SideSection";
import PercentageSection from "./components/PercentageSection";
import AdvertisementSection from "./components/AdvertisementSection";
import TableInformation from "./components/TableInformation";
import ModalResults from "./modal/ModalResults";
import ResultsWinningSection from "./components/ResultsWinningSection";
import moneyWheelLogo from "./assets/pictures/money_wheel_logo.png";

import {
  fetchDeleteResults,
  fetchGetResults,
  fetchInsertResults,
} from "./services/gameModifedApi";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ChooseTablePage from "./pages/ChooseTablePage";
import MainPage from "./pages/MainPage";

export const MoneyWheelContext = createContext();
function App() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  let keySequence = "";
  const numInput = ["1", "2", "3", "4", "5", "6", "7", "00"];

  const [results, setResults] = useState([]);
  const [percentage, setPercentage] = useState([]);
  const [tableInfo, setTableInfo] = useState([]);
  const [tableNameValue, setTableNameValue] = useState("");
  const [error, setError] = useState(null);
  const [storedTableName, setStoredTableName] = useState(null);

  const [fastNumInterval, setFastNumInterval] = useState(2);
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultPulse, setResultsPulse] = useState(false);
  const [isResultsHide, setIsResultsHide] = useState(false);

  const [resultNum, setResultNum] = useState(null);
  const handleEnterKeyCode = async (e) => {
    let keyPress = e.key;
    try {
      if (location.pathname != `/tableName/${storedTableName}`) {
        return;
      }
      if (e.key === "Enter") {
        if (keySequence == 1) {
          const response = await fetchInsertResults({
            table_name: tableName,
            results_num: 1,
          });
          setResults(response.tableResults);
          setPercentage(response.tablePercentage);
          setResultsPulse(true);
          setIsModalOpen(true);
          setFastNumInterval(30);
          setResultNum(1);
          setIsResultsHide(true);
        } else if (keySequence == 2) {
          const response = await fetchInsertResults({
            table_name: tableName,
            results_num: 3,
          });
          setResults(response.tableResults);
          setPercentage(response.tablePercentage);
          setResultsPulse(true);
          setIsModalOpen(true);
          setCount(0);
          setFastNumInterval(30);
          setResultNum(3);
          setIsResultsHide(true);
        } else if (keySequence == 3) {
          const response = await fetchInsertResults({
            table_name: tableName,
            results_num: 5,
          });
          setResults(response.tableResults);
          setPercentage(response.tablePercentage);
          setResultsPulse(true);
          setIsModalOpen(true);
          setCount(0);
          setFastNumInterval(30);
          setResultNum(5);
          setIsResultsHide(true);
        } else if (keySequence == 4) {
          const response = await fetchInsertResults({
            table_name: tableName,
            results_num: 10,
          });
          setResults(response.tableResults);
          setPercentage(response.tablePercentage);
          setResultsPulse(true);
          setIsModalOpen(true);
          setCount(0);
          setFastNumInterval(30);
          setResultNum(10);
          setIsResultsHide(true);
        } else if (keySequence == 5) {
          const response = await fetchInsertResults({
            table_name: tableName,
            results_num: 25,
          });
          setResults(response.tableResults);
          setPercentage(response.tablePercentage);
          setResultsPulse(true);
          setIsModalOpen(true);
          setCount(0);
          setFastNumInterval(30);
          setResultNum(25);
          setIsResultsHide(true);
        } else if (keySequence == 6) {
          const response = await fetchDeleteResults();
          setResults(response.tableResults);
          setPercentage(response.tablePercentage);
        } else if (keySequence == 51) {
          const response = await fetchInsertResults({
            table_name: tableName,
            results_num: 51,
          });
          setResults(response.tableResults);
          setPercentage(response.tablePercentage);
          setResultsPulse(true);
          setIsModalOpen(true);
          setCount(0);
          setFastNumInterval(30);
          setResultNum(51);
          setIsResultsHide(true);
        } else if (keySequence == 52) {
          const response = await fetchInsertResults({
            table_name: tableName,
            results_num: 52,
          });
          setResults(response.tableResults);
          setPercentage(response.tablePercentage);
          setResultsPulse(true);
          setIsModalOpen(true);
          setCount(0);
          setFastNumInterval(30);
          setResultNum(52);
          setIsResultsHide(true);
        }
        keySequence = "";
      }

      numInput.map((num) => {
        if (e.key === num) {
          keySequence += keyPress;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleEnterKeyCode);
    return () => {
      document.body.removeEventListener("keydown", handleEnterKeyCode);
    };
  }, [results]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFastNumInterval(2);
      setIsModalOpen(false);
      setResultNum(null);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleFetchGetTableInfo = async () => {
      try {
        const storedTableName = localStorage.getItem("storedTable");
        if (storedTableName) {
          setStoredTableName(storedTableName);
          const response = await fetchGetResults(storedTableName);
          console.log(response);
          setResults(response.tableResults);
          setPercentage(response.tablePercentage);
          setTableInfo(response.tableInfo);
        }
      } catch (error) {
        console.log(error);
      }
    };

    handleFetchGetTableInfo();
  }, []);

  const locationTableName = location.search;
  const tableName = String(locationTableName).split("=").at(1);

  const handleRouteTableName = async () => {
    if (!tableNameValue) {
      setError("table name is required.");
      return;
    }
    try {
      const response = await fetchGetResults(tableNameValue);
      if (response?.tableInfo.length == 0 || !response?.tableInfo) {
        setError("Invalid table name, please try again.");
        return;
      } else {
        console.log(response?.tableInfo[0]?.table_name);
        localStorage.setItem("storedTable", response?.tableInfo[0]?.table_name);
        navigate(`/tableName/${response?.tableInfo[0]?.table_name}`);
        setTableNameValue("");
        keySequence = "";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MoneyWheelContext.Provider
      value={{
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
        setCount,
        tableNameValue,
        setTableNameValue,
        handleRouteTableName,
        error,
      }}
    >
      <Routes>
        <Route path="/" element={<ChooseTablePage />} />
        <Route path={`/tableName/${storedTableName}`} element={<MainPage />} />
      </Routes>
    </MoneyWheelContext.Provider>
  );
}

export default App;
