"use client";

import Link from "next/link";
import { Icon, Icons } from "../components/elements/Icon";
import Input, { InputType } from "../components/elements/Input";

import { useState } from "react";
import CustomButton from "../components/elements/CustomButton";

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

  const normalizeCardNumber = (value: string) => {
    const newValue =
      value
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ")
        .substr(0, 19) || "";
    console.log(newValue);
    setPaymentElements((prev) => ({ ...prev, cardNumber: newValue }));
  };

  return (
    <div className="pt-16 flex flex-col justify-between custom-min-height">
      <div className="flex flex-col items-center">
        <Link href="/" className="mb-11 inline-block self-start">
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
              <Input
                id="cardOwner"
                type={InputType.TEXT}
                isRequired={true}
                name="Kart Sahibi"
                onChange={(e) => {
                  normalizeCardNumber(e.target.value);
                }}
                value={paymentElements.cardOwner}
              />
              <Input
                id="cardNumber"
                type={InputType.TEL}
                placeholder="____ ____ ____ ____"
                isRequired={true}
                name="Kart Numarası"
                pattern="[0-9\s]{13,19}"
                autoComplete="cc-number"
                maxlength={19}
                onChange={(e) => {
                  normalizeCardNumber(e.target.value);
                }}
                value={paymentElements.cardNumber}
              />
              <div className="flex gap-x-12 sm:gap-x-16">
                <Input
                  id="exp"
                  type={InputType.TEL}
                  isRequired={true}
                  name="SKT"
                  maxlength={5}
                  onChange={(e) => {
                    normalizeCardNumber(e.target.value);
                  }}
                  value={paymentElements.exp}
                />
                <Input
                  id="cvt"
                  type={InputType.TEL}
                  isRequired={true}
                  name="CVT"
                  maxlength={3}
                  onChange={(e) => {
                    normalizeCardNumber(e.target.value);
                  }}
                  value={paymentElements.cvt}
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
