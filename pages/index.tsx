import { NextPage } from 'next';
import React from 'react';
import { ArrowDown } from '../components/Icons';
import Table from '../components/Table';
import {
  ChainDropdown,
  PlatformDropdown,
  KYCDropdown,
  AuditDropdown,
} from '../components/Dropdowns';

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:w-[1300px] mx-auto lg:px-16 md:px-8 mt-10">
        <div className="coins mb-4 lg:px-0 md:px-0 px-2">
          <h2 className="mb-4 text-[1.5rem]">Coins</h2>
          <div className="dropdowns grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-2 w-full items-center">
            <ChainDropdown />
            <PlatformDropdown />
            <KYCDropdown />
            <AuditDropdown />
            <div className="flex self-end">
              <a
                href="#"
                className="text-[#00AA72] no-underline text-[1em] h-[30px]"
              >
                Reset Filters
              </a>
            </div>
          </div>
        </div>
      </div>

      <Table />
    </div>
  );
};

export default Home;
