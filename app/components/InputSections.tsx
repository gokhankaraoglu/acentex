import React from "react";
import Input, { InputType } from "./elements/Input";

interface InputSectionsProps {
  maskID: string;
  questionName: string;
  questionCode: string;
  isRequired: boolean;
}

function InputSections({
  maskID,
  questionName,
  questionCode,
  isRequired,
}: InputSectionsProps) {
  switch (maskID) {
    case "1":
      return (
        <Input
          id={questionCode}
          type={InputType.TEXT}
          pattern="[A-Z0-9]+"
          name={questionName}
          isRequired={isRequired}
        />
      );
    case "2":
      return (
        <Input
          id={questionCode}
          type={InputType.TEL}
          // pattern="[A-Z0-9]+"
          name={questionName}
          isRequired={isRequired}
          autoComplete="tel"
          placeholder="0 (___) ___ __"
        />
      );
    case "9":
      return (
        <Input
          id={questionCode}
          type={InputType.NUMBER}
          pattern="\d{11}"
          minlength={10}
          maxlength={11}
          name="TC Kimlik No"
          isRequired={isRequired}
        />
      );
    case "3":
      return (
        <Input
          id={questionCode}
          type={InputType.DATE}
          name={questionName}
          isRequired={isRequired}
          autoComplete="off"
        />
      );
    case "8":
      return (
        <Input
          id={questionCode}
          type={InputType.NUMBER}
          pattern="\d{15}"
          minlength={14}
          maxlength={15}
          name="IMEI Numaranız"
          information="Telefonunuzun cihaz ayarları bölümünde Genel>Hakkında alanında bulabilir ve kopyalayabilirsiniz."
          isRequired={isRequired}
        />
      );
  }
}

export default InputSections;
