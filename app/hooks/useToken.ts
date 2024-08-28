import { useEffect } from "react";
import { post } from "../utils/api";
import Cookies from "js-cookie";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/api/axiosClient";

const useTokenRefresh = () => {
  useEffect(() => {
    const getToken = async () => {
      const accessToken = Cookies.get(ACCESS_TOKEN);
      const refreshToken = Cookies.get(REFRESH_TOKEN);

      if (!accessToken && !refreshToken) {
        try {
          const response = await post<any, any>({
            path: "/auth/login",
            payload: {
              username: process.env.NEXT_PUBLIC_USERNAME,
              password: process.env.NEXT_PUBLIC_PASSWORD,
            },
          });

          const { token, refreshToken } = response;
          Cookies.set(ACCESS_TOKEN, token);
          Cookies.set(REFRESH_TOKEN, refreshToken);
        } catch (error) {
          console.error("Failed to fetch initial token", error);
        }
      }
    };

    const getRefreshToken = async () => {
      const refreshToken = Cookies.get(REFRESH_TOKEN);

      if (refreshToken) {
        try {
          const response = await post<any, any>({
            path: "/auth/refresh",
            payload: {
              refreshToken,
              expiresInMins: 1,
            },
          });

          const { token, refreshToken: newRefreshToken } = response;
          Cookies.set(ACCESS_TOKEN, token);
          Cookies.set(REFRESH_TOKEN, newRefreshToken);
        } catch (error) {
          console.error("Failed to refresh token", error);
        }
      }
    };

    getToken();

    const expireTimeout = 60 * 1000;

    const intervalId = setInterval(getRefreshToken, expireTimeout); // Refresh every 60 seconds

    return () => {
      Cookies.remove(ACCESS_TOKEN);
      Cookies.remove(REFRESH_TOKEN);
      clearInterval(intervalId);
    };
  }, []);
};

export default useTokenRefresh;
