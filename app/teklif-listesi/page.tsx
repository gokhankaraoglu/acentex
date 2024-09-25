"use client";

import Link from "next/link";
import { Icon, Icons } from "../components/elements/Icon";
import CustomButton from "../components/elements/CustomButton";
import OfferItem from "../components/OfferItem";
import InsuranceDetailDialog from "../components/dialogs/InsuranceDetailDialog";
import { useEffect, useState, useCallback } from "react";
import { delay, getSessionStorage, setSessionStorage } from "../utils";
import { EntegrasyonPoliceDurumID, PoliceItem } from "../types/product";
import Spinner from "../components/elements/Spinner";
import { fetchOfferData } from "../utils/api/offer";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

function OfferList() {
  const router = useRouter();
  const [showContract, setShowContract] = useState(false);
  const [offer, setOffer] = useState<PoliceItem>();

  useEffect(() => {
    const policeId = getSessionStorage<number>("policeId");

    if (!policeId) {
      router.push("/");
      return;
    }

    fetchOffer(policeId);
  }, []);

  const fetchOffer = useCallback(async (policeId: number) => {
    try {
      const offerData = await fetchOfferData(policeId);
      if (
        offerData?.ENTEGRASYON_POLICE_DURUM_ID ===
        EntegrasyonPoliceDurumID.BEKLIYOR
      ) {
        await delay(3000);
        fetchOffer(policeId);
      }
      setOffer(offerData);
    } catch (error) {
      console.error("Failed to fetch police data", error);
    }
  }, []);

  const selectOffer = (offer: PoliceItem) => {
    setSessionStorage("selected-police", {
      title: offer.URUN_AD,
      company: offer.SGR_SIRKET_MUSTERI_ROL_AD,
      entegrationId: offer.ENTEGRASYON_POLICE_HAREKET_ID,
      startDate: offer.BASLAMA_TARIH,
      endDate: offer.BITIS_TARIH,
      price: offer.TOPLAM_PRIM,
      model: offer.MARKA_TIP_AD,
      brand: offer.MARKA_AD,
    });
    router.push("/sigorta-teklifi");
  };
  return (
    <>
      <div className="pt-16 flex flex-col justify-between custom-min-height">
        <div className="flex flex-col items-center">
          <Link href="/" className="mb-11 inline-block self-start">
            <span className="flex items-center">
              <Icon icon={Icons.ARROW_LEFT} />
            </span>
          </Link>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold">Cep Telefonu Sigortası</h2>
            <p className="text-[#667085] font-extralight text-lg">
              Cep telefonunuza ait sigorta tekliflerini burada
              görüntüleyebilirsiniz.
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-y-6 mb-6">
            {!!offer ? (
              <OfferItem
                title={offer.ENTEGRASYON_URUN_AD}
                company={offer.SGR_SIRKET_MUSTERI_ROL_AD}
                price={offer.TOPLAM_PRIM_TL}
                policeStatusId={offer.ENTEGRASYON_POLICE_DURUM_ID}
                status={offer.DURUM_ACIKLAMA || ""}
              />
            ) : (
              <Spinner />
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-3">
          <CustomButton
            className="mb-3.5"
            saturated
            onClick={() => setShowContract(true)}
          >
            Koruma Kapsamları
          </CustomButton>
          <Footer />
        </div>
      </div>
      <InsuranceDetailDialog
        isOpen={showContract}
        confirm={() => offer?.TOPLAM_NET_PRIM && selectOffer(offer)}
        close={() => setShowContract(false)}
      />
    </>
  );
}

export default OfferList;
