import React, { Children, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}
function Product({ children }: ProvidersProps) {
  return <div>{children}</div>;
}

export default Product;
