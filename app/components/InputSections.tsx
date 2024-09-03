import React from "react";
import CustomInput, { InputType } from "./elements/CustomInput";

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
  const today = new Date().toISOString().split("T")[0];
  switch (questionID) {
    case 21: // BAŞLAMA TARİHİ
    case 22: // BİTİŞ TARİHİ
      return (
        <CustomInput
          id={questionCode}
          type={InputType.DATE}
          name={questionName}
          isRequired={isRequired}
          onChange={onChange}
          min={today}
        />
      );
    case 44: // DOĞUM TARİHİ
      return (
        <CustomInput
          id={questionCode}
          type={InputType.DATE}
          name={questionName}
          isRequired={isRequired}
          onChange={onChange}
        />
      );
    case 14: // T.C. KİMLİK NUMARASI
      return (
        <CustomInput
          id={questionCode}
          type={InputType.NUMBER}
          name={questionName}
          isRequired={isRequired}
          onChange={onChange}
        />
      );
    case 15: // VERGİ KİMLİK NUMARASI
      return (
        <CustomInput
          id={questionCode}
          type={InputType.NUMBER}
          name={questionName}
          isRequired={isRequired}
          onChange={onChange}
        />
      );
    case 42: // CEP TELEFONU
      return (
        <CustomInput
          id={questionCode}
          type={InputType.TEL}
          name={questionName}
          isRequired={isRequired}
          onChange={onChange}
        />
      );
    case 77: // E-MAIL ADRESİ
      return (
        <CustomInput
          id={questionCode}
          type={InputType.EMAIL}
          name={questionName}
          isRequired={isRequired}
          onChange={onChange}
        />
      );
    case 207: // IMEI NO
      return (
        <CustomInput
          id={questionCode}
          type={InputType.NUMBER}
          name={questionName}
          information="Telefonunuzun cihaz ayarları bölümünde Genel>Hakkında alanında bulabilir ve kopyalayabilirsiniz."
          isRequired={isRequired}
          onChange={onChange}
        />
      );
    case 197: // CİHAZ MARKA
    case 199: // MODEL
    case 200: // SERİ NO
    case 201: // PLATFORM
    case 202: // SİPARİŞ NO
      return (
        <CustomInput
          id={questionCode}
          type={InputType.TEXT}
          name={questionName}
          isRequired={isRequired}
          onChange={onChange}
        />
      );
    case 203: // EKRAN KIRILMASI
    case 204: // KAZAEN KIRILMA
    case 205: // UZATILMIŞ GARANTİ
    case 206: // CİHAZ BEDELİ
      return (
        <CustomInput
          id={questionCode}
          type={InputType.NUMBER}
          name={questionName}
          isRequired={isRequired}
          onChange={onChange}
        />
      );
    default:
      return null;
  }
}

export default InputSections;
