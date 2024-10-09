interface Item {
  FILE_NAME: string;
  BINARY_DATA: string | null;
  FILE_URL: string | null;
  CONTENT_TYPE: string;
  EVRAK_HAVUZ_ID: number | null;
  Success: boolean;
  ErrorList: string[];
  WarningList: string[];
  MessageList: string[];
}

export interface DocumentData {
  Items: Item[];
  Success: boolean;
  ErrorList: string[];
  WarningList: string[];
  MessageList: string[];
}
