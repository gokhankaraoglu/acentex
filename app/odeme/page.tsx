"use client";

import Link from "next/link";
import { Icon, Icons } from "../components/elements/Icon";
import CustomInput, { InputType } from "../components/elements/CustomInput";

import { useState } from "react";
import CustomButton from "../components/elements/CustomButton";
import { normalizeCardDate, normalizeCardNumber } from "../utils/mask";

interface FormElements extends HTMLFormControlsCollection {
  cardOwner: HTMLInputElement;
  cardNumber: HTMLInputElement;
  exp: HTMLInputElement;
  cvt: HTMLInputElement;
}

interface LoginFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const paymentFormElements = [
  {
    questionName: "Kart Sahibi",
    questionCode: "cardOwner",
    isRequired: true,
    options: null,
  },
  {
    questionName: "Kart Numarası",
    questionCode: "cardNo",
    isRequired: true,
    options: null,
  },
  {
    questionName: "SKT",
    questionCode: "exp",
    isRequired: true,
    options: null,
  },
  {
    questionName: "CVV",
    questionCode: "ccv",
    isRequired: true,
    options: null,
  },
];

function CardForm() {
  const [paymentElements, setPaymentElements] = useState({
    cardOwner: "",
    cardNumber: "",
    exp: "",
    cvt: "",
  });
  function getFormElements(event: React.FormEvent<LoginFormElement>) {
    event.preventDefault();
    console.log("test");

    const { cardOwner, cardNumber, exp, cvt } = (
      event.currentTarget as LoginFormElement
    ).elements;

    console.log(cardOwner.value, cardNumber.value, exp.value, cvt.value);
  }

  return (
    <div className="pt-16 flex flex-col justify-between custom-min-height">
      <div className="flex flex-col items-center">
        <Link href="/sigorta-teklifi" className="mb-11 inline-block self-start">
          <span className="flex items-center">
            <Icon icon={Icons.ARROW_LEFT} />{" "}
            <span className="ml-3 font-semibold text-xl">Teklife Dön</span>
          </span>
        </Link>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold">Ödeme Yap</h2>
          <p className="text-[#667085] font-extralight text-lg">
            Ödeme yapmak için aşağıdaki bilgileri doldurunuz.
          </p>
        </div>
        <div className="w-full max-w-md">
          <form
            autoComplete="off"
            noValidate={true}
            id="form1"
            // onBlur={(event) => getFormElements(event)}
            onSubmit={getFormElements}
          >
            <div className="flex flex-col gap-6 mb-6">
              <CustomInput
                id="cardOwner"
                type={InputType.TEXT}
                isRequired={true}
                name="Kart Sahibi"
              />
              <CustomInput
                id="cardNumber"
                type={InputType.TEL}
                placeholder="____-____-____-____"
                isRequired={true}
                name="Kart Numarası"
                autoComplete="cc-number"
                maxlength={19}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.target.value = normalizeCardNumber(e.target.value);
                }}
              />
              <div className="flex gap-x-12 sm:gap-x-16">
                <CustomInput
                  id="exp"
                  type={InputType.TEL}
                  isRequired={true}
                  name="SKT"
                  placeholder="__ /__"
                  maxlength={5}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.target.value = normalizeCardDate(e.target.value);
                  }}
                />
                <CustomInput
                  id="cvt"
                  type={InputType.TEL}
                  isRequired={true}
                  name="CVT"
                  maxlength={3}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <CustomButton form="form1" type="submit" className="mb-2.5">
          Onayla
        </CustomButton>
        <p className="text-[#667085] font-extralight text-xs text-center">
          Şu anda Insurelab Sigorta ve Reasürans Brokerlığı sayfasındasınız.
        </p>
      </div>
    </div>
  );
}

export default CardForm;
