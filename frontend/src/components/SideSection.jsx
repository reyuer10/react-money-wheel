import React from 'react'

function SideSection({ results }) {
    console.log(results)

    function customizeColorBasedOnNum(num) {
        if (num == 25) return "bg-red-500  text-white text-shadow border-4 border-red-200"
        if (num == 10) return "bg-yellow-400 text-white text-shadow border-4 border-yellow-200"
        if (num == 5) return "bg-blue-600 text-white text-shadow border-4 border-blue-200"
        if (num == 3) return "bg-pink-600 text-white text-shadow border-4 border-pink-200"
        if (num == 1) return "bg-orange-600 text-white text-shadow border-4 border-orange-200"
    }

    return (
        <div className='text-4xl font-bold'>
            {results.map((r, index) => {
                return (
                    <div key={index}>
                        <p
                            className={`text-5xl ${customizeColorBasedOnNum(r.results_num)} text-black h-[120px] flex justify-center items-center m-6 rounded-2xl`}>
                            {r.results_num}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default SideSection