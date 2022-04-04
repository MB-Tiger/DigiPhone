import React, { useState } from "react";

const ProductDetails = (props) => {
  const [isIntroduction, setIsIntroduction] = useState(true);
  const [isSpecifications, setIsSpecifications] = useState(false);
  const [isComments, setIsComments] = useState(false);
  const { product } = props;
  console.log(product.attributes);
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
          {isComments == true ? <div className="px-4 py-6">c</div> : null}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
