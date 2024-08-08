import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div>
      <h2>Bulunamadı</h2>
      <p>Üzgünüz,Aradığın sayfa oluşturulmamış.</p>
      <Link href="/">Anasayfaya Dön</Link>
    </div>
  );
}

export default NotFound;
