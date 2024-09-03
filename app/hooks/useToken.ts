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

      Cookies.set(ACCESS_TOKEN, accessToken);
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
