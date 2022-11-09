import React from 'react';
import Image from 'next/image';

const ChartsPrices = () => {
  return (
    <div className="px-[30px] py-[20px] bg-[#222C3F] border border-[#313E56] mb-4 rounded-lg">
      <h2 className="charts text-[18px] font-medium">Charts & Prices</h2>
      <div className="button-links mt-4 flex flex-col lg:flex-row md:flex-row flex-wrap">
        <a
          href="#"
          className="btn bg-transparent font-normal flex items-center gap-2 justify-center h-[auto] border border-[#313E56] rounded-md lg:mr-2 md:mr-2 mb-2 text-[#fff] whitespace-nowrap px-[1.5em] py-[0.7em] text-center hover:bg-[#1e2635]"
        >
          <Image
            src="/coins.png"
            alt="coins-img"
            width={30}
            height={30}
            className="rounded-md"
          />
          <div>Poocoin</div>
        </a>
        <a
          href="#"
          className="btn bg-transparent font-normal flex items-center gap-2 justify-center h-[auto] border border-[#313E56] rounded-md lg:mr-2 md:mr-2 mb-2 text-[#fff] whitespace-nowrap px-[1.5em] py-[0.7em] text-center hover:bg-[#1e2635]"
        >
          <Image
            src="/coins.png"
            alt="coins-img"
            width={30}
            height={30}
            className="rounded-md"
          />
          <div>CoinBrain</div>
        </a>
        <a
          href="#"
          className="btn bg-transparent font-normal flex items-center gap-2 justify-center h-[auto] border border-[#313E56] rounded-md lg:mr-2 md:mr-2 mb-2 text-[#fff] whitespace-nowrap px-[1.5em] py-[0.7em] text-center hover:bg-[#1e2635]"
        >
          <Image
            src="/coins.png"
            alt="coins-img"
            width={30}
            height={30}
            className="rounded-md"
          />
          <div>Bogged Finance</div>
        </a>
        <a
          href="#"
          className="btn bg-transparent font-normal flex items-center gap-2 justify-center h-[auto] border border-[#313E56] rounded-md lg:mr-2 md:mr-2 mb-2 text-[#fff] whitespace-nowrap px-[1.5em] py-[0.7em] text-center hover:bg-[#1e2635]"
        >
          <Image
            src="/coins.png"
            alt="coins-img"
            width={30}
            height={30}
            className="rounded-md"
          />
          <div>GeckoTerminal</div>
        </a>
      </div>
    </div>
  );
};

export default ChartsPrices;
