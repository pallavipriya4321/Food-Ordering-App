import React, { useState } from "react";
import { API_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Dish from "./Dish.jsx";

const RestaurantMenu = () => {
  const [MenuData, setMenuData] = useState(null);

  const { resid } = useParams();
  console.log(resid);

  useEffect(() => {
    fetchMenuData();
  }, [resid]);

  const fetchMenuData = async () => {
    const data = await fetch(`${API_URL}/restaurants/${resid}`);
    const json = await data.json();
    console.log(json);
    setMenuData(json.data);
  };

  if (!MenuData) {
    return <h1>Loading...</h1>;
  }

  const {
    name,
    costForTwoMessage,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    totalRatingsString,
  } = MenuData?.cards[2]?.card?.card?.info;

  //   console.log(
  //     MenuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
  //       ?.card?.categories[0]?.itemCards[1]?.card?.info?.name
  //   );

  const regularCards =
    MenuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const nestedCategories = regularCards?.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

  const allItemCards = nestedCategories
    ?.flatMap((cat) => cat.card?.card?.categories || [])
    ?.flatMap((category) => category.itemCards || []);

  console.log(allItemCards);
  console.log(nestedCategories);

  //   console.log(MenuCards[2].card.info.name);

  return (
    <>
      <div className="flex flex-col items-center bg-white p-5 mt-5 rounded-3xl shadow-2xl">
        <div className="w-2/3 flex flex-col bg-gray-100 shadow-lg p-3 rounded-3xl mb-5">
          <h1 className="font-bold text-3xl ml-3 mt-3">{name}</h1>
          <div className="flex flex-row p-5 h-40 font-bold bg-white rounded-4xl justify-between shadow-2xl m-3">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <h2>✮ {avgRating} </h2>

                <h2>({totalRatingsString})</h2>
              </div>
              <div>
                <h2>{costForTwoMessage}</h2>
              </div>
              <u className="text-orange-700 underline">
                <h2 className="font-bold text-xl mt-5 text-orange-700">
                  {cuisines.join(", ")}
                </h2>
              </u>

              <h2 className="font-bold text-md text-center mt-2">
                Expected Delivery Time:
                {sla.deliveryTime} mins
              </h2>
            </div>
            <div className="flex justify-end items-center">
              <img
                className="w-30 h-30 rounded-full items-end"
                src={`${CDN_URL}` + cloudinaryImageId}
              />
            </div>
          </div>
        </div>

        {allItemCards?.map((item) => (
          <Dish
            key={item.card.info.id}
            DishData={item.card.info}
            //   {item.card.info.name}-{" Rs "}
            //   {item.card.info.price / 100}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
