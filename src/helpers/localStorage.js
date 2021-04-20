export function getData(key) {
  if (!localStorage) return;

  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(`Error getting item ${key} from localStorage`, error);
  }
}

export function storeData(key, item) {
  if (!localStorage) return;

  try {
    return localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error(`Error storing item ${key} to localStorage`, error);
  }
}
