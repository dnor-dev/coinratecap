import React from 'react';
import ChartsPrices from '../../components/ChartsPrices.tsx';
import WatchListTab from '../../components/WatchListTab';
import CoinInfo from '../../components/CoinInfo';

const Coin = () => {
  return (
    <div className="w-full lg:w-[1300px] mx-auto lg:px-16 md:px-8 mt-10 px-2">
      <div className="flex w-full lg:gap-4 md:gap-4 gap-1 flex-col lg:flex-row md:flex-row">
        <div className="basis-8/12">
          <WatchListTab />
          <ChartsPrices />
        </div>
        <div className="basis-4/12">
          <CoinInfo />
        </div>
      </div>
    </div>
  );
};

export default Coin;
