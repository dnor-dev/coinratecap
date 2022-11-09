import React from 'react';

const CoinInfo = () => {
  return (
    <div className="px-[30px] py-[20px] bg-[#222C3F] border border-[#313E56] mb-4 rounded-lg">
      <h2 className="charts text-[18px] font-medium mb-[0.5em]">
        Coin Information
      </h2>
      <div className="status flex flex-col gap-1">
        <div className="details border-b border-[#313E56] lg:text-[16px] md:text-[16px] text-[14px] font-normal flex items-center justify-between py-[8px]">
          <p className="text-[#787A8D]">KYC:</p>
          <div>
            <p className="text-right leading-none">
              Not KYC verified.
              <br />
              <a href="#" className="text-[#00AA72] text-[0.75rem]">
                Incorrect? Contact us.
              </a>
            </p>
          </div>
        </div>
        <div className="details border-b border-[#313E56] lg:text-[16px] md:text-[16px] text-[14px] font-normal flex items-center justify-between py-[8px]">
          <p className="text-[#787A8D]">Audit:</p>
          <div>
            <p className="text-right leading-none">
              Not Audited.
              <br />
              <a href="#" className="text-[#00AA72] text-[0.75rem]">
                Incorrect? Contact us.
              </a>
            </p>
          </div>
        </div>
        <div className="details border-b border-[#313E56] lg:text-[16px] md:text-[16px] text-[14px] font-normal flex items-center justify-between py-[8px]">
          <p className="text-[#787A8D]">Listing Status:</p>
          <div>
            <p className="text-right leading-none">
              500 / 500{' '}
              <span className="bg-[#00AA72] py-[5px] px-[10px] rounded-md font-medium ml-3 text-[#fff]">
                LISTED
              </span>
            </p>
          </div>
        </div>
        <div className="details border-b border-[#313E56] lg:text-[16px] md:text-[16px] text-[14px] font-normal flex items-center justify-between py-[8px]">
          <p className="text-[#787A8D]">Launch:</p>
          <div>
            <p className="text-right leading-none">May 25 2022</p>
          </div>
        </div>
        <div className="details border-b border-[#313E56] lg:text-[16px] md:text-[16px] text-[14px] font-normal flex items-center justify-between py-[8px]">
          <p className="text-[#787A8D]">Votes:</p>
          <div>
            <p className="text-right leading-none">521</p>
          </div>
        </div>
        <div className="details border-b border-[#313E56] lg:text-[16px] md:text-[16px] text-[14px] font-normal flex items-center justify-between py-[8px]">
          <p className="text-[#787A8D]">Votes Today:</p>
          <div>
            <p className="text-right leading-none text-[#00AA72] flex items-center gap-1">
              <i className="fa fa-caret-up" aria-hidden="true"></i>
              <span>0</span>
            </p>
          </div>
        </div>

        <div className="vote-button mt-4">
          <button className="bg-[#00AA72] hover:bg-[#00d1b2] w-full btn-shadow rounded-md text-[14px] font-semibold py-[10px] px-[25px]">
            VOTE FOR 69 Inu
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
