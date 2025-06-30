import React from "react";
import Marquee from "react-fast-marquee";

function Footer() {
  return (
    <Marquee
      speed={100}
      className="text-2xl font-bold text-white overflow-hidden font-sans"
    >
      트렌드 모니터에 표시되는 결과는 참고용으로만 제공됩니다. 게임 결과는 게임
      테이블에서 결정됩니다.&nbsp;감사합니다. Results displayed on the trend
      monitor are provided for reference only. The game result shall be
      determined at the gaming table. Thank you.
    </Marquee>
  );
}

export default Footer;
