import { CDN_URL } from "../utils/constants";
import Ratings from "../components/commonComponents/Ratings";


const Card = (props) => {
  const { resData } = props;
  const { name, cuisines, sla, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;
  return (
    <>
      <div className="p-1 w-80 shadow-xl shadow-black-400 max-w-mdm-5 rounded-xl bg-white flex-col relative z-10 transition-all duration-300 transform hover:scale-110 hover:z-20 hover:shadow-xl hover:bg-white hover:cursor-pointer hover:shadow-grey-500">
        <img
          className="rounded-xl w-80 h-60"
          src={CDN_URL + cloudinaryImageId}
        />
        <h2 className="text-xl pt-2">{name}</h2>
        <h6 className="text-sm break-words whitespace-normal">
          {cuisines.join(", ")}
        </h6>
        <div className="flex text-sm justify-between">
          <h6 className="text-sm">{sla.deliveryTime} mins</h6>
          <h6 className="text-sm">{costForTwo}</h6>
          <Ratings>{avgRating}</Ratings>
        </div>
      </div>
    </>
  );
};
export default Card;
