// import { useEffect, useState } from "react";
// import { API_URL } from "../utils/constants";

// const useRestaurantMenu = (resid) => {
//   const [resInfo, setResInfo] = useState(null);
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     const data = fetch(`${API_URL}/restaurants/${resid}`);
//     const json = (await data).json();
//     setResInfo(json);
//   };
//   return resInfo;
// };

// export default useRestaurantMenu;

import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

const useRestaurantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/restaurants/${resid}`);
        const json = await response.json();
        console.log(json);

        setResInfo(json.data);
      } catch (error) {
        console.error("Failed to fetch restaurant menu:", error);
        setResInfo(null); // optional: clear on error
      }
    };

    if (resid) {
      fetchData();
    }
  }, [resid]); // 👈 dependency on resid

  return resInfo;
};

export default useRestaurantMenu;
