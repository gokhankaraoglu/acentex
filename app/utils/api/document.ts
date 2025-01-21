import { post } from ".";
import { ApiResponse } from "@/app/types";
import { DocumentData } from "@/app/types/document";

export async function getPolicyDocument(
  entegrasyonPoliceHarekedKey: string
): Promise<DocumentData> {
  const response = await post<
    { ENTEGRASYON_POLICE_HAREKET_KEY: string },
    ApiResponse<DocumentData>
  >({
    path: "/ExternalProduction/GET_POLICY_DOCUMENT_WITH_KEY",
    payload: {
      ENTEGRASYON_POLICE_HAREKET_KEY: entegrasyonPoliceHarekedKey,
    },
  });
  return response.Data;
}
