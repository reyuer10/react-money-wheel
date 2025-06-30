import React, { useEffect, useState } from 'react'
import { fetchLocateShoeTable, fetchShoeTable } from '../services/gameModifedApi';
import casinoLogo from "../assets/pictures/casinoLogoBlack.png"

function TableShoeHistory({ tableName, setIsShoeHistoryModalOpen, handleFetchGetTableInfo }) {
    const [isLoading, setIsLoading] = useState(false);
    const [shoe, setShoe] = useState([]);

    const handleFetchShoeTable = async () => {
        try {
            const response = await fetchShoeTable({ table_name: tableName });
            setShoe(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setIsLoading(true)
        const timeout = setTimeout(() => {
            handleFetchShoeTable()
            setIsLoading(false)
        }, 1000);


        return () => {
            clearTimeout(timeout)
        }

    }, [])

    const dateFormat = (timeDate) => {
        const time = new Date(timeDate)

        console.log(time)
    }

    const handlLocateShoeTable = async (current_shoe, table_name) => {
        console.log(current_shoe, table_name)
        try {
            const response = await fetchLocateShoeTable({
                current_shoe: current_shoe,
                table_name: table_name
            })

            if (response) {
                setIsShoeHistoryModalOpen(false)
                handleFetchGetTableInfo()
            }
        } catch (error) {
            console.log(error.response)
        }
    }
    // bg-gray-100
    return (
        <div className='bg-gray-100 ring-orange-500 ring-4 border-blue-500 border-4 p-4 rounded-2xl w-[50%] shadow-md shadow-black space-y-6'>
            <div>
                <img
                    className='w-[25%] mx-auto'
                    src={casinoLogo}
                    alt="casinoLogo"
                />
                <p className='text-[56px] text-white text-center drop-shadow-md drop-shadow-black'>SHOE HISTORY LIST</p>
            </div>
            {isLoading ?
                <div className='flex flex-col justify-center items-center p-6 space-y-8'>
                    <div role="status">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>

                    </div>
                    <p>
                        Loading...
                    </p>
                </div>
                : <table className='w-full'>
                    <thead className='text-zinc-700 text-center border-b border-b-gray-500'>
                        <tr>
                            <th>
                                No.
                            </th>
                            <th>
                                Table Name
                            </th>
                            <th>
                                Shoe ID
                            </th>
                            <th>
                                Last Game Played
                            </th>

                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className=' text-zinc-700 text-center'>
                        {shoe.map((s, index) => {
                            return (
                                <tr
                                    key={s.index}
                                    className='border-b border-gray-300'
                                >
                                    <td>{`${index + 1}. `}</td>
                                    <td>{tableName}</td>
                                    <td>{s.current_shoe}</td>
                                    <td>{s.latest_created}</td>
                                    <td>
                                        <button
                                            onClick={() => handlLocateShoeTable(s.current_shoe, tableName)}
                                            className='text-white bg-blue-500 px-4 py-2 rounded-full my-2'>
                                            Enter
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>}

        </div>
    )
}

export default TableShoeHistory