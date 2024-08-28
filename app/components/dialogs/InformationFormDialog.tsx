import { Dialog } from "@headlessui/react";
import CustomButton from "../elements/CustomButton";
import { Icon, Icons } from "../elements/Icon";
import Link from "next/link";
import { informationForm } from "../../contracts";

function InformationFormDialog({
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
                Tam Kapsamlı Cep Telefonu Sigortası Bilgilendirme Formu
              </p>
              <div className="h-[400px] overflow-y-auto">
                {informationForm.map(({ title, description }, index) => (
                  <section className="mb-8" key={index}>
                    {title && (
                      <div className="flex items-center text-black mb-2.5">
                        <h2 className="text-xs font-bold">{title}</h2>
                      </div>
                    )}
                    <p className="text-black text-xs font-normal">
                      {description}
                    </p>
                  </section>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-6">
              <Link href="/odeme">
                <CustomButton form="form1" type="submit" className="mb-3.5">
                  Okudum, kabul ediyorum.
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

export default InformationFormDialog;
