import { post } from ".";

export interface PolicyApprovalPayload {
  ENTEGRASYON_POLICE_HAREKET_ID: number;
  TAKSIT_KOD: string | null;
  CALLBACK_URL: string | null;
}

export interface PolicyApprovalAfterPayload {
  ENTEGRASYON_POLICE_HAREKET_ID: number;
  TRANSACTION_ID: string;
  ACIKLAMA: string | null;
  TRANSACTION_LOG: string | null;
}

export async function submitPolicyApprovalSecurePayment(
  hareketId: number,
  taksitKod: string | null = null,
  callbackUrl: string | null = null
): Promise<void> {
  await post<PolicyApprovalPayload, void>({
    path: "/ExternalProduction/POLICY_APPROVAL_SECURE_PAYMENT_BEFORE",
    payload: {
      ENTEGRASYON_POLICE_HAREKET_ID: hareketId,
      TAKSIT_KOD: taksitKod,
      CALLBACK_URL: callbackUrl,
    },
  });
}

export async function submitPolicyApprovalSecurePaymentAfter(
  hareketId: number,
  transactionId: string,
  description: string | null = null,
  transactionLog: string | null = null
): Promise<void> {
  await post<PolicyApprovalAfterPayload, void>({
    path: "/ExternalProduction/POLICY_APPROVAL_SECURE_PAYMENT_AFTER",
    payload: {
      ENTEGRASYON_POLICE_HAREKET_ID: hareketId,
      TRANSACTION_ID: transactionId,
      ACIKLAMA: description,
      TRANSACTION_LOG: transactionLog,
    },
  });
}
