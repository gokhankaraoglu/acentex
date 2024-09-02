interface ApiResponse {
  Data: Data;
  Message: string | null;
  Status: number;
}
export interface ProductItem {
  URUN_ID: number;
  URUN_KOD: string;
  URUN_AD: string;
  GUNCELLEYEN: string;
  GUNCELLEME_TARIH: string;
  GUNCELLEME_TARIH_NUM: number;
}

export interface Data {
  Items: ProductItem[] | PoliceItem[];
  Success: boolean;
  ErrorList: any[];
  WarningList: any[];
  MessageList: any[];
}

export interface ProductApiResponse extends ApiResponse {}

export interface ProductDetail {
  VISIBLE: 1;
  URUN_AD: string;
  URUN_ID: number;
  URUN_KOD: string;
}

export interface ProductQuestionPayload {
  POLICE_GUID: string;
  URUN_LIST: ProductDetail[];
}

export interface PoliceApiResponse extends ApiResponse {}

export interface PoliceItem {
  ONLINE: string;
  ESKI_HAREKET_ID: number | null;
  TAHSILAT_TIP_ID: number;
  SECIM: any | null;
  IS_ATAMA_ID: any | null;
  URUN_ID: number;
  URUN_KOD: string;
  ENTEGRASYON_ID: number;
  ENTEGRASYON_KOD: string;
  ENTEGRASYON_URUN_KOD: string;
  ENTEGRASYON_URUN_AD: string;
  URUN_AD: string;
  SIRKET_URUN_KOD: any | null;
  SGR_SIRKET_MUSTERI_ROL_ID: number;
  SGR_SIRKET_MUSTERI_ROL_AD: string;
  SGR_MUSTERI_ROL_ID: any | null;
  SGR_MUSTERI_ROL_AD: any | null;
  SGE_MUSTERI_ROL_ID: any | null;
  SGE_MUSTERI_ROL_AD: any | null;
  MT_MUSTERI_ROL_ID: any | null;
  MT_MUSTERI_ROL_AD: any | null;
  TP_MUSTERI_ROL_ID: any | null;
  TP_MUSTERI_ROL_AD: any | null;
  ENTEGRASYON_POLICE_HAREKET_ID: number;
  ENTEGRASYON_POLICE_HAREKET_KEY: any | null;
  ENTEGRASYON_POLICE_LOG_ID: any | null;
  REVIZE_NO: number;
  ENTEGRASYON_POLICE_NO: any | null;
  ENTEGRASYON_ZEYL_NO: any | null;
  ENTEGRASYON_YENILEME_NO: any | null;
  ENTEGRASYON_POLICE_DURUM_ID: number;
  ENTEGRASYON_POLICE_DURUM_AD: string;
  ACENTE_NO: any | null;
  TALI_ACENTE_NO: any | null;
  ZEYL_KOD: any | null;
  ZEYL_AD: any | null;
  SASI_NO: any | null;
  T_I: any | null;
  SIRKET_SON_DURUM: any | null;
  MT: any | null;
  TOPLAM_PRIM: any | null;
  TOPLAM_PRIM_TL: any | null;
  TOPLAM_NET_PRIM: any | null;
  TOPLAM_NET_PRIM_TL: any | null;
  TOPLAM_VERGI: any | null;
  TOPLAM_VERGI_TL: any | null;
  TOPLAM_KOMISYON: any | null;
  TOPLAM_KOMISYON_TL: any | null;
  DOVIZ_ID: any | null;
  DOVIZ_KUR: any | null;
  DOVIZ_KOD: any | null;
  DOVIZ_AD: any | null;
  DURUM_ACIKLAMA: string;
  POLICE_PARTAJ_GUID: string;
  TAKSIT: any | null;
  BASLAMA_TARIH: any | null;
  BITIS_TARIH: any | null;
  TANZIM_TARIH: string;
  ESKI_SGR_SIRKET_MUSTERI_ROL_ID: any | null;
  ESKI_SGR_SIRKET_MUSTERI_ROL_AD: any | null;
  ESKI_POLICE_NO: any | null;
  POLICE_IS_TIP: any | null;
  SECURE_PAYMENT_REF_NO: any | null;
  PLCBRT_ISLEM_REFERANS_ID: any | null;
  PLCKOM_ISLEM_REFERANS_ID: any | null;
  ALT_GRUP_KOD: any | null;
  ALT_GRUP_AD: any | null;
  TEKLIF_GECERLILIK_TARIH: any | null;
  TEKLIF_GECERLILIK_SURE: number;
  HATA_GRUP: any | null;
  SGR_TCK_NO: any | null;
  SGR_VK_NO: any | null;
  ENTEGRASYON_POLICE_ID: number;
  SON_HAREKET_ID: number;
  POLICE_ID: number;
  POLICE_GUID: string;
  ENTEGRASYON_URUN_ID: number;
  GUNCELLEYEN: string;
  GUNCELLEME_TARIH: string;
  GUNCELLEME_TARIH_NUM: number;
  Success: boolean;
  ErrorList: any[];
  WarningList: any[];
  MessageList: any[];
}
