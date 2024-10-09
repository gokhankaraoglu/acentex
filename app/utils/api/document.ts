import { post } from ".";
import { ApiResponse } from "@/app/types";
import { DocumentData } from "@/app/types/document";

export async function getPolicyDocument(
  entegrasyonPoliceHarekedId: number
): Promise<DocumentData> {
  const response = await post<
    { ENTEGRASYON_POLICE_HAREKET_ID: number },
    ApiResponse<DocumentData>
  >({
    path: "/ExternalProduction/GET_POLICY_DOCUMENT",
    payload: {
      ENTEGRASYON_POLICE_HAREKET_ID: entegrasyonPoliceHarekedId,
    },
  });
  return response.Data;
}
