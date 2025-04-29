import React, { memo, useContext, useEffect } from 'react'
import { MoneyWheelContext } from '../App'
import casinoLogoWhite from "../assets/pictures/casinoLogoWhite.png"

function HeaderSection() {
    const { tableInfo } = useContext(MoneyWheelContext);


    useEffect(() => {
        console.log(tableInfo[0])
    }, [])
    return (
        <div className='w-full'>
            <div className=' flex items-center justify-evenly text-center'>
                <span>
                    <img
                        className=' max-w-[9vh] drop-shadow-md drop-shadow-black'
                        src={casinoLogoWhite}
                        alt="casino_logo" />
                </span>
                <span className='flex flex-col items-center text-white leading-10'>
                    <p className='text-[20px] drop-shadow-md drop-shadow-black'>TABLE NAME:</p>
                    <p className='text-[48px] drop-shadow-md drop-shadow-black'>
                        {tableInfo[0]?.table_name}
                    </p>
                </span>
            </div>
            {/* <table className='w-full '>
                <thead>
                    <tr className='text-white text-[42px] tracking-widest text-center drop-shadow-md drop-shadow-black'>
                        <th>BATA</th>
                        <th>BET</th>
                        <th>MIN</th>
                        <th>MAX</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-white text-center text-[30px] '>
                        <td>orange na bata</td>
                        <td>1</td>
                        <td>₱ {tableInfo[0]?.one_min}</td>
                        <td>₱ {Number(tableInfo[0]?.one_max).toLocaleString()}</td>
                    </tr>
                    <tr className='text-white text-center text-[30px] '>
                        <td>orange na bata</td>
                        <td>3</td>
                        <td>₱ {tableInfo[0]?.three_min}</td>
                        <td>₱ {Number(tableInfo[0]?.three_max).toLocaleString()}</td>
                    </tr>
                    <tr className='text-white text-center text-[30px] '>
                        <td>orange na bata</td>
                        <td>5</td>
                        <td>₱ {tableInfo[0]?.five_min}</td>
                        <td>₱ {Number(tableInfo[0]?.five_max).toLocaleString()}</td>
                    </tr>
                    <tr className='text-white text-center text-[30px] '>
                        <td>orange na bata</td>
                        <td>10</td>
                        <td>₱ {tableInfo[0]?.ten_min}</td>
                        <td>₱ {Number(tableInfo[0]?.ten_max).toLocaleString()}</td>
                    </tr>
                    <tr className='text-white text-center text-[30px] '>
                        <td>orange na bata</td>
                        <td>25</td>
                        <td>₱ {tableInfo[0]?.twentyFive_min}</td>
                        <td>₱ {Number(tableInfo[0]?.twentyFive_max).toLocaleString()}</td>
                    </tr>
                    <tr className='text-white text-center text-[30px] '>
                        <td>orange na bata</td>
                        <td>{`50 (White)`}</td>
                        <td>₱ {tableInfo[0]?.fiftywhite_min}</td>
                        <td>₱ {Number(tableInfo[0]?.fiftywhite_max).toLocaleString()}</td>
                    </tr>
                    <tr className='text-white text-center text-[30px]'>
                        <td>orange na bata</td>
                        <td>{`50 (Black)`}</td>
                        <td>₱ {tableInfo[0]?.fiftyblack_min}</td>
                        <td>₱ {Number(tableInfo[0]?.fiftyblack_max).toLocaleString()}</td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}

export default memo(HeaderSection)