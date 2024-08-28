import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="h-full flex flex-col justify-between align-middle">
      <h2>Bulunamadı</h2>
      <p>Üzgünüz,Aradığın sayfa oluşturulmamış.</p>
      <Link href="/">Anasayfaya Dön</Link>
    </div>
  );
}

export default NotFound;
