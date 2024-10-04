export function capitalize(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatName(name: string): string {
  const exceptions = ["IMEI", "T.C.", "A.Ş."];

  return name
    ?.split(" ")
    .map((word) => {
      if (exceptions.includes(word)) {
        return word;
      }
      return (
        word.charAt(0).toLocaleUpperCase("tr-TR") +
        word.slice(1).toLocaleLowerCase("tr-TR")
      );
    })
    .join(" ");
}

export const setSessionStorage = <T>(key: string, value: T): void => {
  try {
    const jsonValue = JSON.stringify(value);
    sessionStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(`Error saving to sessionStorage with key "${key}":`, error);
  }
};

export const getSessionStorage = <T>(key: string): T | null => {
  try {
    const jsonValue = sessionStorage.getItem(key);
    if (jsonValue === null) {
      return null;
    }
    return JSON.parse(jsonValue) as T;
  } catch (error) {
    console.error(
      `Error reading from sessionStorage with key "${key}":`,
      error
    );
    return null;
  }
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const createExpirationDate = (hours: number): Date => {
  const expirationDate = new Date();
  const milliseconds = hours * 60 * 60 * 1000;
  expirationDate.setTime(expirationDate.getTime() + milliseconds);
  return expirationDate;
};
