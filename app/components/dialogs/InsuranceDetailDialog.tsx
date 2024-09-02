import { Dialog } from "@headlessui/react";
import CustomButton from "../elements/CustomButton";
import { Icon, Icons } from "../elements/Icon";
import Link from "next/link";
import { contractText } from "@/app/contracts";

function InsuranceDetailDialog({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  return (
    <Dialog open={isOpen} onClose={() => close()}>
      <div className="z-1 fixed inset-0 flex justify-center items-end">
        <div
          className="w-full h-full z-0 absolute inset-0 opacity-50"
          onClick={close}
        />
        <div className="container relative flex items-end">
          <div className="bg-white rounded-t-3xl shadow w-full">
            <div className="p-4 flex items-center justify-end border-b-2">
              <button className="focus:outline-none" onClick={close}>
                <Icon icon={Icons.CLOSE_ICON} />
              </button>
            </div>
            <div className="flex flex-col gap-4 px-4 py-6 sm:px-6 md:px-8">
              <p className="text-center text-2xl font-bold mb-10">
                Koruma Kapsamları
              </p>
              <div className="h-[410px] overflow-y-auto">
                {contractText.map(({ title, icon, description }, index) => (
                  <section className="mb-8" key={index}>
                    <div className="flex items-center text-[#667085] mb-2.5">
                      <Icon icon={icon} />
                      <h2 className="ml-2 text-2xl font-semibold">{title}</h2>
                    </div>
                    <p className="text-black text-sm font-light">
                      {description}
                    </p>
                  </section>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-6">
              <Link href="/sigorta-teklifi">
                <CustomButton form="form1" type="submit" className="mb-3.5">
                  Devam Et
                </CustomButton>
              </Link>
              <p className="text-[#667085] font-extralight text-xs text-center">
                Şu anda Insurelab Sigorta ve Reasürans Brokerlığı
                sayfasındasınız.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default InsuranceDetailDialog;
