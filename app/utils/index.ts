export function capitalize(str: string): string {
  const word = str.toLowerCase();
  return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);
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
