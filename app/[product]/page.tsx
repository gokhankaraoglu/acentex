"use client";

import FormElement from "../components/FormElement";
import Link from "next/link";
import { Icon, Icons } from "../components/elements/Icon";
import CustomButton from "../components/elements/CustomButton";
import { useEffect, useState } from "react";
import { post } from "../utils/api";
import { getSessionStorage } from "../utils";
import useGuid from "../hooks/useSetGuid";
import {
  AnswerQuestionPayload,
  RootObject,
  SoruListItem,
} from "../types/question";
import { ProductDetail, ProductQuestionPayload } from "../types/product";

// import { usePathname, useSearchParams } from "next/navigation";

function ProductForm() {
  useGuid();
  const [questions, setQuestions] = useState<SoruListItem[]>([]);
  const guid = getSessionStorage<string>("guid");
  const productDetail = getSessionStorage<ProductDetail>("product");

  useEffect(() => {
    const fetchProducts = async () => {
      await getQuestions();
    };

    fetchProducts();
  }, []);

  async function getQuestions() {
    try {
      if (guid && productDetail) {
        const { SORU_LIST } = await post<ProductQuestionPayload, RootObject>({
          path: "/ExternalProduction/SET_TEKLIF_URUN",
          payload: {
            POLICE_GUID: guid,
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
        const filteredList = SORU_LIST.filter((item) => item.GIZLI !== "E");
        setQuestions(filteredList);
      }
    } catch (error) {
      console.error("Failed to fetch initial token", error);
    }
  }

  async function handleAnswerChange(question: SoruListItem, value: string) {
    try {
      if (guid) {
        const updatedQuestions = await post<AnswerQuestionPayload, RootObject>({
          path: "/ExternalProduction/POST_POLICY_QUESTION_ANSWER",
          payload: {
            POLICE_GUID: guid,
            SORU_LIST: [{ ...question, DEGER_KOD: value }],
          },
        });

        const filteredList = updatedQuestions.SORU_LIST.filter(
          (item) => item.GIZLI !== "E"
        );
        setQuestions(filteredList);
      }
    } catch (error) {
      console.error("Failed to update question answers", error);
    }
  }

  return (
    <div className="pt-16 flex flex-col justify-between custom-min-height">
      <div className="flex flex-col items-center">
        <Link href="/" className="mb-11 inline-block self-start">
          <span className="flex items-center">
            <Icon icon={Icons.ARROW_LEFT} />
            <span className="ml-3 font-semibold text-xl">Teklifinizi Alın</span>
          </span>
        </Link>
        <div className="w-full max-w-md px-3 overflow-y-auto">
          <form
            autoComplete="off"
            noValidate={true}
            id="form1"
            onSubmit={() => console.log("deneme")}
          >
            <div className="flex flex-col gap-6 mb-6">
              {questions.map((question) => (
                <FormElement
                  key={question.SIRA_NO}
                  questionID={question.SORU_ID + ""}
                  questionTypeID={question.SORU_TIP_ID + ""}
                  questionName={question.SORU_AD}
                  questionCode={question.SORU_KOD}
                  isRequired={question.ZORUNLU === "E"}
                  options={question?.SORU_DEGER_LIST?.map((option) => ({
                    value: option.DEGER_KOD,
                    label: option.DEGER_AD,
                  }))}
                  onChange={(e) => handleAnswerChange(question, e.target.value)}
                />
              ))}
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <CustomButton
          form="form1"
          type="submit"
          saturated={true}
          className="mb-2.5"
        >
          Teklif Oluştur
        </CustomButton>
        <p className="text-[#667085] font-extralight text-xs text-center">
          Şu anda Insurelab Sigorta ve Reasürans Brokerlığı sayfasındasınız.
        </p>
      </div>
    </div>
  );
}

export default ProductForm;
