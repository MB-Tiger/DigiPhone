import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const ProductsFilter = (props) => {
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isRateOpen, setIsRateOpen] = useState(false);
  const {
    searchNameValue,
    setSearchNameValue,
    searchFromPriceValue,
    setsearchFromPriceValue,
    searchToPriceValue,
    setsearchToPriceValue,
    searchCompanyValue,
    setSearchCompanyValue,
    searchFromRateValue,
    setsearchFromRateValue,
    searchToRateValue,
    setsearchToRateValue,
  } = props;
  return (
    <div className="bg-white max-w-full shadow max-h-[500px] lg:ml-5 mx-5 mb-6 rounded-lg lg:col-span-1 col-span-4 lg:sticky lg:top-32 p-2">
      <h3 className="text-center text-xl font-bold mt-2">Filters</h3>
      <div className="mt-3 p-2">
        <label className="block mt-2">
          <div>Name</div>
          <input
            className="bg-gray-100 w-full p-1 mt-1 rounded-sm"
            type="search"
            value={searchNameValue}
            onChange={(e) => setSearchNameValue(e.target.value)}
          />
        </label>
        <label className="block mt-5">
          <div>Company</div>
          <input
            className="bg-gray-100 w-full p-1 mt-1 rounded-sm"
            type="search"
            value={searchCompanyValue}
            onChange={(e) => setSearchCompanyValue(e.target.value)}
          />
        </label>
        <label className="block mt-5">
          <div className="mb-2 flex justify-between items-center">
            <span>Price</span>
            <span
              className="cursor-pointer"
              onClick={() =>
                isPriceOpen == false
                  ? setIsPriceOpen(true)
                  : setIsPriceOpen(false)
              }
            >
              {isPriceOpen == false ? (
                <span className="text-xl">
                  <MdKeyboardArrowDown />
                </span>
              ) : (
                <span className="text-xl">
                  <MdKeyboardArrowUp />
                </span>
              )}
            </span>
          </div>
          {isPriceOpen == true ? (
            <>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 text-sm">From</span>
                <input
                  className="bg-gray-100 w-[85%] p-1 mt-1 rounded-sm"
                  type="number"
                  value={searchFromPriceValue}
                  onChange={(e) =>
                    setsearchFromPriceValue(Number(e.target.value))
                  }
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 text-sm">To</span>
                <input
                  className="bg-gray-100 w-[85%] p-1 mt-1 rounded-sm"
                  type="number"
                  value={searchToPriceValue}
                  onChange={(e) =>
                    setsearchToPriceValue(Number(e.target.value))
                  }
                />
              </div>
            </>
          ) : null}
        </label>
        <hr className="mt-5" />
        <label className="block mt-5">
          <div className="mb-2 flex justify-between items-center">
            <span>Rate</span>
            <span
              className="cursor-pointer"
              onClick={() =>
                isRateOpen == false ? setIsRateOpen(true) : setIsRateOpen(false)
              }
            >
              {isRateOpen == false ? (
                <span className="text-xl">
                  <MdKeyboardArrowDown />
                </span>
              ) : (
                <span className="text-xl">
                  <MdKeyboardArrowUp />
                </span>
              )}
            </span>
          </div>
          {isRateOpen == true ? (
            <>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 text-sm">From</span>
                <input
                  className="bg-gray-100 w-[85%] p-1 mt-1 rounded-sm"
                  type="number"
                  value={searchFromRateValue}
                  onChange={(e) =>
                    setsearchFromRateValue(Number(e.target.value))
                  }
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 text-sm">To</span>
                <input
                  className="bg-gray-100 w-[85%] p-1 mt-1 rounded-sm"
                  type="number"
                  value={searchToRateValue}
                  onChange={(e) => setsearchToRateValue(Number(e.target.value))}
                />
              </div>
            </>
          ) : null}
        </label>
      </div>
    </div>
  );
};

export default ProductsFilter;
