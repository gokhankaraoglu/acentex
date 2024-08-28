import React, { ReactNode } from "react";

interface OfferItemProps {
  children: ReactNode;
}

function OfferItem({ children }: OfferItemProps) {
  return (
    <div className="rounded-xl border-2 border-black max-w-[345px] max-h-[327px] bg-white px-3 py-4">
      {children}
    </div>
  );
}

export default OfferItem;
