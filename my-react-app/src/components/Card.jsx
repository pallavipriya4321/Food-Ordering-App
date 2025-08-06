import { CDN_URL } from "../utils/constants";
import Ratings from "../components/commonComponents/Ratings";


const Card = (props) => {
  const { resData } = props;
  const { name, cuisines, sla, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;
  return (
    <>
      <div className="p-1 mb-10 w-80 shadow-xl shadow-black-400 max-w-mdm-5 rounded-xl bg-white flex-col relative z-10 transition-all duration-300 transform hover:scale-110 hover:z-20 hover:shadow-xl hover:bg-white hover:cursor-pointer hover:shadow-grey-500">
        <img
          className="rounded-xl w-80 h-60"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="mx-2 mt-2 flex flex-col justify-between">
          <h2 className="text-xl font-medium">{name}</h2>
          <h6 className="text-sm">{cuisines.join(", ")}</h6>
        </div>
        <div className="flex text-sm justify-between mx-2 mt-2">
          <h6 className="text-sm">{sla.deliveryTime} mins</h6>
          <h6 className="text-sm">{costForTwo}</h6>
          <Ratings>{avgRating}</Ratings>
        </div>
      </div>
    </>
  );
};
export default Card;
