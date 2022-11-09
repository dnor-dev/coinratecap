import React from 'react';
import Image from 'next/image';
import { Airplane, Favorites, Globe } from '../Icons';

const WatchListTab = () => {
  return (
    <div className="lg:pr-[30px] lg:py-[20px] lg:pl-[5px] px-[10px] py-[10px]  bg-[#222C3F] border border-[#313E56] mb-4 rounded-lg">
      <div className="main flex">
        <div className="left-pics px-[20px] w-[25%] hidden lg:flex md:flex justify-center items-center">
          <Image
            src="/coins.png"
            alt="coins-img"
            width={185}
            height={100}
            className="rounded-md"
          />
        </div>
        <div className="right-side lg:w-[75%] md:w-[75%] text-[14px] w-full flex flex-col justify-between px-[10px] py-[0.7em] lg:px-0 md:px-0">
          <div className="flex gap-1">
            <Image
              src="/coins.png"
              alt="coins-img"
              width={65}
              height={65}
              className="rounded-md lg:hidden md:hidden block"
            />
            <div className="has-wathclist w-full flex lg:justify-between md:justify-between flex-col lg:flex-row md:flex-row">
              <div className="popularity flex gap-1.5 items-center cursor-pointer text-[10px] text-[#00AA72]">
                <Favorites />
                <span className="text-[#FFB636] font-medium lg:text-[14px] md:text-[14px] text-[12px]">
                  Popularity:
                </span>
                on
                <span className="text-[#FFB636] font-medium lg:text-[14px] md:text-[14px] text-[12px]">
                  521
                </span>
                wathclists
              </div>
              <div className="add-to-watchlist flex gap-2 items-center cursor-pointer text-[#00AA72]">
                <Favorites />
                <span className=" font-medium lg:text-[14px] md:text-[14px] text-[12px]">
                  Add to watchlist
                </span>
              </div>
            </div>
          </div>
          <div className="body">
            <div className="coin-name flex items-center flex-wrap">
              <h1 className="mr-2 break-words lg:text-[24px] md:text-[20px] text-[15px] font-medium">
                69 Inu
              </h1>
              <span className="bg-[#758199] py-[2px] px-[5px] text-[#A2ABBC] rounded-sm text-[12px] mr-2 flex items-center">
                $69 INU
              </span>
              <span className="bg-[#758199] py-[2px] px-[5px] text-[#A2ABBC] rounded-sm text-[12px] mr-2= flex items-center">
                <Image
                  src="/coins.png"
                  alt="coins-img"
                  width={15}
                  height={15}
                  className="rounded-md"
                />
                BSC
              </span>
            </div>
            <div className="contract-address flex flex-col lg:flex-row md:flex-row">
              <span className="lg:mr-2 md:mr-2 text-[#787A8D] font-normal lg:w-[20%] md:w-[20%]">
                BSC Contract Address:
              </span>
              <div className="copy-address lg:w-[80%] md:w-[80%]">
                <div className="address break-words">
                  0x75c4c5f2e0d3ea764567f5fdde29529a72fc3a46
                </div>
              </div>
            </div>
            <div className="social-icons flex gap-3 mt-4">
              <div className="telegram flex cursor-pointer">
                <span className="flex items-center justify-between w-[75px] h-[25px] bg-[#323B4C] rounded-md">
                  <span className="flex items-center justify-center pl-2.5">
                    <Airplane />
                  </span>
                  <span className="flex items-center bg-[#00AA72] text-[11px] rounded-md py-1 px-3">
                    20
                  </span>
                </span>
              </div>
              <div className="browser cursor-pointer">
                <span className="flex items-center justify-between w-[75px] h-[25px] bg-[#323B4C] rounded-md">
                  <span className="flex items-center justify-center pl-2.5">
                    <Globe />
                  </span>
                  <span className="flex items-center bg-[#00AA72] text-[11px] rounded-md py-1 px-3">
                    GO
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchListTab;
