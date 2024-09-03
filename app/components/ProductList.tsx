"use client";
import Link from "next/link";
import { setSessionStorage } from "../utils";
import CustomButton from "./elements/CustomButton";
import { Fragment, useEffect, useState } from "react";
import { Item } from "../utils/api/product";
import { post } from "../utils/api";
import { ProductApiResponse, DataItem } from "../types";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "../loading";
import useToken, { getToken } from "../hooks/useToken";

function ProductList() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     getToken()
  //     await getProducts();
  //   };

  //   fetchProducts();
  // }, []);
  // const [products, setProducts] = useState<DataItem[]>([]);

  // async function getProducts() {
  //   try {
  //     const {
  //       Data: { Items },
  //     } = await post<Item, ProductApiResponse>({
  //       path: "/ExternalProduction/GET_URUN",
  //       payload: {
  //         URUN_ID: null,
  //         URUN_AD: null,
  //         URUN_KOD: null,
  //       },
  //     });
  //     setProducts(Items);
  //   } catch (error) {
  //     console.error("Failed to fetch initial token", error);
  //   }
  // }
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const URUN_AD = searchParams.get("URUN_AD");
    const URUN_KOD = searchParams.get("URUN_KOD");
    const URUN_ID = searchParams.get("URUN_ID");

    if (URUN_AD && URUN_KOD && URUN_ID) {
      setSessionStorage("product", {
        URUN_AD,
        URUN_KOD,
        URUN_ID,
      });
    } else {
      setSessionStorage("product", {
        URUN_ID: 49,
        URUN_KOD: "CPTLFNSGR",
        URUN_AD: "CEP TELEFONU SİGORTASI",
      });
    }
    router.push("/teklif-form");
  }, []);

  return <Loading />;
}

export default ProductList;
