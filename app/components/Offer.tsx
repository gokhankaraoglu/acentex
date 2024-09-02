import React from "react";
import { Icon, Icons } from "./elements/Icon";
import { contractText } from "../contracts";

interface OfferItemProps {
  title: string;
  company: string;
  price: number;
}

function Offer({ title, company, price }: OfferItemProps) {
  return (
    <div className="rounded-xl max-w-[405px] max-h-[327px] w-full h-full bg-white p-4 border-solid border-[1px] border-[#0F1827] ">
      <div className="flex items-center mb-3.5">
        <img src="/axa-logo.png" alt="Axa logo" width="54" height="54" />
        <div className="ml-3.5 flex flex-col justify-between">
          <p className="text-xs font-semibold">{title}</p>
          <p className="text-[#667085] text-lg font-extralight">
            {price}₺16.198,20
          </p>
        </div>
      </div>
      <p className="flex text-sm font-light text-[#667085] items-center">
        <Icon icon={Icons.INFO_ICON} />
        <span className="ml-1">{company} güvencesiyle</span>
      </p>
      <hr className="my-3.5 border-t-1 border-[#0F1827]" />
    </div>
  );
}

export default Offer;
