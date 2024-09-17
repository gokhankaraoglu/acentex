"use client";

import Link from "next/link";
import { Icon, Icons } from "../components/elements/Icon";
import CustomButton from "../components/elements/CustomButton";
import Offer from "../components/Offer";
import { getSessionStorage } from "../utils";
import { useEffect, useState } from "react";

function SelectedOffer() {
  const [police, setPolice] = useState<any>({});
  useEffect(() => {
    const selectedPolice: any = getSessionStorage("selected-police");

    setPolice(selectedPolice);
  }, []);

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
            <Offer
              title={police?.title}
              company={police?.company}
              startDate={police?.startDate}
              endDate={police?.endDate}
              price={police?.price}
              entegrationId={police?.entegrationId}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <CustomButton
            form="form2"
            type="submit"
            className="mb-3.5"
            disabled={!police?.entegrationId}
          >
            Devam Et
          </CustomButton>

          <p className="text-[#667085] font-extralight text-xs text-center">
            Şu anda Insurelab Sigorta ve Reasürans Brokerlığı sayfasındasınız.
          </p>
        </div>
      </div>
    </>
  );
}

export default SelectedOffer;
