"use client";
import Link from "next/link";
import { useAppDispatch } from "../store";
import { useAppSelector } from "../store/hook";
import Product from "./Product";
import { setSessionStorage } from "../utils";
import CustomButton from "./elements/CustomButton";

function ProductList() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.token);
  const handleClick = () => {
    console.log("DEENEME");
    setSessionStorage("policeId", "sdsds");
  };
  const products = [
    {
      URUN_ID: 10,
      URUN_KOD: "TRF",
      URUN_AD: "TRAFIK",
      Success: false,
      ErrorList: [],
      WarningList: [],
      MessageList: [],
    },
    {
      URUN_ID: 11,
      URUN_KOD: "KSK",
      URUN_AD: "KASKO",
      Success: false,
      ErrorList: [],
      WarningList: [],
      MessageList: [],
    },
    {
      URUN_ID: 12,
      URUN_KOD: "DAS",
      URUN_AD: "DASK",
      Success: false,
      ErrorList: [],
      WarningList: [],
      MessageList: [],
    },
    {
      URUN_ID: 13,
      URUN_KOD: "TAMSS",
      URUN_AD: "TSS",
      Success: false,
      ErrorList: [],
      WarningList: [],
      MessageList: [],
    },
    {
      URUN_ID: 14,
      URUN_KOD: "SYH",
      URUN_AD: "SEYAHAT",
      Success: false,
      ErrorList: [],
      WarningList: [],
      MessageList: [],
    },
  ];
  return (
    <div className="flex w-full justify-between">
      {products.map((product) => (
        <Product key={product.URUN_ID}>
          <Link href={`/${product.URUN_KOD.toLowerCase()}`}>
            {product.URUN_AD}
          </Link>
        </Product>
      ))}

      <button onClick={handleClick}>Set PoliceId</button>
    </div>
  );
}

export default ProductList;
