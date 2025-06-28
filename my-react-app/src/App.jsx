import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import logo from "./assets/logo.jpg";
import food from "./assets/food.jpeg";

const resObj = {
  info: {
    id: "185159",
    name: "KFC",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/49275558-8487-4cf2-8acf-dbb3a78bcac8_185159.JPG",
    locality: "Andheri Kurla Road",
    areaName: "Kanakia Wall Street",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
    avgRating: 4.3,
    parentId: "547",
    avgRatingString: "4.3",
    totalRatingsString: "18K+",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 2.7,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-06-29 04:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
          description: "bolt!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹59",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.1",
        ratingCount: "1.1K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-edc89324-8f8b-4d62-96ee-f0af22b70910",
  },
  cta: {
    link: "https://www.swiggy.com/city/mumbai/kfc-andheri-kurla-road-kanakia-wall-street-rest185159",
    type: "WEBLINK",
  },
};

const Header = () => {
  return (
    <div className="flex justify-between border-1 m-1">
      <div class="w-20 h-20 flex justify-center items-center ">
        <img src={logo} alt="logo" class=""></img>
      </div>
      <div class="flex flex-row gap-5 px-10 m-2 items-center">
        <h1 class="text-xl">Home</h1>
        <h1 class="text-xl">About Us</h1>
        <h1 class="text-xl">Contacts</h1>
        <h1 class="text-xl">Cart</h1>
      </div>
    </div>
  );
};

const Card = (props) => {
  // const [resData] = props;

  return (
    <>
      <div class="p-1 w-50 shadow-md max-w-mdm-5 flex-col hover:border rounded">
        <img class="w-50 h-40" src={food} />
        <h2 class="text-xl">{props.resName}</h2>
        <h6 class="text-sm break-words whitespace-normal">
          Indian, Continental, Italian, Chinese, Thai, Japanese
        </h6>
        <div class="flex text-sm justify-between">
          <h6 class="text-sm">24 minutes</h6>
          <h6>4.5 * Rating</h6>
        </div>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div>
        <div class="flex m-2 flex-row justify-center">
          <input
            class="shadow appearance-none border rounded py-1 px-2 mx-3 text-gray-700 cursor-pointer"
            type="text"
            placeholder="Search"
          />
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer">
            Search
          </button>
        </div>

        <div class="flex flex-row flex-wrap m-1 gap-1">
          {/* <Card resName="Domino's Pizza" resPrice="₹400 for two" /> */}
          <Card resData="Dominpo's" />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div class="flex bg-black text-white justify-center mt-4 w-screen">
        <h4>Made with Love by Pallavi</h4>
      </div>
    </>
  );
};

export default function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
