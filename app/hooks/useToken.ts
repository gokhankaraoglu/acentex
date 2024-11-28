import { useEffect } from "react";
import { post } from "../utils/api";
import Cookies from "js-cookie";
import { ACCESS_TOKEN } from "../utils/api/axiosClient";

export const getToken = async () => {
  const accessToken = Cookies.get(ACCESS_TOKEN);

  if (!accessToken) {
    try {
      const { accessToken } = await post<any, any>({
        path: "/Auth/GetToken",
        payload: {
          userName: process.env.NEXT_PUBLIC_USERNAME,
          password: process.env.NEXT_PUBLIC_PASSWORD,
        },
      });

      const now = new Date();

      const TWELVE_HOURS = 12 * 60 * 60 * 1000;
      const twelveHoursLater = new Date(now.getTime() + TWELVE_HOURS);

      const expirationDate = twelveHoursLater;
      Cookies.set(ACCESS_TOKEN, accessToken, { expires: expirationDate });
    } catch (error) {
      console.error("Failed to fetch initial token", error);
    }
  }
};

const useToken = () => {
  useEffect(() => {
    const fetchToken = async () => {
      await getToken();
    };

    fetchToken();
  }, []);
};

export default useToken;
