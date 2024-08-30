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
  DEGER_KOD: string;
  DEGER_AD: string;
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
}

export interface AnswerQuestionPayload {
  POLICE_GUID: string;
  SORU_LIST: SoruListItem[];
}
