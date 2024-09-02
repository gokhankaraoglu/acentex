"use client";
import Link from "next/link";
import Product from "./Product";
import { setSessionStorage } from "../utils";
import CustomButton from "./elements/CustomButton";
import { Fragment, useEffect, useState } from "react";
import { Item } from "../utils/api/product";
import { post } from "../utils/api";
import { ProductApiResponse, DataItem } from "../types";

function ProductList() {
  // const dispatch = useAppDispatch();
  // const { token } = useAppSelector((state) => state.token);
  useEffect(() => {
    const fetchProducts = async () => {
      await getProducts();
    };

    fetchProducts();
  }, []);
  const [products, setProducts] = useState<DataItem[]>([]);

  async function getProducts() {
    try {
      const {
        Data: { Items },
      } = await post<Item, ProductApiResponse>({
        path: "/ExternalProduction/GET_URUN",
        payload: {
          URUN_ID: null,
          URUN_AD: null,
          URUN_KOD: null,
        },
      });
      setProducts(Items);
    } catch (error) {
      console.error("Failed to fetch initial token", error);
    }
  }

  const selectProduct = (product: DataItem) => {
    setSessionStorage("product", {
      URUN_AD: product.URUN_AD,
      URUN_KOD: product.URUN_KOD,
      URUN_ID: product.URUN_ID,
    });
  };

  return (
    <div className="flex flex-col w-full justify-between gap-4">
      {products.map((product) => (
        <Fragment key={product?.URUN_ID}>
          <Link href={`/teklif-form`}>
            <CustomButton onClick={() => selectProduct(product)}>
              {product?.URUN_AD}
            </CustomButton>
          </Link>
        </Fragment>
      ))}
    </div>
  );
}

export default ProductList;
