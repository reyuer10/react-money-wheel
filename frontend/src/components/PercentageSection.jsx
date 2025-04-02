import React from 'react'

function PercentageSection() {
    // h-[100px] w-[100px] 
    return (
        <div className='text-4xl font-bold p-4 grid grid-cols-12 h-full gap-4'>
            <div className='flex justify-center items-center border col-span-6 h-[200px] w-[200px] m-auto bg-black text-white shadow shadow-gray-400 border-gray-400 rounded-xl'>
                <span>0%</span>
            </div>
            <div className='flex justify-center items-center border col-span-6 h-[200px] w-[200px] m-auto bg-white shadow shadow-gray-400 border-gray-400 rounded-xl'>
                <span>0%</span>
            </div>
            <div className='flex justify-center items-center border col-span-6 h-[200px] w-[200px] m-auto bg-red-500 text-white shadow shadow-gray-400 border-gray-400 rounded-xl'>
                <span>0%</span>
            </div>
            <div className='flex justify-center items-center border col-span-6 h-[200px] w-[200px] m-auto bg-yellow-500 text-white shadow shadow-gray-400 border-gray-400 rounded-xl'>
                <span>0%</span>
            </div>
            <div className='flex justify-center items-center border col-span-6 h-[200px] w-[200px] m-auto bg-blue-500 text-white shadow shadow-gray-400 border-gray-400 rounded-xl'>
                <span>0%</span>
            </div>
            <div className='flex justify-center items-center border col-span-6 h-[200px] w-[200px] m-auto bg-pink-500 text-white shadow shadow-gray-400 border-gray-400 rounded-xl'>
                <span>0%</span>
            </div>
            <div className='flex justify-center items-center border col-span-12 h-[200px] w-[200px] m-auto bg-green-500 text-white shadow shadow-gray-400 border-gray-400 rounded-xl'>
                <span>0%</span>
            </div>
        </div>
    )
}

export default PercentageSection