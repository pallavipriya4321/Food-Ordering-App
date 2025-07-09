import { CDN_URL } from "../utils/constants";

const Card = ({
  resData: {
    info: {
      name = "",
      cuisines = [],
      sla = {},
      costForTwo = "",
      avgRating = "",
      cloudinaryImageId = "",
    } = {},
  } = {},
}) => {
  // Build cuisines string only once
  const cuisinesText = Array.isArray(cuisines) ? cuisines.join(", ") : "";

  // Protect image source and alt attribute
  const imgSrc = cloudinaryImageId ? CDN_URL + cloudinaryImageId : "";
  const imgAlt = name ? name : "Restaurant image";

  return (
    <div className="p-1 w-80 shadow-md max-w-mdm-5 flex-col relative z-10 transition-all duration-300 transform 
      hover:bg-white hover:scale-120 hover:z-20 hover:shadow-xl/30"
    >
      {imgSrc && (
        <img
          className="rounded-xl w-80 h-60"
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
        />
      )}
      <div className="mt-2 flex justify-center">
        <h2 className="text-xl center-align">{name}</h2>
      </div>
      {cuisinesText && (
        <h6 className="text-sm break-words whitespace-normal">{cuisinesText}</h6>
      )}
      <div className="flex text-sm justify-between">
        <h6 className="text-sm">{sla?.deliveryTime ? `${sla.deliveryTime} mins` : null}</h6>
        <h6 className="text-sm">{costForTwo}</h6>
        <h6>{avgRating}</h6>
      </div>
    </div>
  );
};

export default Card;
