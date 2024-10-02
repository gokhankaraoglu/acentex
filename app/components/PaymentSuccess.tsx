import Image from "next/image";

import Link from "next/link";
import CustomButton from "../components/elements/CustomButton";

interface PaymentSuccessPayload {
  policeId: string;
}

function PaymentSuccess({ policeId }: PaymentSuccessPayload) {
  const handleClick = () => {
    alert(`Police servisi hazir degil, ${policeId}`);
  };
  return (
    <div className="flex flex-col justify-between items-center custom-min-height">
      <div className="flex flex-col justify-center items-center mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-10">İşleminiz gerçekleşti</h2>
        <Image
          width={136}
          height={136}
          alt="Success"
          src="/success.png"
          className="mb-10"
        />
        <p className="text-xl font-semibold mb-10">
          Tebrikler AXA Sigorta’dan #{policeId} nolu cep telefonu poliçeniz
          oluştu.
        </p>
      </div>
      <div className="mb-6 flex flex-col">
        <CustomButton saturated className="mb-6" onClick={handleClick}>
          Poliçenizi görüntülemek veya indirmek için tıklayın
        </CustomButton>
        <Link href="/">
          <CustomButton>Tamam</CustomButton>
        </Link>
      </div>
    </div>
  );
}

export default PaymentSuccess;
