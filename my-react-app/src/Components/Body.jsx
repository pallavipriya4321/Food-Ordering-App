import Card from "./Card";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <>
      <div>
        <div className="flex m-2 flex-row justify-center">
          <input
            className="shadow appearance-none border rounded py-1 px-2 mx-3 text-gray-700 cursor-pointer"
            type="text"
            placeholder="Search"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer">
            Search
          </button>
          <button
            onClick={(listOfRestaurants) => {
              const filteredResList = resList.filter(
                (res) => res.info.avgRating >= 4
              );
              setListOfRestaurants(filteredResList);
            }}
            className="mx-2 hover:cursor-pointer bg-gray-200 hover:bg-gray-600 hover:text-white font-semibold py-2 px-4 rounded"
          >
            Best Rated
          </button>
        </div>

        <div className="flex flex-row flex-wrap m-1 gap-1">
          {listOfRestaurants.map((restaurant) => (
            <Card key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
