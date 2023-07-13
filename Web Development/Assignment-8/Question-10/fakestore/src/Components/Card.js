import React from "react";

const Card = ({ img, title, price }) => {
  return (
    <div className="w-full max-w-sm bg-[#1F1F27] border border-gray-200 rounded-lg shadow">
      <div className="flex flex-col items-center py-4">
        <img
          className="w-64 h-64 mb-3 rounded-lg shadow-lg"
          src={img}
          alt="Product"
        />
        <h5 className="mb-1 px-2 text-xl font-medium text-white text-center">{title}</h5>
        <span className="text-lg text-white">${price}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
            Add to Cart
          </div>
          <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
