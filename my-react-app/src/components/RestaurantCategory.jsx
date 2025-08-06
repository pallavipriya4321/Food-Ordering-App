import React, { useState } from "react";
import Dish from "./Dish";

const RestaurantCategory = ({ category }) => {
  const [accordion, setAccordion] = useState(false);
  if (!category || !category.itemCards) {
    return null; // or return <div>No items found</div>;
  }
  const { title, itemCards } = category;
  //   console.log(itemCards[0].card);

  return (
    <>
      <div className="w-2/3 flex flex-col bg-gray-50 rounded-lg px-3 mt-3 mb-3 borde border-b-2">
        <div className="text-3xl font-bold mt-3 mx-3 justify-between flex flex-row items-center">
          <div>
            {title}({itemCards.length})
          </div>
          <button
            onClick={() => setAccordion(!accordion)}
            className="cursor-pointer"
          >
            {accordion ? "⬆️" : "⬇️"}
          </button>
        </div>

        <div className="m-5">
          {itemCards.map((item) => (
            <Dish
              key={item?.card?.info?.id}
              DishData={item.card.info}
              accordion={accordion}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default RestaurantCategory;
