import { getToken } from "@/app/hooks/useToken";
import axios, { AxiosHeaders } from "axios";
import Cookies from "js-cookie";

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  responseType: "json",
});

export const ACCESS_TOKEN = "jwt";

axiosClient.interceptors.request.use(
  async (req) => {
    const accessToken = Cookies.get(ACCESS_TOKEN);

    if (accessToken) {
      (req.headers as AxiosHeaders).set(
        "Authorization",
        `Bearer ${accessToken}`
      );
    }

    return req;
  },

  (err) => Promise.reject(err)
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log({ error });
    if (error?.response?.status === 401) {
      Cookies.remove(ACCESS_TOKEN);
      getToken();
    }
    return Promise.reject(error);
  }
);
