export interface DataItem {
  URUN_ID: number;
  URUN_KOD: string;
  URUN_AD: string;
  GUNCELLEYEN: string;
  GUNCELLEME_TARIH: string;
  GUNCELLEME_TARIH_NUM: number;
}

export interface Data {
  Items: DataItem[];
  Success: boolean;
  ErrorList: any[];
  WarningList: any[];
  MessageList: any[];
}

export interface ProductApiResponse {
  Data: Data;
  Message: string | null;
  Status: number;
}

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
