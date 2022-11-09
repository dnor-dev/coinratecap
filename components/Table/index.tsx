import React from 'react';
import Image from 'next/image';
import { Favorites } from '../Icons';
import { useRouter } from 'next/router';

const Table = () => {
  const { push } = useRouter();
  return (
    <div className="flex w-full overflow-x-scroll">
      <table className="table-auto w-full border-collapse">
        <thead className="bg-[#151B26] w-full h-[61px] text-[14px] text-[#4F596D]">
          <tr className="whitespace-nowrap">
            <th className="sticky-col">
              <div className="flex justify-between h-full">
                <div className="flex gap-2 bg-[#151B26] h-full w-full self-center items-center pl-4">
                  <div>#</div>
                  <div>Coin</div>
                </div>
                <div className="linear-grad border-l border-[#252D3D] w-[27px]"></div>
              </div>
            </th>
            <th className="p-4 pl-8 text-left font-normal hidden lg:table-cell md:table-cell">
              #
            </th>
            <th className="p-4 pl-8 text-left font-normal hidden lg:table-cell md:table-cell">
              Coin
            </th>
            <th className="p-4 pl-8 text-left font-normal hidden lg:table-cell md:table-cell">
              Name
            </th>
            <th className="p-4 pl-8 text-left font-normal">Badges</th>
            <th className="p-4 pl-8 text-left font-normal">Chain</th>
            <th className="p-4 pl-8 text-left font-normal">Market Cap</th>
            <th className="p-4 pl-8 text-left font-normal">Price</th>
            <th className="p-4 pl-8 text-left font-normal">Change 24h</th>
            <th className="p-4 pl-8 text-left font-normal">Launch</th>
            <th className="p-4 pl-8 text-left font-normal">Votes</th>
            <th className="p-4 pl-8 text-left font-normal">Votes 24h</th>
            <th className="p-4 pl-8 text-left font-normal"></th>
            <th className="p-4 pl-8 text-left font-normal"></th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          <tr
            className="cursor-pointer border-b border-[#252D3D]"
            onClick={() => push('/coins/123')}
          >
            <td className="sticky-col-2">
              <div className="flex justify-between h-full">
                <div className="flex gap-2 bg-[#1e2635] h-full w-full self-center items-center text-[10px] pl-4">
                  <div>1</div>
                  <Image
                    src="/coins.png"
                    alt="coins-image"
                    width={32}
                    height={32}
                  />
                  <div>
                    <h5 className="font-bold">JWT</h5>
                    <p className="text-[#868D9A] break-normal">
                      JamesWebb Token
                    </p>
                  </div>
                </div>
                <div className="linear-grad border-l border-[#252D3D] w-[27px]"></div>
              </div>
            </td>
            <td className="p-4 pl-8 text-left hidden lg:table-cell md:table-cell">
              1
            </td>
            <td className="p-4 pl-8 text-left hidden lg:table-cell md:table-cell">
              <Image
                src="/coins.png"
                alt="coins-image"
                width={50}
                height={50}
              />
            </td>
            <td className="p-4 pl-8 text-left hidden lg:table-cell md:table-cell">
              <div className="flex-col">
                <h5 className="font-bold">JWT</h5>
                <p className="text-[#868D9A]">JamesWebb Token</p>
              </div>
            </td>
            <td className="p-4 pl-8 text-left"></td>
            <td className="p-4 pl-8 text-left">
              <div className="flex gap-1 items-center justify-start">
                <Image
                  src="/coins.png"
                  alt="coins-image"
                  width={21}
                  height={21}
                />
                <p>BSC</p>
              </div>
            </td>
            <td className="p-4 pl-8 text-left">$ 3,221,885,496,902,799,872</td>
            <td className="p-4 pl-8 text-left">$ 34747.5345</td>
            <td className="p-4 pl-8 text-left">-</td>
            <td className="p-4 pl-8 text-left">10 months ago</td>
            <td className="p-4 pl-8 text-left">596</td>
            <td className="p-4 pl-8 text-left text-primary-1">
              <div className="flex gap-1.5 items-center justify-center">
                <i className="fa fa-caret-up" aria-hidden="true"></i>
                <p>0</p>
              </div>
            </td>
            <td className="p-4 pl-8 text-left">
              <button className="bg-primary-1 shadow-md ease-out duration-200 hover:bg-[#00b89c] font-semibold px-8 py-1.5 text-white rounded-md">
                Vote
              </button>
            </td>
            <td className="p-4 pl-8 text-left cursor-pointer">
              <Favorites />
            </td>
          </tr>

          <tr
            className="cursor-pointer border-b border-[#252D3D]"
            onClick={() => push('/coins/123')}
          >
            <td className="sticky-col-2">
              <div className="flex justify-between h-full">
                <div className="flex gap-2 bg-[#1e2635] h-full w-full self-center items-center text-[10px] pl-4">
                  <div>2</div>
                  <Image
                    src="/dogo-coins.png"
                    alt="coins-image"
                    width={32}
                    height={32}
                  />
                  <div>
                    <h5 className="font-bold">DOGO</h5>
                    <p className="text-[#868D9A] break-normal">DOGODOGE</p>
                  </div>
                </div>
                <div className="linear-grad border-l border-[#252D3D] w-[27px]"></div>
              </div>
            </td>
            <td className="p-4 pl-8 text-left hidden lg:table-cell md:table-cell">
              2
            </td>
            <td className="p-4 pl-8 text-left hidden lg:table-cell md:table-cell">
              <Image
                src="/dogo-coins.png"
                alt="coins-image"
                width={50}
                height={50}
              />
            </td>
            <td className="p-4 pl-8 text-left hidden lg:table-cell md:table-cell">
              <div className="flex-col">
                <h5 className="font-bold">DOGO</h5>
                <p className="text-[#868D9A]">DOGODOGE</p>
              </div>
            </td>
            <td className="p-4 pl-8 text-left">
              <span className="kyc-badge">
                <i className="fas fa-shield-alt"></i>
                KYC
              </span>
              <br />
              <span className="audit-badge mt-1">
                <i className="fas fa-shield-alt"></i>
                Audit
              </span>
            </td>
            <td className="p-4 pl-8 text-left">
              <div className="flex gap-1 items-center justify-start">
                <Image
                  src="/eth.png"
                  alt="coins-image"
                  width={21}
                  height={21}
                />
                <p>ETH</p>
              </div>
            </td>
            <td className="p-4 pl-8 text-left">-</td>
            <td className="p-4 pl-8 text-left">-</td>
            <td className="p-4 pl-8 text-left">-</td>
            <td className="p-4 pl-8 text-left">In 2 months</td>
            <td className="p-4 pl-8 text-left">519,444</td>
            <td className="p-4 pl-8 text-left text-primary-1">
              <div className="flex gap-1.5 items-center justify-center">
                <i className="fa fa-caret-up" aria-hidden="true"></i>
                <p>51,205</p>
              </div>
            </td>
            <td className="p-4 pl-8 text-left">
              <button className="bg-primary-1 shadow-md ease-out duration-200 hover:bg-[#00b89c] font-semibold px-8 py-1.5 text-white rounded-md">
                Vote
              </button>
            </td>
            <td className="p-4 pl-8 text-left cursor-pointer">
              <Favorites />
            </td>
          </tr>

          <tr
            className="cursor-pointer border-b border-[#252D3D]"
            onClick={() => push('/coins/123')}
          >
            <td className="sticky-col-2">
              <div className="flex justify-between h-full">
                <div className="flex gap-2 bg-[#1e2635] h-full w-full self-center items-center text-[10px] pl-4">
                  <div>3</div>
                  <Image
                    src="/dogo-coins.png"
                    alt="coins-image"
                    width={32}
                    height={32}
                  />
                  <div>
                    <h5 className="font-bold">DOGO</h5>
                    <p className="text-[#868D9A] break-normal">DOGODOGE</p>
                  </div>
                </div>
                <div className="linear-grad border-l border-[#252D3D] w-[27px]"></div>
              </div>
            </td>
            <td className="p-4 pl-8 text-left hidden lg:table-cell md:table-cell">
              3
            </td>
            <td className="p-4 pl-8 text-left hidden lg:table-cell md:table-cell">
              <Image
                src="/dogo-coins.png"
                alt="coins-image"
                width={50}
                height={50}
              />
            </td>
            <td className="p-4 pl-8 text-left hidden lg:table-cell md:table-cell">
              <div className="flex-col">
                <h5 className="font-bold">DOGO</h5>
                <p className="text-[#868D9A]">DOGODOGE</p>
              </div>
            </td>
            <td className="p-4 pl-8 text-left">
              <span className="kyc-badge">
                <i className="fas fa-shield-alt"></i>
                KYC
              </span>
              <br />
              <span className="audit-badge mt-1">
                <i className="fas fa-shield-alt"></i>
                Audit
              </span>
            </td>
            <td className="p-4 pl-8 text-left">
              <div className="flex gap-1 items-center justify-start">
                <Image
                  src="/eth.png"
                  alt="coins-image"
                  width={21}
                  height={21}
                />
                <p>ETH</p>
              </div>
            </td>
            <td className="p-4 pl-8 text-left">-</td>
            <td className="p-4 pl-8 text-left">-</td>
            <td className="p-4 pl-8 text-left">-</td>
            <td className="p-4 pl-8 text-left">In 2 months</td>
            <td className="p-4 pl-8 text-left">519,444</td>
            <td className="p-4 pl-8 text-left text-primary-1">
              <div className="flex gap-1.5 items-center justify-center">
                <i className="fa fa-caret-up" aria-hidden="true"></i>
                <p>51,205</p>
              </div>
            </td>
            <td className="p-4 pl-8 text-left">
              <button className="bg-primary-1 shadow-md ease-out duration-200 hover:bg-[#00b89c] font-semibold px-8 py-1.5 text-white rounded-md">
                Vote
              </button>
            </td>
            <td className="p-4 pl-8 text-left cursor-pointer">
              <Favorites />
            </td>
          </tr>

          <tr
            className="cursor-pointer border-b border-[#252D3D]"
            onClick={() => push('/coins/123')}
          >
            <td className="sticky-col-2">
              <div className="flex justify-between h-full">
                <div className="flex gap-2 bg-[#1e2635] h-full w-full self-center items-center text-[10px] pl-4">
                  <div>4</div>
                  <Image
                    src="/h2m.png"
                    alt="coins-image"
                    width={32}
                    height={32}
                  />
                  <div>
                    <h5 className="font-bold">H2M</h5>
                    <p className="text-[#868D9A] break-normal">Hold2Moon</p>
                  </div>
                </div>
                <div className="linear-grad border-l border-[#252D3D] w-[27px]"></div>
              </div>
            </td>
            <td className="p-4 pl-8 text-left hidden lg:table-cell md:table-cell">
              4
            </td>
            <td className="p-4 pl-8 text-left hidden lg:table-cell md:table-cell">
              <Image src="/h2m.png" alt="coins-image" width={50} height={50} />
            </td>
            <td className="p-4 pl-8 text-left hidden lg:table-cell md:table-cell">
              <div className="flex-col">
                <h5 className="font-bold">H2M</h5>
                <p className="text-[#868D9A]">Hold2Moon</p>
              </div>
            </td>
            <td className="p-4 pl-8 text-left">
              <span className="kyc-badge">
                <i className="fas fa-shield-alt"></i>
                KYC
              </span>
              <br />
              <span className="audit-badge mt-1">
                <i className="fas fa-shield-alt"></i>
                Audit
              </span>
            </td>
            <td className="p-4 pl-8 text-left">
              <div className="flex gap-1 items-center justify-start">
                <Image
                  src="/eth.png"
                  alt="coins-image"
                  width={21}
                  height={21}
                />
                <p>ETH</p>
              </div>
            </td>
            <td className="p-4 pl-8 text-left">-</td>
            <td className="p-4 pl-8 text-left">-</td>
            <td className="p-4 pl-8 text-left">-</td>
            <td className="p-4 pl-8 text-left">In 2 months</td>
            <td className="p-4 pl-8 text-left">519,444</td>
            <td className="p-4 pl-8 text-left text-primary-1">
              <div className="flex gap-1.5 items-center justify-center">
                <i className="fa fa-caret-up" aria-hidden="true"></i>
                <p>51,205</p>
              </div>
            </td>
            <td className="p-4 pl-8 text-left">
              <button className="bg-primary-1 shadow-md ease-out duration-200 hover:bg-[#00b89c] font-semibold px-8 py-1.5 text-white rounded-md">
                Vote
              </button>
            </td>
            <td className="p-4 pl-8 text-left cursor-pointer">
              <Favorites />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
