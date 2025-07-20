import Card from "./Card";
import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const label = { inputProps: { "aria-label": "Switch demo" } };
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("Search");
  const [originialList, setOriginialList] = useState([]);
  const [match, setMatch] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${API_URL}/restaurants`);
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOriginialList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div>
        <div className="flex mt-5 ml-2 mr-2 flex-row justify-center">
          <input
            className="shadow appearance-none border rounded py-1 px-2 mx-3 text-gray-700 cursor-pointer"
            type="text"
            value={searchText}
            onClick={() => {
              setSearchText("");
            }}
            onChange={(e) => {
              setSearchText(e.target.value);
              const filteredResList = originialList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );

              // searchText === "" && searchText === "Search";

              filteredResList?.length > 0
                ? setListOfRestaurants(filteredResList)
                : setListOfRestaurants(originialList);
              filteredResList?.length > 0 ? setMatch(true) : setMatch(false);

              console.log(filteredResList);
            }}
          />

          <Switch {...label} color="secondary" />

          <button
            onClick={() => {
              const filteredResList = originialList.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setListOfRestaurants(filteredResList);
            }}
            className="mx-2 hover:cursor-pointer bg-gray-200 hover:bg-gray-600 hover:text-white font-semibold py-2 px-4 rounded"
          >
            Best Rated
          </button>
        </div>
        <div className="flex justify-center mt-5">
          <h5>{match ? "" : "No Restaurants Found"}</h5>
        </div>

        <div className=" mt-10 ml-8 mr-8 grid grid-cols-4 gap-2">
          {listOfRestaurants.map((restaurant) => (
            <Link to={"restaurants/" + restaurant.info.id}>
              <Card key={restaurant.info.id} resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
