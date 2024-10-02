"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import { GUID } from "../hooks/useSetGuid";
import { submitPolicyApprovalSecurePaymentAfter } from "../utils/api/payment";
import PaymentFailed from "../components/PaymentFailed";
import PaymentSuccess from "../components/PaymentSuccess";

function Payment() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState<boolean | null>(null);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const [policeId, setPoliceId] = useState<string | null>(null);

  useEffect(() => {
    const handlePayment = async () => {
      const policeGuid = Cookies.get(GUID);
      const policeId = Cookies.get("policeId");

      if (!policeId) {
        router.push("/");
        return;
      }

      if (!policeGuid) {
        router.push("/");
        return;
      }

      const payloadValueJSON = Cookies.get(policeGuid);
      if (!payloadValueJSON) {
        router.push("/");
        return;
      }

      const payloadValue = JSON.parse(payloadValueJSON);
      const [entegrationId, transactionId, redirectUrl] = payloadValue;

      const { Success } = await submitPolicyApprovalSecurePaymentAfter(
        entegrationId,
        transactionId
      );

      setPaymentStatus(Success);
      setRedirectUrl(redirectUrl);
      setPoliceId(policeId);
      setLoading(false);
    };

    handlePayment();
  }, [router]);

  if (loading) {
    return <Loading />;
  }

  return paymentStatus
    ? policeId && <PaymentSuccess policeId={policeId} />
    : redirectUrl && <PaymentFailed redirectUrl={redirectUrl} />;
}

export default Payment;
