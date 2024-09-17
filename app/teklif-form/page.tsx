"use client";

import FormElement from "../components/FormElement";
import Link from "next/link";
import { Icon, Icons } from "../components/elements/Icon";
import CustomButton from "../components/elements/CustomButton";
import { useEffect, useState } from "react";
import { getSessionStorage, setSessionStorage } from "../utils";
import { setGuid } from "../hooks/useSetGuid";
import { SoruListItem } from "../types/question";
import { useRouter } from "next/navigation";
import Spinner from "../components/elements/Spinner";

import { ProductDetail } from "../types/product";
import {
  fetchProductQuestions,
  submitForm,
  submitQuestionAnswer,
} from "../utils/api/product";
import { normalizePhoneNumber, normalizeTCKN } from "../utils/mask";

function ProductForm() {
  const router = useRouter();
  const [questions, setQuestions] = useState<SoruListItem[]>([]);
  const [policeGuid, setPoliceGuid] = useState<string>("");

  useEffect(() => {
    const productDetail = getSessionStorage<ProductDetail>("product");
    const fetchProducts = async () => {
      const policeId = await setGuid();
      if (!productDetail) {
        router.push("/");
        return;
      }
      setPoliceGuid(policeId);
      const fetchedQuestions = await fetchProductQuestions(
        policeId,
        productDetail
      );
      setQuestions(fetchedQuestions);
    };

    fetchProducts();
  }, []);

  async function handleAnswerChange(
    question: SoruListItem,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    let value = e.target.value;

    if (question.MASKE_TIP_ID === 3) {
      const [year, month, day] = value.split("-");
      value = `${day}/${month}/${year}`;
    }

    if (question.SORU_ID === 14) {
      e.target.value = normalizeTCKN(e.target.value);
      value = e.target.value;
    }
    if (question.SORU_ID === 42) {
      e.target.value = normalizePhoneNumber(e.target.value);
      value = e.target.value;
    }

    if (!policeGuid) {
      router.push("/");
      return;
    }

    const updatedQuestions = await submitQuestionAnswer(
      policeGuid,
      question,
      value
    );
    setQuestions(updatedQuestions);
  }

  async function handleSendForm(event: React.FormEvent) {
    event.preventDefault();
    try {
      if (policeGuid) {
        const policeId = await submitForm(policeGuid);
        setSessionStorage("policeId", policeId);
        router.push("/teklif-listesi");
      }
    } catch (error) {
      console.error("Failed to submit form", error);
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
          <form autoComplete="off" id="form1" onSubmit={handleSendForm}>
            {questions.length > 0 ? (
              <div className="flex flex-col gap-6 mb-6">
                {questions.map((question) => (
                  <FormElement
                    key={question.SIRA_NO}
                    questionID={question.SORU_ID}
                    questionTypeID={question.SORU_TIP_ID}
                    questionName={question.SORU_AD}
                    questionCode={question.SORU_KOD}
                    isRequired={question.ZORUNLU === "E"}
                    options={question?.SORU_DEGER_LIST?.map((option) => ({
                      value: option.DEGER_KOD,
                      label: option.DEGER_AD,
                    }))}
                    onChange={(e) => handleAnswerChange(question, e)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center h-full">
                <Spinner />
              </div>
            )}
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
