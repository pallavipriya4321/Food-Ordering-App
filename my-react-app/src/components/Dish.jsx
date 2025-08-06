import React from "react";
import { CDN_URL } from "../utils/constants";

const Dish = ({ DishData, accordion }) => {
  const { name, description, price, imageId } = DishData;
  return (
    <>
      {accordion && (
        <div className=" flex flex-row bg-gray-50 shadow-2xs p-3 mt-3 mb-5 rounded-xl justify-between hover:shadow-lg hover:bg-white hover:cursor-pointer">
          <div className="flex flex-col w-3/4 font-bold">
            <h1 className="font-bold text-xl ml-3 mt-3">{name}</h1>
            <h1 className="font-bold text-lg ml-3 mt-3">Rs {price / 100}</h1>
            <h1 className="font-medium text-sm ml-3 mt-3 text-gray-600">
              {description}
            </h1>
          </div>
          <div className="flex items-center m-2">
            <img
              className="w-40 h-35 rounded-3xl items-end"
              src={`${CDN_URL}` + imageId}
            ></img>
          </div>
        </div>
      )}
    </>
  );
};

export default Dish;
