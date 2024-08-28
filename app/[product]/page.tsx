"use client";

import FormElement from "../components/FormElement";
import Link from "next/link";
import { Icon, Icons } from "../components/elements/Icon";
import CustomButton from "../components/elements/CustomButton";

// import { usePathname, useSearchParams } from "next/navigation";

interface ProductPageProps {
  params: {
    product: string;
  };
}

const SORU_LIST = [
  {
    DEGISIM_SAYISI: 1,
    DEGER_KOD: null,
    DEGER_AD: null,
    TABLOSU_VAR: 0,
    SIRA_NO: 1,
    ZORUNLU: "H",
    GIZLI: "H",
    URUN_SORU_EVENT: null,
    KONTROL_GRUP_ID: null,
    KONTROL_GRUP_AD: null,
    KONTROL_GRUP_MESAJ: null,
    ENTEGRASYON_URUN_ID_LIST: "",
    SORU_DEGER_LIST: null,
    SORU_ID: 20,
    SORU_TIP_ID: 5,
    SORU_KOD: "GPOL",
    SORU_AD: "GENEL BİLGİLER",
    MASKE_TIP_ID: null,
    Success: false,
    ErrorList: [],
    WarningList: [],
    MessageList: [],
  },
  {
    DEGISIM_SAYISI: 1,
    DEGER_KOD: null,
    DEGER_AD: null,
    TABLOSU_VAR: 0,
    SIRA_NO: 2,
    ZORUNLU: "E",
    GIZLI: "H",
    URUN_SORU_EVENT: null,
    KONTROL_GRUP_ID: null,
    KONTROL_GRUP_AD: null,
    KONTROL_GRUP_MESAJ: null,
    ENTEGRASYON_URUN_ID_LIST:
      "2;8;9;11;17;18;19;20;22;23;24;25;26;28;29;30;32;33;34;37;38;39;40;",
    SORU_DEGER_LIST: null,
    SORU_ID: 21,
    SORU_TIP_ID: 1,
    SORU_KOD: "PBASTAR",
    SORU_AD: "Başlama Tarihi",
    MASKE_TIP_ID: 3,
    Success: false,
    ErrorList: [],
    WarningList: [],
    MessageList: [],
  },
  {
    DEGISIM_SAYISI: 3,
    DEGER_KOD: null,
    DEGER_AD: null,
    TABLOSU_VAR: 0,
    SIRA_NO: 3,
    ZORUNLU: "E",
    GIZLI: "H",
    URUN_SORU_EVENT: null,
    KONTROL_GRUP_ID: null,
    KONTROL_GRUP_AD: null,
    KONTROL_GRUP_MESAJ: null,
    ENTEGRASYON_URUN_ID_LIST:
      "2;8;9;11;17;18;19;20;22;23;24;25;26;28;29;30;32;33;34;38;39;",
    SORU_DEGER_LIST: null,
    SORU_ID: 22,
    SORU_TIP_ID: 1,
    SORU_KOD: "PBITTAR",
    SORU_AD: "Bitiş Tarihi",
    MASKE_TIP_ID: 3,
    Success: false,
    ErrorList: [],
    WarningList: [],
    MessageList: [],
  },
  {
    DEGISIM_SAYISI: 1,
    DEGER_KOD: null,
    DEGER_AD: null,
    TABLOSU_VAR: 0,
    SIRA_NO: 4,
    ZORUNLU: "H",
    GIZLI: "H",
    URUN_SORU_EVENT: null,
    KONTROL_GRUP_ID: null,
    KONTROL_GRUP_AD: null,
    KONTROL_GRUP_MESAJ: null,
    ENTEGRASYON_URUN_ID_LIST: "",
    SORU_DEGER_LIST: null,
    SORU_ID: 17,
    SORU_TIP_ID: 5,
    SORU_KOD: "MUST",
    SORU_AD: "MÜŞTERİ BİLGİLERİ",
    MASKE_TIP_ID: null,
    Success: false,
    ErrorList: [],
    WarningList: [],
    MessageList: [],
  },
  {
    DEGISIM_SAYISI: 1,
    DEGER_KOD: null,
    DEGER_AD: null,
    TABLOSU_VAR: 0,
    SIRA_NO: 5,
    ZORUNLU: "E",
    GIZLI: "H",
    URUN_SORU_EVENT: null,
    KONTROL_GRUP_ID: null,
    KONTROL_GRUP_AD: null,
    KONTROL_GRUP_MESAJ: null,
    ENTEGRASYON_URUN_ID_LIST: null,
    SORU_DEGER_LIST: null,
    SORU_ID: 14,
    SORU_TIP_ID: 1,
    SORU_KOD: "TCK",
    SORU_AD: "T.C. KİMLİK NUMARASI",
    MASKE_TIP_ID: 9,
    Success: false,
    ErrorList: [],
    WarningList: [],
    MessageList: [],
  },
  {
    DEGISIM_SAYISI: 1,
    DEGER_KOD: null,
    DEGER_AD: null,
    TABLOSU_VAR: 0,
    SIRA_NO: 5,
    ZORUNLU: "E",
    GIZLI: "H",
    URUN_SORU_EVENT: null,
    KONTROL_GRUP_ID: null,
    KONTROL_GRUP_AD: null,
    KONTROL_GRUP_MESAJ: null,
    ENTEGRASYON_URUN_ID_LIST: null,
    SORU_DEGER_LIST: null,
    SORU_ID: 14,
    SORU_TIP_ID: 1,
    SORU_KOD: "IMEI",
    SORU_AD: "IMEI",
    MASKE_TIP_ID: 8,
    Success: false,
    ErrorList: [],
    WarningList: [],
    MessageList: [],
  },
  // {
  //   DEGISIM_SAYISI: 1,
  //   DEGER_KOD: null,
  //   DEGER_AD: null,
  //   TABLOSU_VAR: 0,
  //   SIRA_NO: 6,
  //   ZORUNLU: "E",
  //   GIZLI: "E",
  //   URUN_SORU_EVENT: null,
  //   KONTROL_GRUP_ID: null,
  //   KONTROL_GRUP_AD: null,
  //   KONTROL_GRUP_MESAJ: null,
  //   ENTEGRASYON_URUN_ID_LIST: "2;8;9;18;22;23;24;25;26;28;33;35;37;39;40;",
  //   SORU_DEGER_LIST: [
  //     {
  //       SORU_DEGER_ID: 474,
  //       SORU_ID: 26,
  //       DEGER_KOD: "001",
  //       DEGER_AD: "ADANA",
  //       MIN_DEGER: null,
  //       MAX_DEGER: null,
  //       DEFAULT_DEGER: null,
  //       REF_SORU_ID: null,
  //       REF_SORU_DEGER_ID: null,
  //       Success: false,
  //       ErrorList: [],
  //       WarningList: [],
  //       MessageList: [],
  //     },
  //     {
  //       SORU_DEGER_ID: 475,
  //       SORU_ID: 26,
  //       DEGER_KOD: "002",
  //       DEGER_AD: "ADIYAMAN",
  //       MIN_DEGER: null,
  //       MAX_DEGER: null,
  //       DEFAULT_DEGER: null,
  //       REF_SORU_ID: null,
  //       REF_SORU_DEGER_ID: null,
  //       Success: false,
  //       ErrorList: [],
  //       WarningList: [],
  //       MessageList: [],
  //     },
  //   ],
  //   SORU_ID: 26,
  //   SORU_TIP_ID: 2,
  //   SORU_KOD: "PLK_IL_KOD",
  //   SORU_AD: "PLAKA İL KODU",
  //   MASKE_TIP_ID: 2,
  //   Success: false,
  //   ErrorList: [],
  //   WarningList: [],
  //   MessageList: [],
  // },
];
interface FormElements extends HTMLFormControlsCollection {
  PBASTAR: HTMLInputElement;
  PBITTAR: HTMLInputElement;
  TCK: HTMLInputElement;
  PLK_IL_KOD: HTMLInputElement;
}

interface LoginFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function ProductForm({ params }: ProductPageProps) {
  function getFormElements(event: React.FormEvent<LoginFormElement>) {
    event.preventDefault();
    console.log({ test: event.currentTarget });

    const { PBASTAR, PBITTAR, TCK, PLK_IL_KOD } = (
      event.currentTarget as LoginFormElement
    ).elements;

    console.log(PBASTAR.value, PBITTAR.value, TCK.value);
  }
  const { product } = params;
  return (
    <div className="pt-16 flex flex-col justify-between custom-min-height">
      <div className="flex flex-col items-center">
        <Link href="/" className="mb-11 inline-block self-start">
          <span className="flex items-center">
            <Icon icon={Icons.ARROW_LEFT} />
            <span className="ml-3 font-semibold text-xl">Teklifinizi Alın</span>
          </span>
        </Link>
        <div className="w-full max-w-md">
          <form
            autoComplete="off"
            noValidate={true}
            id="form1"
            onSubmit={getFormElements}
          >
            <div className="flex flex-col gap-6 mb-6">
              {SORU_LIST.map((product) => (
                <FormElement
                  key={product.SORU_KOD}
                  questionID={product.SORU_TIP_ID + ""}
                  maskID={product.MASKE_TIP_ID + ""}
                  questionName={product.SORU_AD}
                  questionCode={product.SORU_KOD}
                  isRequired={product.ZORUNLU === "E"}
                  // options={product?.SORU_DEGER_LIST?.map((option) => ({
                  //   value: option.DEGER_KOD,
                  //   label: option.DEGER_AD,
                  // }))}
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
