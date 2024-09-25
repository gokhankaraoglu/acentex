import { useState } from "react";
import InformationFormDialog from "./dialogs/InformationFormDialog";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { formatName } from "../utils";
import { submitPolicyApprovalSecurePayment } from "../utils/api/payment";
import { StoredPoliceItem } from "../types/product";

interface OfferProps extends StoredPoliceItem {}

function Offer({
  title,
  company,
  price,
  startDate,
  endDate,
  brand,
  model,
  entegrationId,
}: OfferProps) {
  const [showInformationForm, setShowInformationForm] = useState(false);
  const router = useRouter();

  function handleSendForm(event: React.FormEvent) {
    event.preventDefault();

    // submitPolicyApprovalSecurePayment(entegrationId, null, null);
    // router.push("/odeme");
  }

  return (
    <>
      <div className="rounded-xl max-w-[405px] w-full bg-white p-4 border-solid border-[1px] border-[#0F1827] ">
        <div className="mb-2.5 flex">
          <Image src="/axa-logo.png" alt="Axa logo" width="40" height="40" />
          <div className="ml-2.5 w-full">
            <div className="flex justify-between text-[#0F1827] text-sm font-medium align-middle md:align-top">
              <p>{formatName(title) ?? "-"}</p>
              <p>₺{price ?? "-"}</p>
            </div>
            <p className="flex text-xs font-extralight text-[#667085]">
              {formatName(company)} güvencesiyle
            </p>
          </div>
        </div>
        <hr className="my-2 border-t-1 border-[#667085]" />
        <div className="text-sm text-[#0F1827]">
          {/* <div>
            <p className="font-light text-xs text-[#667085]">Sigortalı</p>
            <p className="text-sm font-normal ">{brand ?? "-"}</p>
          </div>
          <hr className="my-2 border-t-1 border-[#667085]" /> */}
          <div>
            <p className="font-light text-xs text-[#667085]">Cihaz Bilgileri</p>
            <p className="text-sm font-normal">{`${formatName(
              brand
            )} ${formatName(model)}`}</p>
          </div>
          {/* <hr className="my-2 border-t-1 border-[#667085]" />
          <div>
            <p className="font-light text-xs text-[#667085]">Cihaz Bedeli</p>
            <p className="text-sm font-normal">{price ?? "-"}</p>
          </div> */}
          <hr className="my-2 border-t-1 border-[#667085]" />
          <div>
            <p className="font-light text-xs text-[#667085]">
              Poliçe Başlangıç ve Bitiş Tarihi
            </p>
            <p className="text-sm font-normal">
              {startDate} - {endDate}
            </p>
          </div>
        </div>
        <form id="form2" onSubmit={handleSendForm} className="mt-2.5">
          <div className="flex items-center mb-1.5">
            <input type="checkbox" id="declaration" required />
            <label
              htmlFor="declaration"
              className="ml-2 text-xs font-extralight text-[#667085]"
            >
              Cihazımın hasarsız olduğunu beyan ediyorum.
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="accept" required />
            <label
              htmlFor="accept"
              className="ml-2 text-xs font-extralight text-[#667085]"
            >
              <span
                className="text-[#6941C6] underline cursor-pointer"
                onClick={() => {
                  setShowInformationForm(true);
                }}
              >
                Belgeleri
              </span>{" "}
              okudum kabul ediyorum.
            </label>
          </div>
        </form>
      </div>
      <InformationFormDialog
        isOpen={showInformationForm}
        close={() => setShowInformationForm(false)}
      />
    </>
  );
}

export default Offer;
