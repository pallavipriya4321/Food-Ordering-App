import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { name, cuisines, sla, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;
  return (
    <>
      <div className="p-1 w-80 shadow-md max-w-mdm-5 flex-col relative z-10 transition-all duration-300 transform hover:scale-120 hover:z-20 hover:shadow-xl/30">
        <img
          className="rounded-xl w-80 h-60"
          src={CDN_URL + cloudinaryImageId}
        />
        <h2 className="text-xl">{name}</h2>
        <h6 className="text-sm break-words whitespace-normal">
          {cuisines.join(", ")}
        </h6>
        <div className="flex text-sm justify-between">
          <h6 className="text-sm">{sla.deliveryTime} mins</h6>
          <h6 className="text-sm">{costForTwo}</h6>
          <h6>{avgRating}</h6>
        </div>
      </div>
    </>
  );
};
export default Card;
