import { useEffect } from "react";
import { post } from "../utils/api";
import { setSessionStorage } from "../utils";

const GUID = "guid";

export const setGuid = async () => {
  try {
    const { POLICE_GUID } = await post<any, any>({
      path: "/ExternalProduction/SET_TEKLIF_GUID",
      payload: {},
    });

    setSessionStorage(GUID, POLICE_GUID);
    return POLICE_GUID;
  } catch (error) {
    console.error("Failed to fetch initial token", error);
  }
};

// const useGuid = () => {
//   useEffect(() => {
//     setGuid();
//   }, []);
// };

// export default useGuid;
