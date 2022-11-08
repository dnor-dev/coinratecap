import { NextPage } from 'next';
import React from 'react';
import Table from '../components/Table';

const Home: NextPage = () => {
  return (
    <div className="w-full lg:w-[1300px] md:w-[1200px] mx-auto lg:px-20 md:px-8">
      <Table />
    </div>
  );
};

export default Home;
