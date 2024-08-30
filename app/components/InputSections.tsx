import React from "react";
import Input, { InputType } from "./elements/Input";

interface InputSectionsProps {
  questionID: number;
  questionName: string;
  questionCode: string;
  isRequired: boolean;
  onChange: (event: any) => void;
}

function InputSections({
  questionID,
  questionName,
  questionCode,
  isRequired,
  onChange,
}: InputSectionsProps) {
  switch (questionID) {
    case 21: // BAŞLAMA TARİHİ
    case 22: // BİTİŞ TARİHİ
    case 44: // DOĞUM TARİHİ
      return (
        <Input
          id={questionCode}
          type={InputType.DATE}
          name={questionName}
          isRequired={isRequired}
          autoComplete="off"
          onInput={onChange}
        />
      );
    case 14: // T.C. KİMLİK NUMARASI
      return (
        <Input
          id={questionCode}
          type={InputType.NUMBER}
          pattern="\d{11}"
          minlength={10}
          maxlength={11}
          name={questionName}
          isRequired={isRequired}
        />
      );
    case 15: // VERGİ KİMLİK NUMARASI
      return (
        <Input
          id={questionCode}
          type={InputType.NUMBER}
          pattern="\d{10}"
          minlength={10}
          maxlength={10}
          name={questionName}
          isRequired={isRequired}
        />
      );
    case 42: // CEP TELEFONU
      return (
        <Input
          id={questionCode}
          type={InputType.TEL}
          name={questionName}
          isRequired={isRequired}
          autoComplete="tel"
          placeholder="0 (___) ___ __"
        />
      );
    case 77: // E-MAIL ADRESİ
      return (
        <Input
          id={questionCode}
          type={InputType.EMAIL}
          name={questionName}
          isRequired={isRequired}
        />
      );
    case 207: // IMEI NO
      return (
        <Input
          id={questionCode}
          type={InputType.NUMBER}
          pattern="\d{15}"
          minlength={15}
          maxlength={15}
          name={questionName}
          information="Telefonunuzun cihaz ayarları bölümünde Genel>Hakkında alanında bulabilir ve kopyalayabilirsiniz."
          isRequired={isRequired}
        />
      );
    case 197: // CİHAZ MARKA
    case 199: // MODEL
    case 200: // SERİ NO
    case 201: // PLATFORM
    case 202: // SİPARİŞ NO
      return (
        <Input
          id={questionCode}
          type={InputType.TEXT}
          name={questionName}
          isRequired={isRequired}
        />
      );
    case 203: // EKRAN KIRILMASI
    case 204: // KAZAEN KIRILMA
    case 205: // UZATILMIŞ GARANTİ
    case 206: // CİHAZ BEDELİ
      return (
        <Input
          id={questionCode}
          type={InputType.NUMBER}
          name={questionName}
          isRequired={isRequired}
        />
      );
    default:
      return null;
  }
}

export default InputSections;
