import React from "react";
import CustomInput, { InputType } from "./elements/CustomInput";
import {
  isValidEmail,
  isValidIMEINumber,
  isValidPhoneNumber,
  isValidTCKN,
} from "../utils/mask";

interface InputSectionsProps {
  questionID: number;
  questionName: string;
  questionCode: string;
  isRequired: boolean;
  value?: string;
  onChange: (event: any) => void;
}

function InputSections({
  questionID,
  questionName,
  questionCode,
  isRequired,
  value,
  onChange,
}: InputSectionsProps) {
  // const today = new Date().toLocaleDateString("en-CA");
  // const nextYear = new Date();
  // nextYear.setFullYear(nextYear.getFullYear() + 1);
  // const oneYearLater = nextYear.toLocaleDateString("en-CA");
  switch (questionID) {
    // case 21: // BAŞLAMA TARİHİ
    //   return (
    //     <CustomInput
    //       id={questionCode}
    //       type={InputType.DATE}
    //       name={questionName}
    //       isRequired={isRequired}
    //       value={today}
    //       disabled={true}
    //       className="!cursor-default"
    //     />
    //   );
    // case 22: // BİTİŞ TARİHİ
    //   return (
    //     <CustomInput
    //       id={questionCode}
    //       type={InputType.DATE}
    //       name={questionName}
    //       isRequired={isRequired}
    //       value={oneYearLater}
    //       disabled={true}
    //       className="!cursor-default"
    //     />
    //   );
    case 44: // DOĞUM TARİHİ
      return (
        <CustomInput
          id={questionCode}
          type={InputType.DATE}
          name={questionName}
          isRequired={isRequired}
          onChange={onChange}
          value={value}
        />
      );
    case 14: // T.C. KİMLİK NUMARASI
      return (
        <CustomInput
          id={questionCode}
          type={InputType.NUMBER}
          name={questionName}
          isValid={isValidTCKN(value + "")}
          minlength={11}
          maxlength={11}
          isRequired={true}
          onChange={onChange}
          value={value}
        />
      );
    // case 15: // VERGİ KİMLİK NUMARASI
    //   return (
    //     <CustomInput
    //       id={questionCode}
    //       type={InputType.NUMBER}
    //       name={questionName}
    //       isRequired={isRequired}
    //       onChange={onChange}
    //     />
    //   );
    case 42: // CEP TELEFONU
      return (
        <CustomInput
          id={questionCode}
          type={InputType.TEL}
          name={questionName}
          isRequired={isRequired}
          isValid={isValidPhoneNumber(value || "")}
          onChange={onChange}
          placeholder="5554443322"
          value={value}
        />
      );
    case 77: // E-MAIL ADRESİ
      return (
        <CustomInput
          id={questionCode}
          type={InputType.EMAIL}
          name="E-Mail Adresi"
          isRequired={isRequired}
          onChange={onChange}
          isValid={isValidEmail(value || "")}
          value={value}
        />
      );
    case 207: // IMEI NO
      return (
        <CustomInput
          id={questionCode}
          type={InputType.TEXT}
          name={questionName}
          information="Telefonunuzun cihaz ayarları bölümünde Genel>Hakkında alanında bulabilir ve kopyalayabilirsiniz."
          isRequired={isRequired}
          isValid={isValidIMEINumber(value || "")}
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
