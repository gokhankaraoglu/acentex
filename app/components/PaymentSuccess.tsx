"use client";
import Image from "next/image";
import CustomButton from "../components/elements/CustomButton";
import { useState } from "react";
import PdfViewer from "./PdfViewer";
import { PoliceItem } from "../types/product";

interface PaymentSuccessPayload {
  policeNo: string;
  entegrasyonPoliceHareketKey: string;
}

interface IWalletData {
  status: string;
  data: {};
}

declare global {
  interface Window {
    OnLoadEvent?: {
      postMessage: (iwalletData: IWalletData) => void;
    };
  }
}
function PaymentSuccess({
  policeNo,
  entegrasyonPoliceHareketKey,
}: PaymentSuccessPayload) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const notifyAppLoadSuccess = (policeInfo: PoliceItem): void => {
    const onLoadEvent = window?.OnLoadEvent;
    const iwalletData = {
      status: "completed",
      data: {},
    };
    console.log({ iwalletData });
    if (onLoadEvent) {
      // onLoadEvent.postMessage(iwalletData);
    } else {
      console.warn(
        "OnLoadEvent.postMessage method is unavailable or not a function."
      );
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center custom-min-height">
        <div className="flex flex-col justify-center items-center mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-10">
            İşleminiz gerçekleşti
          </h2>
          <Image
            width={136}
            height={136}
            alt="Success"
            src="/success.png"
            className="mb-10"
          />
          <p className="text-xl font-semibold mb-10">
            Tebrikler AXA Sigorta’dan #{policeNo} nolu cep telefonu poliçeniz
            oluştu.
          </p>
        </div>
        <div className="mb-6 flex flex-col">
          <CustomButton className="mb-6" onClick={handleClick}>
            Poliçenizi görüntülemek ve kaydetmek için tıklayın
          </CustomButton>
        </div>
      </div>
      <PdfViewer
        entegrasyonPoliceHareketKey={entegrasyonPoliceHareketKey}
        isOpen={isOpen}
        close={() => setIsOpen(false)}
      />
    </>
  );
}

export default PaymentSuccess;
