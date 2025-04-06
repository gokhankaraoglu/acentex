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

export interface ApiResponse<T> {
  Data: T;
  Message: string | null;
  Status: number;
}

export interface IWalletData {
  status: string;
  data: {
    police_guid: string;
  };
}

declare global {
  interface Window {
    OnLoadEvent?: {
      postMessage: (iwalletData: string) => void;
    };
  }
}
