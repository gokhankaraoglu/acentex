"use client";

import Link from "next/link";
import { Icon, Icons } from "../components/elements/Icon";
import CustomButton from "../components/elements/CustomButton";
import { useState } from "react";
import InformationFormDialog from "../components/dialogs/InformationFormDialog";
import Offer from "../components/Offer";

function OfferList() {
  const [showInformationForm, setShowInformationForm] = useState(false);
  return (
    <>
      <div className="pt-16 flex flex-col justify-between custom-min-height">
        <div className="flex flex-col items-center">
          <Link
            href="/teklif-listesi"
            className="mb-11 inline-block self-start"
          >
            <span className="flex items-center">
              <Icon icon={Icons.ARROW_LEFT} />
              {/* <span className="ml-3 font-semibold text-xl">Teklife Dön</span> */}
            </span>
          </Link>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold">Sigorta Teklifi</h2>
            <p className="text-[#667085] font-extralight text-lg">
              Teklifin detayları aşağıdaki gibidir. Onaylayarak ödeme adımına
              geçebilirsiniz.
            </p>
          </div>
          <div className="w-full max-w-md overflow-y-auto flex flex-col justify-center items-center gap-y-6">
            <Offer />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <CustomButton
            form="form1"
            type="submit"
            className="mb-3.5"
            onClick={() => {
              setShowInformationForm(true);
            }}
          >
            Devam Et
          </CustomButton>
          <p className="text-[#667085] font-extralight text-xs text-center">
            Şu anda Insurelab Sigorta ve Reasürans Brokerlığı sayfasındasınız.
          </p>
        </div>
      </div>
      <InformationFormDialog
        isOpen={showInformationForm}
        close={() => setShowInformationForm(false)}
      />
    </>
  );
}

export default OfferList;
