import React, { useState } from "react";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const ProductDetails = (props) => {
  const { product } = props;
  const [isIntroduction, setIsIntroduction] = useState(true);
  const [isSpecifications, setIsSpecifications] = useState(false);
  const [isComments, setIsComments] = useState(false);

  return (
    <div className="bg-white mb-3 rounded p-2 text-gray-600 shadow my-10">
      <div>
        <ul className="flex justify-center space-x-10 py-2 border-b">
          <li
            className="cursor-pointer hover:border-b-2 hover:border-red-500 py-1"
            onClick={() => {
              setIsComments(true);
              setIsSpecifications(false);
              setIsIntroduction(false);
            }}
          >
            Comments
          </li>
          <li
            className="cursor-pointer hover:border-b-2 hover:border-red-500 py-1"
            onClick={() => {
              setIsComments(false);
              setIsSpecifications(true);
              setIsIntroduction(false);
            }}
          >
            Specifications
          </li>
          <li
            className="cursor-pointer hover:border-b-2 hover:border-red-500 py-1"
            onClick={() => {
              setIsComments(false);
              setIsSpecifications(false);
              setIsIntroduction(true);
            }}
          >
            Introduction
          </li>
        </ul>
        <div>
          {isIntroduction == true ? (
            <div className="px-4 py-6 text-black">{product.about}</div>
          ) : null}
          {isSpecifications == true ? (
            <div className="px-4 py-6 text-black">
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  Dimensions
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.Dimensions}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  Weight
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.weight}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  Sim Number
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.simNumber}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  Chip
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.chip}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  CPU
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.cpu}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  Processor Type
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.processorType}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  Internal Memory
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.internalMemory}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  RAM
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.ram}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  Memory Card Support
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.memoryCardSupport}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  Display Technology
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.displayTechnology}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  Screen Size
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.screenSize}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  Resolution
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.resolution}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  Networks
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.networks}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  Photo Resolution
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.photoResolution}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  OS
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.os}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  OS Version
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.osVersion}
                </p>
              </div>
              <div className="flex flex-wrap justify-start items-center space-x-5">
                <p className="md:w-1/5 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  Battery Specifications
                </p>
                <p className="md:w-3/4 w-full bg-gray-100 p-2 my-2 rounded-sm">
                  {product.attributes.batterySpecifications}
                </p>
              </div>
            </div>
          ) : null}
          {isComments == true ? (
            <div className="w-full grid grid-cols-4 bg-white px-4 py-6">
              <div className="lg:sticky top-[80px] lg:col-span-1 col-span-4 space-y-2 mb-5 lg:mb-0">
                <div>
                  <span className="text-xl font-medium">{product.rate}</span> /
                  5
                </div>
                <Rating
                  emptySymbol={
                    <AiOutlineStar className="text-4xl text-yellow-400" />
                  }
                  fullSymbol={
                    <AiFillStar className="text-4xl text-yellow-400" />
                  }
                  placeholderRating={product.rate}
                  placeholderSymbol={
                    <AiFillStar className="text-4xl text-yellow-400" />
                  }
                  fractions={10}
                  readonly
                />
                {/* <div className="text-sm">
                  Leave a comment about this article
                </div> */}
                <div></div>
                <button className="border border-red-500 bg-white p-1 text-red-500 rounded-md w-full">
                  Sumbit comment
                </button>
              </div>
              <div className="w-full lg:col-span-3 lg:pl-10 col-span-4 mt-5 lg:mt-0">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-4 h-1 rounded-full bg-yellow-600"></div>
                  <div className="font-medium">
                    Leave a comment about this article
                  </div>
                </div>
                <textarea
                  className="w-full border-2 rounded p-2"
                  placeholder="Write here ..."
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
