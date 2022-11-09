import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowUp } from '../Icons';
import { clsx } from 'clsx';

export const ChainDropdown = () => {
  const [dropdownActive, setDropDownActive] = useState(false);
  const handleClick = () => {
    setDropDownActive(!dropdownActive);
  };

  return (
    <div className="flex flex-col w-full gap-1">
      <p className="text-[#606E89] text-[10px]">Chain</p>
      <div
        className={clsx(
          'flex relative border border-[#313E56] flex justify-between py-[5px] px-[9px] w-full rounded-lg active:border-[#00AA72] cursor-pointer',
          dropdownActive && 'border-[#00AA72]',
        )}
        onClick={handleClick}
      >
        <p>All</p>
        {dropdownActive ? <ArrowUp /> : <ArrowDown />}
        <div
          className={clsx(
            'flex-col bg-[#1F2634] border border-[#434C5F] w-full rounded-lg absolute left-0 top-9 pt-1 border-t-[#1F2634] z-50',
            dropdownActive ? 'flex' : 'hidden',
          )}
        >
          <div className="flex gap-1.5 items-center p-[8px] px-[12px] cursor-pointer text-[#606E89] hover:bg-[#215353] hover:text-[#fff]">
            <Image
              src="/coins.png"
              alt="coins-image"
              width={18}
              height={18}
              objectFit="cover"
            />
            <p>BTC</p>
          </div>
          <div className="flex gap-1.5 items-center py-[8px] px-[12px] cursor-pointer text-[#606E89] hover:bg-[#215353] hover:text-[#fff]">
            <Image
              src="/coins.png"
              alt="coins-image"
              width={18}
              height={18}
              objectFit="cover"
            />
            <p>BSC</p>
          </div>
          <div className="flex gap-1.5 items-center p-[8px] px-[12px] cursor-pointer text-[#606E89] hover:bg-[#215353] hover:text-[#fff]">
            <Image
              src="/coins.png"
              alt="coins-image"
              width={18}
              height={18}
              objectFit="cover"
            />
            <p>ETH</p>
          </div>
          <div className="flex gap-1.5 items-center p-[8px] px-[12px] cursor-pointer text-[#606E89] hover:bg-[#215353] hover:text-[#fff]">
            <Image
              src="/coins.png"
              alt="coins-image"
              width={18}
              height={18}
              objectFit="cover"
            />
            <p>MATIC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PlatformDropdown = () => {
  const [dropdownActive, setDropDownActive] = useState(false);
  const handleClick = () => {
    setDropDownActive(!dropdownActive);
  };
  return (
    <div className="flex flex-col w-full gap-1">
      <p className="text-[#606E89] text-[10px]">Platform</p>
      <div
        className={clsx(
          'flex relative border border-[#313E56] flex justify-between py-[5px] px-[9px] w-full rounded-lg active:border-[#00AA72] cursor-pointer',
          dropdownActive && 'border-[#00AA72]',
        )}
        onClick={handleClick}
      >
        <p>All</p>
        {dropdownActive ? <ArrowUp /> : <ArrowDown />}
        <div
          className={clsx(
            'flex-col bg-[#1F2634] border border-[#434C5F] w-full rounded-lg absolute left-0 top-9 pt-1 border-t-[#1F2634] z-50',
            dropdownActive ? 'flex' : 'hidden',
          )}
        >
          <div className="flex gap-1.5 items-center p-[8px] px-[12px] cursor-pointer text-[#606E89] hover:bg-[#215353] hover:text-[#fff]">
            <Image
              src="/coins.png"
              alt="coins-image"
              width={18}
              height={18}
              objectFit="cover"
            />
            <p>CMC</p>
          </div>
          <div className="flex gap-1.5 items-center p-[8px] px-[12px] cursor-pointer text-[#606E89] hover:bg-[#215353] hover:text-[#fff]">
            <Image
              src="/coins.png"
              alt="coins-image"
              width={18}
              height={18}
              objectFit="cover"
            />
            <p>CG</p>
          </div>
          <div className="flex gap-1.5 items-center p-[8px] px-[12px] cursor-pointer text-[#606E89] hover:bg-[#215353] hover:text-[#fff]">
            <Image
              src="/coins.png"
              alt="coins-image"
              width={18}
              height={18}
              objectFit="cover"
            />
            <p>CMC & CG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KYCDropdown = () => {
  const [dropdownActive, setDropDownActive] = useState(false);
  const handleClick = () => {
    setDropDownActive(!dropdownActive);
  };
  return (
    <div className="flex flex-col w-full gap-1">
      <p className="text-[#606E89] text-[10px]">KYC</p>
      <div
        className={clsx(
          'flex relative border border-[#313E56] flex justify-between py-[5px] px-[9px] w-full rounded-lg active:border-[#00AA72] cursor-pointer z-40',
          dropdownActive && 'border-[#00AA72]',
        )}
        onClick={handleClick}
      >
        <p>All</p>
        {dropdownActive ? <ArrowUp /> : <ArrowDown />}
        <div
          className={clsx(
            'flex-col bg-[#1F2634] border border-[#434C5F] w-full rounded-lg absolute left-0 top-9 pt-1 border-t-[#1F2634]',
            dropdownActive ? 'flex' : 'hidden',
          )}
        >
          <div className="flex gap-1.5 items-center p-[8px] px-[12px] cursor-pointer text-[#606E89] hover:bg-[#215353] hover:text-[#fff]">
            <p>ALL</p>
          </div>
          <div className="flex gap-1.5 items-center p-[8px] px-[12px] cursor-pointer text-[#606E89] hover:bg-[#215353] hover:text-[#fff]">
            <p>YES</p>
          </div>
          <div className="flex gap-1.5 items-center p-[8px] px-[12px] cursor-pointer text-[#606E89] hover:bg-[#215353] hover:text-[#fff]">
            <p>NO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AuditDropdown = () => {
  const [dropdownActive, setDropDownActive] = useState(false);
  const handleClick = () => {
    setDropDownActive(!dropdownActive);
  };
  return (
    <div className="flex flex-col w-full gap-1">
      <p className="text-[#606E89] text-[10px]">AUDIT</p>
      <div
        className={clsx(
          'flex relative border border-[#313E56] flex justify-between py-[5px] px-[9px] w-full rounded-lg active:border-[#00AA72] cursor-pointer z-40',
          dropdownActive && 'border-[#00AA72]',
        )}
        onClick={handleClick}
      >
        <p>All</p>
        {dropdownActive ? <ArrowUp /> : <ArrowDown />}
        <div
          className={clsx(
            'flex-col bg-[#1F2634] border border-[#434C5F] w-full rounded-lg absolute left-0 top-9 pt-1 border-t-[#1F2634]',
            dropdownActive ? 'flex' : 'hidden',
          )}
        >
          <div className="flex gap-1.5 items-center p-[8px] px-[12px] cursor-pointer text-[#606E89] hover:bg-[#215353] hover:text-[#fff]">
            <p>ALL</p>
          </div>
          <div className="flex gap-1.5 items-center p-[8px] px-[12px] cursor-pointer text-[#606E89] hover:bg-[#215353] hover:text-[#fff]">
            <p>YES</p>
          </div>
          <div className="flex gap-1.5 items-center p-[8px] px-[12px] cursor-pointer text-[#606E89] hover:bg-[#215353] hover:text-[#fff]">
            <p>NO</p>
          </div>
        </div>
      </div>
    </div>
  );
};
