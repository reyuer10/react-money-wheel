import React from "react";
import casinoStotsenbergLogo from "../assets/cpLogoWhite.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { MoneyWheelContext } from "../App";

function ChooseTablePage() {
  const { tableNameValue, setTableNameValue, handleRouteTableName, error } =
    useContext(MoneyWheelContext);
  const {
    register,
    formState: { errors },
    setError,
  } = useForm();
  return (
    <div className="h-screen transition-colors bg-cover bg-[url(assets/pictures/bgPortraitEdit.PNG)] space-y-10 flex flex-col justify-center items-center">
      <img
        className="h-[100px]"
        src={casinoStotsenbergLogo}
        alt="money_wheel_logo"
      />
      <p className="text-[72px] font-bold text-white text-shadow">
        ENTER TABLE NAME
      </p>
      <div className="flex items-center space-x-2">
        <input
          value={tableNameValue}
          onChange={(e) => setTableNameValue(e.target.value)}
          className="w-[300px] font-bold text-white ring ring-white text-[56px] text-center py-2 rounded-2xl"
          type="text"
        />
        <button
          onClick={handleRouteTableName}
          className="text-white bg-blue-500 px-8 py-2 font-bold rounded-2xl text-[56px]"
          type="button"
        >
          SUBMIT
        </button>
      </div>
      {error ? <p className="text-red-500 text-[24px]">{error}</p> : null}
    </div>
  );
}

export default ChooseTablePage;
