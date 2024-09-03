"use client";

import Link from "next/link";
import { Icon, Icons } from "../components/elements/Icon";
import CustomButton from "../components/elements/CustomButton";
import OfferItem from "../components/OfferItem";
import InsuranceDetailDialog from "../components/dialogs/InsuranceDetailDialog";
import { useEffect, useState } from "react";
import { getSessionStorage } from "../utils";
import { post } from "../utils/api";
import { GetEntegrasyonPolicePayload } from "../types/question";
import { PoliceApiResponse, PoliceItem, ProductItem } from "../types/product";
import Spinner from "../components/elements/Spinner";

export enum EntegrasyonPoliceDurumID {
  BEKLIYOR = 1,
  TEKLIF = 2,
  POLICE = 3,
  HATA = 4,
}

function OfferList() {
  const [showContract, setShowContract] = useState(false);
  const [offerList, setOfferList] = useState<any[]>([]);

  useEffect(() => {
    const policeId = getSessionStorage<GetEntegrasyonPolicePayload>("policeId");

    const fetchProducts = async () => {
      policeId && (await handleGePolice(+policeId));
    };

    fetchProducts();

    let intervalId: NodeJS.Timeout | null = null;

    if (
      offerList.some(
        (item) =>
          item.ENTEGRASYON_POLICE_DURUM_ID === EntegrasyonPoliceDurumID.BEKLIYOR
      )
    ) {
      intervalId = setInterval(fetchProducts, 15000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  async function handleGePolice(policeId: number) {
    try {
      const {
        Data: { Items },
      } = await post<GetEntegrasyonPolicePayload, PoliceApiResponse>({
        path: "/ExternalProduction/GET_ENTEGRASYON_POLICE",
        payload: {
          POLICE_ID: Number(policeId),
        },
      });
      setOfferList(Items);
      console.log({ Items });
    } catch (error) {
      console.error("Failed to update question answers", error);
    }
  }

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
            <h2 className="text-2xl font-bold">Samsung Galaxy S Ultra</h2>
            <p className="text-[#667085] font-extralight text-lg">
              Samsung Galaxy S Ultra cihazına ait teklifleri burada
              görüntüleyebilirsiniz.
            </p>
          </div>
          <div className="w-full max-w-md overflow-y-auto flex flex-col justify-center items-center gap-y-6 mb-6">
            {!!offerList ? (
              offerList.map(
                (
                  {
                    ENTEGRASYON_URUN_AD,
                    SGR_SIRKET_MUSTERI_ROL_AD,
                    TOPLAM_PRIM_TL,
                    ENTEGRASYON_POLICE_DURUM_ID,
                    BASLAMA_TARIH,
                    BITIS_TARIH,
                  },
                  index
                ) => (
                  <OfferItem
                    title={ENTEGRASYON_URUN_AD}
                    company={SGR_SIRKET_MUSTERI_ROL_AD}
                    price={TOPLAM_PRIM_TL}
                    policeStatusId={ENTEGRASYON_POLICE_DURUM_ID}
                    startDate={BASLAMA_TARIH}
                    endDate={BITIS_TARIH}
                    key={index}
                  />
                )
              )
            ) : (
              <Spinner />
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-3">
          <CustomButton
            form="form1"
            type="submit"
            className="mb-3.5"
            saturated
            onClick={() => setShowContract(true)}
          >
            Koruma Kapsamları
          </CustomButton>
          <p className="text-[#667085] font-extralight text-xs text-center">
            Şu anda Insurelab Sigorta ve Reasürans Brokerlığı sayfasındasınız.
          </p>
        </div>
      </div>
      <InsuranceDetailDialog
        isOpen={showContract}
        close={() => setShowContract(false)}
      />
    </>
  );
}

export default OfferList;
