import { PoliceApiResponse, PoliceItem } from "@/app/types/product";
import { GetEntegrasyonPolicePayload } from "@/app/types/question";
import { post } from ".";

export async function fetchOfferData(
  policeId: number
): Promise<PoliceItem | undefined> {
  const {
    Data: { Items },
  } = await post<GetEntegrasyonPolicePayload, PoliceApiResponse>({
    path: "/ExternalProduction/GET_ENTEGRASYON_POLICE",
    payload: { POLICE_ID: policeId },
  });
  return Items[0] as PoliceItem;
}
