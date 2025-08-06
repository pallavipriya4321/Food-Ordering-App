import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantmenu.jsx";
import Dish from "./Dish.jsx";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);
  // console.log(resid);

  if (!resInfo || !resInfo.cards || !resInfo.cards[2]) {
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
  } = resInfo?.cards[2]?.card?.card?.info;

  const regularCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // Filter both NestedItemCategory and ItemCategory
  const itemCategories = regularCards?.filter((c) => {
    const type = c.card?.card?.["@type"];
    return (
      type ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
      type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  // Extract all itemCards
  const allItemCards = itemCategories?.flatMap((category) => {
    if (category.card?.card?.categories) {
      // For NestedItemCategory
      return category.card.card.categories.flatMap(
        (cat) => cat.itemCards || []
      );
    } else {
      // For ItemCategory
      return category.card.card.itemCards || [];
    }
  });

  const uniqueItemCards = [];
  const seen = new Set();

  allItemCards.forEach((item) => {
    const id = item?.card?.info?.id;
    if (id && !seen.has(id)) {
      seen.add(id);
      uniqueItemCards.push(item);
    }
  });

  // console.log(allItemCards);
  console.log(itemCategories);

  return (
    <>
      <div className="flex flex-col items-center bg-white p-5 mt-5 rounded-3xl shadow-2xl">
        <div className="w-2/3 flex flex-col bg-gray-100 shadow-lg p-3 rounded-3xl mb-5">
          <h1 className="font-bold text-3xl ml-3 mt-3">{name}</h1>
          <div className="flex flex-row p-5 h-40 font-bold bg-white rounded-2xl justify-between shadow-2xl m-3">
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

        {itemCategories.map((category) => (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            category={category.card.card}
            uniqueItemCards={uniqueItemCards}
          />
        ))}

        {/* {uniqueItemCards?.map((item) => (
          <Dish key={item.card.info.id} DishData={item.card.info} />
        ))} */}
      </div>
    </>
  );
};

export default RestaurantMenu;
