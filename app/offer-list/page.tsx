"use client";

import Link from "next/link";
import { Icon, Icons } from "../components/elements/Icon";
import CustomButton from "../components/elements/CustomButton";
import OfferItem from "../components/OfferItem";
import ContractDialog from "../components/ContractDialog";

function OfferList() {
  return (
    <>
      <div className="pt-16 flex flex-col justify-between custom-min-height">
        <div className="flex flex-col items-center">
          <Link href="/" className="mb-11 inline-block self-start">
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
            <OfferItem>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod
              minus, maiores laudantium explicabo corporis necessitatibus,
              tenetur alias veritatis quisquam, incidunt autem. In voluptas non
              earum excepturi. Aut, quod quis?
            </OfferItem>
            <OfferItem>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod
              minus, maiores laudantium explicabo corporis necessitatibus,
              tenetur alias veritatis quisquam, incidunt autem. In voluptas non
              earum excepturi. Aut, quod quis?
            </OfferItem>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <CustomButton form="form1" type="submit" className="mb-2.5" saturated>
            Koruma Kapsamları
          </CustomButton>
          <p className="text-[#667085] font-extralight text-xs text-center">
            Şu anda Insurelab Sigorta ve Reasürans Brokerlığı sayfasındasınız.
          </p>
        </div>
      </div>
      <ContractDialog />
    </>
  );
}

export default OfferList;
