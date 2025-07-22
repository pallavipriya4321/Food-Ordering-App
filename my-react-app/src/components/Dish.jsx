import React from "react";
import { CDN_URL } from "../utils/constants";

const Dish = (props) => {
  const { DishData } = props;
  const { name, description, price, imageId } = DishData;
  return (
    <>
      <div className="w-2/3 flex flex-row bg-gray-100 shadow-lg p-3 mt-3 mb-5 rounded-xl justify-between">
        <div className="flex flex-col h-40 font-bold">
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
    </>
  );
};

export default Dish;
