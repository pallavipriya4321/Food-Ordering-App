import Card from "./Card";
import resList from "../utils/mockdata";
import { useState } from "react";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <>
      <div>
        <div className="flex mt-5 ml-2 mr-2 flex-row justify-center">
          <input
            className="shadow appearance-none border rounded py-1 px-2 mx-3 text-gray-700 cursor-pointer"
            type="text"
            placeholder="Search"
          />
          <Switch {...label} color="secondary" />
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

        <div className="mt-10 ml-8 mr-8 grid grid-cols-4 gap-2">
          {listOfRestaurants.map((restaurant) => (
            <Card key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
