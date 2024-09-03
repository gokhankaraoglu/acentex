import React from "react";
import { Icon, Icons } from "./elements/Icon";
import { contractText } from "../contracts";
import { setSessionStorage } from "../utils";
import { useRouter } from "next/navigation";
import Spinner from "./elements/Spinner";
import { EntegrasyonPoliceDurumID } from "../teklif-listesi/page";

interface OfferItemProps {
  customer?: string;
  startDate: string;
  endDate: string;
  company: string;
  deviceName?: string;
  title: string;
  price: number;
  policeStatusId: number;
}

function OfferItem({
  title,
  company,
  price,
  policeStatusId,
  startDate,
  endDate,
  customer = undefined,
  deviceName = undefined,
}: OfferItemProps) {
  const router = useRouter();

  function handleSelectPolice() {
    setSessionStorage("selected-police", {
      title,
      company,
      price,
      policeStatusId,
      startDate,
      endDate,
      customer,
      deviceName,
    });
    router.push("/sigorta-teklifi");
  }

  return (
    <div
      className="rounded-xl max-w-[405px] max-h-[327px] w-full h-full bg-white p-4 border-solid border-[1px] border-[#0F1827] cursor-pointer"
      onClick={() => handleSelectPolice()}
    >
      <div className="flex items-center mb-3.5">
        <img src="/axa-logo.png" alt="Axa logo" width="54" height="54" />
        <div className="ml-3.5 flex flex-col justify-between">
          <p className="text-xs font-semibold">{title}</p>
          <p className="text-[#667085] text-lg font-extralight">
            {EntegrasyonPoliceDurumID.TEKLIF === policeStatusId ? (
              price
            ) : EntegrasyonPoliceDurumID.BEKLIYOR === policeStatusId ? (
              <Spinner />
            ) : (
              "Hata Oluştu"
            )}
          </p>
        </div>
      </div>
      <p className="flex text-sm font-light text-[#667085] items-center">
        <Icon icon={Icons.INFO_ICON} />
        <span className="ml-1">{company} güvencesiyle</span>
      </p>
      <hr className="my-3.5 border-t-1 border-[#0F1827]" />
      <div>
        {contractText.map(({ title, icon }, index) => (
          <section className="mb-3" key={index}>
            <div className="flex items-end text-[#667085]">
              <Icon icon={icon} className="h-5 w-5" />
              <h2 className="ml-2 text-xs font-light">{title}</h2>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default OfferItem;
