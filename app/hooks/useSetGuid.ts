import { createExpirationDate } from "../utils";
import { post } from "../utils/api";
import Cookies from "js-cookie";

export const GUID: string = "guid";

export const setGuid = async () => {
  try {
    const { POLICE_GUID } = await post<any, any>({
      path: "/ExternalProduction/SET_TEKLIF_GUID",
      payload: {},
    });
    const expirationDate = createExpirationDate(6);

    Cookies.set(GUID, POLICE_GUID, { expires: expirationDate });
    return POLICE_GUID;
  } catch (error) {
    console.error("Failed to fetch initial token", error);
  }
};
