export interface SoruDeger {
  SORU_DEGER_ID: number;
  SORU_ID: number;
  DEGER_KOD: string;
  DEGER_AD: string;
  MIN_DEGER: any;
  MAX_DEGER: any;
  DEFAULT_DEGER: any;
  REF_SORU_ID: any;
  REF_SORU_DEGER_ID: any;
  GUNCELLEYEN: string;
  GUNCELLEME_TARIH: string;
  GUNCELLEME_TARIH_NUM: number;
}

export interface SoruListItem {
  DEGISIM_SAYISI: number;
  DEGER_KOD: string | number;
  DEGER_AD: string | null;
  TABLOSU_VAR: number;
  SIRA_NO: number;
  ZORUNLU: string;
  GIZLI: string;
  URUN_SORU_EVENT: any;
  KONTROL_GRUP_ID: any;
  KONTROL_GRUP_AD: any;
  KONTROL_GRUP_MESAJ: any;
  DIZAYN_GRUP: string;
  ENTEGRASYON_URUN_ID_LIST: any;
  SGR_SIRKET_MUSTERI_ROL_ID: any;
  SORU_DEGER_LIST: SoruDeger[];
  SORU_ID: number;
  SORU_TIP_ID: number;
  SORU_KOD: string;
  SORU_AD: string;
  MASKE_TIP_ID: any;
  SIRALAMA_TIP: any;
  GUNCELLEYEN: any;
  GUNCELLEME_TARIH: any;
  GUNCELLEME_TARIH_NUM: any;
  VALUE: string;
}

export interface RootObject {
  POLICE_ID: any;
  POLICE_KEY: any;
  POLICE_GUID: string;
  POLICE_PARTAJ_GUID: any;
  SGR_MUSTERI_ROL_ID: any;
  SGR_MUSTERI_ROL_AD: any;
  SGE_MUSTERI_ROL_ID: any;
  SGE_MUSTERI_ROL_AD: any;
  MT_MUSTERI_ROL_ID: any;
  MT_MUSTERI_ROL_AD: any;
  TP_MUSTERI_ROL_ID: any;
  TP_MUSTERI_ROL_AD: any;
  IS_ATAMA: any;
  KIMLIK_BILGI: any;
  URUN_LIST: any[];
  SORU_LIST: SoruListItem[];
  SORU_MASKE_LIST: MaskType[];
}

export interface MaskType {
  MASKE_TIP_ID: number;
  OPTIONS: string;
  MASKE_TIP_AD: string;
  PLACEHOLDER: string | null;
  MASKE_EVENT_ID: number | null;
  MASKE_EVENT_AD: string | null;
  EVENT_NAME: string | null;
  PARAMETERS: string | null;
  SCRIPT_CODE: string | null;
}

export interface PolicePayload {
  POLICE_GUID: string;
}

export interface AnswerQuestionPayload extends PolicePayload {
  SORU_LIST: SoruListItem[];
}

export interface PostPolicyQuestionResponse {
  POLICE_ID: number;
  POLICE_KEY: string;
  POLICE_GUID: string;
  POLICE_PARTAJ_GUID: string;
  SGR_MUSTERI_ROL_ID: number | null;
  SGR_MUSTERI_ROL_AD: string | null;
  SGE_MUSTERI_ROL_ID: number | null;
  SGE_MUSTERI_ROL_AD: string | null;
  MT_MUSTERI_ROL_ID: number | null;
  MT_MUSTERI_ROL_AD: string | null;
  TP_MUSTERI_ROL_ID: number | null;
  TP_MUSTERI_ROL_AD: string | null;
  IS_ATAMA: any;
  KIMLIK_BILGI: any;
  URUN_LIST: any[];
  SORU_LIST: any[];
  URUN_SORU_EVENT_LIST: any[];
  SORU_MASKE_LIST: any[];
  SORU_TABLO_LIST: any[];
  ENTEGRASYON_POLICE: any[];
  ENTEGRASYON_PARTAJ: any[];
  BAGLI_MUSTERI: any[];
  MASKED_SORU_LIST: MaskType[];
  is_mobile: boolean;
  IS_OTO_TEKLIF: boolean;
  Success: boolean;
  ErrorList: any[];
  WarningList: any[];
  MessageList: any[];
}

export interface GetEntegrasyonPolicePayload {
  POLICE_ID: number;
}
