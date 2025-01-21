import { Dialog } from "@headlessui/react";
import CustomButton from "./elements/CustomButton";
import Footer from "./Footer";

function SlideUpDialog({
  isOpen,
  confirm,
  show,
  close,
}: {
  isOpen: boolean;
  confirm: () => void;
  show: () => void;
  close: () => void;
}) {
  return (
    <Dialog open={isOpen} onClose={() => close()}>
      <div className="fixed inset-0 flex justify-center items-end z-1">
        <div className="absolute inset-0 bg-black opacity-50" onClick={close} />
        <div className="container bg-white rounded-t-3xl mx-1 relative p-6 animation-slideDown">
          <div className="px-3 pb-8 text-center">
            <p className="text-black text-xl font-bold pb-2.5">
              Poliçelerinizi Görüntüleyin
            </p>
            <p className="text-gray-700  text-base font-extralight">
              Poliçelerinizi iWallet&gt;Sigortalarım bölümünden erişmek ister
              misiniz?
            </p>
          </div>

          <div className="flex flex-col items-center gap-3.5">
            <CustomButton onClick={show} saturated>
              Görüntüle
            </CustomButton>
            <CustomButton onClick={confirm}>Devam Et</CustomButton>
            <Footer />
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default SlideUpDialog;
