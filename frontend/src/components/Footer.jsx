import React from 'react'
import Marquee from "react-fast-marquee"

function Footer() {
    return (

        <Marquee
        speed={100}
            className='text-4xl font-bold text-white overflow-hidden'>
            트렌드 모니터와 슈박스 에 표시되는 결과는 참고용으로만 제공됩니다. 게임 결과는 게임
            테이블 위의 카드
            결과에 따라&nbsp;결정됩니다.&nbsp;감사합니다. Result displayed on the trend monitor and electronic shoe are provided for reference only. Game result shall be determined by the playing cards on the gaming table. Thank you. 
        </Marquee>
    )
}

export default Footer