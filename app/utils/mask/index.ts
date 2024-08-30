export const normalizeCardNumber = (value: any) => {
  return value
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "")
    .replace(/(.{4})/g, "$1-")
    .replace(/-$/, "");
};

export const normalizeCardDate = (value: any) => {
  return value
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "")
    .replace(/(\d{2})(\d{1,2})/, "$1/$2")
    .substring(0, 5);
};

export const normalizeTCKN = (value: any) => {
  return value.replace(/[^0-9]/gi, "").substring(0, 11);
};

export const normalizePhoneNumber = (value: any) => {
  return value
    .replace(/\D/g, "") // Sayısal olmayan karakterleri kaldır
    .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "0 ($2) $3 $4 $5") // Belirli hanelere göre formatla
    .substring(0, 17); // Maksimum 17 karakter olacak şekilde sınırla (0 (546) 914 43 63)
};
