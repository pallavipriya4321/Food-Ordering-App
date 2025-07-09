import Card from "./Card";
import { useEffect, useState } from "react";
import { API_URL, RESTURANTS } from "../utils/constants";
import InfoCard from "./common/InfoCard";

const Body = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // function to delay the execution
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      setIsDataLoading(true);
      const data = await fetch(`${API_URL}${RESTURANTS}`);
      const json = await data.json();
      console.log(json);
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setIsDataLoading(false);
    }
    catch(err){
      setIsError(true)
      console.log(err)
    }
    finally{
      setIsDataLoading(false);
    }
    
  };

  if (isDataLoading) {
    return <h1>Loading...</h1>;
  }

  if(isError){
    return (
      <div className="p-6">
        <InfoCard
          heading="Something went wrong"
          description="Please try after sometime."
          imageSrc="/images/contact.jpg"
        />
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="flex mt-5 ml-2 mr-2 flex-row justify-center">
          <input
            className="shadow appearance-none border rounded py-1 px-2 mx-3 text-gray-700 cursor-pointer"
            type="text"
            placeholder="Search"
          />
          {/* <Switch {...label} color="secondary" /> */}
          <button
            onClick={ () => handleClick(listOfRestaurants)}
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

function handleClick(listOfRestaurants){
  const filteredResList = resList.filter((res) => res.info.avgRating >= 4);
  setListOfRestaurants(filteredResList);
  return filteredResList;
}
export default Body;
