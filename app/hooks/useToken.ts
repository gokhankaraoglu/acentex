import { useEffect } from "react";
import { post } from "../utils/api";
import Cookies from "js-cookie";
import { ACCESS_TOKEN } from "../utils/api/axiosClient";

export const setToken = async () => {
  const accessToken = Cookies.get(ACCESS_TOKEN);

  if (!accessToken) {
    try {
      console.log("Access token");
      const { accessToken } = await post<any, any>({
        path: "/Auth/GetToken",
        payload: {
          userName: process.env.NEXT_PUBLIC_USERNAME,
          password: process.env.NEXT_PUBLIC_PASSWORD,
        },
      });

      Cookies.set(ACCESS_TOKEN, accessToken);
    } catch (error) {
      console.error("Failed to fetch initial token", error);
    }
  }
};

const useToken = () => {
  useEffect(() => {
    setToken();

    // return () => {
    //   Cookies.remove(ACCESS_TOKEN);
    // };
  }, []);
};

export default useToken;
