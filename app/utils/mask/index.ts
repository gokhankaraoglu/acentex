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
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d{3})(\d{4})/, "$1$2$3")
    .substring(0, 10);
};
