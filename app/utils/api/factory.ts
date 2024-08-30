import { QueryKey, useMutation, useQuery } from "@tanstack/react-query";
import { get, post } from ".";
export const Paths = {
  token: "/token",
  set_teklif_guid: "/set_teklif_guid",
  get_urun: "/get_urun",
  set_teklif_urun: "/set_teklif_urun",
  post_policy_question_answer: "/post_policy_question_answer",
  post_policy_question: "/post_policy_question",
  get_entegrasyon_police: "/get_entegrasyon_police",
  get_teklifler_pdf: "/get_teklifler_pdf",
  get_entegrasyon_urun_taksit: "/get_entegrasyon_urun_taksit",
  policy_approval: "/policy_approval",
  get_policy_document: "/get_policy_document",
  get_payment_document: "/get_payment_document",
  get_entegrasyon_police_by_enteg_police:
    "/get_entegrasyon_police_by_enteg_police",
  get_entegrasyon_police_musteri: "/get_entegrasyon_police_musteri",
  get_entegrasyon_police_soru: "/get_entegrasyon_police_soru",
  get_entegrasyon_police_teminat: "/get_entegrasyon_police_teminat",
};

export function useGet<T>(path: string, queryKey?: QueryKey) {
  // We are using path as a query key if queryKey is not provided
  const fetchQueryKey: QueryKey = queryKey || [{ path }];
  const { data } = useQuery({
    queryKey: fetchQueryKey,
    queryFn: () => get<T>({ path }),
  });
  return data;
}

export function useGetList<T>(path: string, queryKey?: QueryKey) {
  return useGet<T[]>(path, queryKey) || [];
}

interface Props {
  baseQuery: string;
  queryKey?: QueryKey;
}

export function useMutationApi<P, T>({ baseQuery }: Props) {
  function createRequest(payload: P): Promise<T> {
    return post<P, T>({
      path: baseQuery,
      payload,
    });
  }

  function useCreateItemMutation() {
    return useMutation({
      mutationFn: createRequest,
      onError: (error: any) => {
        const errorMessage =
          error?.response?.data?.message || "An unexpected error occurred";
        console.log(errorMessage);
        // setTimeout(() => toast.error(t(errorMessage)), 200);
      },
    });
  }

  const {
    mutate: createRequestMutation,
    isPending,
    isError,
    isSuccess,
  } = useCreateItemMutation();

  return {
    createRequestMutation,
    isError,
    isPending,
    isSuccess,
  };
}
