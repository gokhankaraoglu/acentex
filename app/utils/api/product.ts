import { ProductDetail, ProductQuestionPayload } from "@/app/types/product";
import {
  AnswerQuestionPayload,
  PolicePayload,
  RootObject,
  SoruListItem,
} from "@/app/types/question";
import { post } from ".";

export async function fetchProductQuestions(
  policeGuid: string,
  productDetail: ProductDetail
): Promise<SoruListItem[]> {
  const { SORU_LIST } = await post<ProductQuestionPayload, RootObject>({
    path: "/ExternalProduction/SET_TEKLIF_URUN",
    payload: {
      POLICE_GUID: policeGuid,
      URUN_LIST: [
        {
          VISIBLE: 1,
          URUN_ID: productDetail?.URUN_ID,
          URUN_AD: productDetail?.URUN_AD,
          URUN_KOD: productDetail?.URUN_KOD,
        },
      ],
    },
  });
  return SORU_LIST.filter((item) => item.GIZLI !== "E");
}

export async function submitQuestionAnswer(
  policeGuid: string,
  question: SoruListItem,
  value: string | number
): Promise<SoruListItem[]> {
  const { SORU_LIST } = await post<AnswerQuestionPayload, RootObject>({
    path: "/ExternalProduction/POST_POLICY_QUESTION_ANSWER",
    payload: {
      POLICE_GUID: policeGuid,
      SORU_LIST: [{ ...question, DEGER_KOD: value }],
    },
  });
  return SORU_LIST.filter((item) => item.GIZLI !== "E");
}

export async function submitForm(policeGuid: string): Promise<string> {
  const { POLICE_ID } = await post<PolicePayload, { POLICE_ID: string }>({
    path: "/ExternalProduction/POST_POLICY_QUESTION",
    payload: {
      POLICE_GUID: policeGuid,
    },
  });
  return POLICE_ID;
}
