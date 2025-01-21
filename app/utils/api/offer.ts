import { PoliceApiResponse, PoliceItem } from "@/app/types/product";
import { GetEntegrasyonPolicePayload } from "@/app/types/question";
import { post } from ".";

export async function fetchOfferData(
  policeId: string
): Promise<PoliceItem | undefined> {
  const {
    Data: { Items },
  } = await post<GetEntegrasyonPolicePayload, PoliceApiResponse>({
    path: "/ExternalProduction/GET_ENTEGRASYON_POLICE_WITH_GUID",
    payload: { POLICE_GUID: policeId },
  });
  return Items[0] as PoliceItem;
}
