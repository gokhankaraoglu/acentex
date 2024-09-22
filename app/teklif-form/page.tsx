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
import {
  normalizeIMEINumber,
  normalizePhoneNumber,
  normalizeTCKN,
} from "../utils/mask";
import { Credentials, IFormElement } from "../types/form";

function ProductForm() {
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0];
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  const oneYearLater = nextYear.toISOString().split("T")[0];
  const [questions, setQuestions] = useState<SoruListItem[]>([]);
  const [policeGuid, setPoliceGuid] = useState<string>("");
  const [credentialsDetail, setCredentialsDetail] = useState<Credentials>({});

  useEffect(() => {
    const productDetail = getSessionStorage<ProductDetail>("product");
    const storedCredentialsDetail =
      getSessionStorage<Credentials>("credentials");

    if (storedCredentialsDetail) {
      setCredentialsDetail(storedCredentialsDetail);
    }

    const fetchProducts = async () => {
      if (!productDetail) {
        router.push("/");
        return;
      }

      const newPoliceGuid = await setGuid();
      const fetchedQuestions = await fetchProductQuestions(
        newPoliceGuid,
        productDetail
      );

      await submitQuestions(fetchedQuestions, newPoliceGuid);
      setPoliceGuid(newPoliceGuid);
    };

    const submitQuestions = async (
      questions: SoruListItem[],
      policeGuid: string
    ) => {
      const answerMapping: { [key: number]: any } = {
        21: today,
        22: oneYearLater,
        14: credentialsDetail?.TCK,
        44: credentialsDetail?.DGMTAR,
        42: credentialsDetail?.CEPTEL,
        77: credentialsDetail?.EMAIL,
      };

      for (const question of questions) {
        const answer = answerMapping[question.SORU_ID];
        if (answer !== undefined) {
          try {
            await submitQuestionAnswerMethod(policeGuid, question, answer);
          } catch (error) {
            console.error(
              `Error submitting question ID ${question.SORU_ID}:`,
              error
            );
          }
        }
      }
    };

    fetchProducts();
  }, []);

  async function handleAnswerChange(
    question: SoruListItem,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    let value = e.target.value;

    if (question.SORU_ID === 14) {
      e.target.value = normalizeTCKN(e.target.value);
      value = e.target.value;
    }
    if (question.SORU_ID === 42) {
      e.target.value = normalizePhoneNumber(e.target.value);
      value = e.target.value;
    }

    if (question.SORU_ID === 207) {
      e.target.value = normalizeIMEINumber(e.target.value);
      value = e.target.value;
    }

    setCredentialsDetail((prev: Credentials) => ({
      ...prev,
      [question.SORU_KOD]: value,
    }));
    await submitQuestionAnswerMethod(policeGuid, question, value);
  }

  async function submitQuestionAnswerMethod(
    policeGuid: string,
    question: SoruListItem,
    value?: string | number
  ) {
    if (!value) return;
    if (question.MASKE_TIP_ID === 3) {
      const [year, month, day] = (value as string).split("-");
      value = `${day}/${month}/${year}`;
    }
    const updatedQuestions = await submitQuestionAnswer(
      policeGuid,
      question,
      value
    );

    setQuestions(updatedQuestions);
  }

  async function handleSendForm(event: React.FormEvent<IFormElement>) {
    event.preventDefault();
    const { TCK, DGMTAR, CEPTEL, EMAIL } = (event.target as IFormElement)
      .elements;

    const credentials: Credentials = {
      TCK: TCK?.value,
      DGMTAR: DGMTAR?.value,
      CEPTEL: CEPTEL?.value,
      EMAIL: EMAIL?.value,
    };

    try {
      if (policeGuid) {
        const policeId = await submitForm(policeGuid);
        setSessionStorage("policeId", policeId);
        setSessionStorage("credentials", credentials);
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
        <div className="w-full max-w-md px-3">
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
                    value={credentialsDetail[question.SORU_KOD]}
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
      <div className="flex flex-col justify-center items-center mb-3">
        <CustomButton
          form="form1"
          type="submit"
          saturated={true}
          className="mb-2.5"
        >
          Teklif Oluştur
        </CustomButton>
        <p className="text-[#667085] font-extralight text-xs text-center">
          Şu anda Insurelab Sigorta ve Reasürans Brokerliği sayfasındasınız.
        </p>
      </div>
    </div>
  );
}

export default ProductForm;
