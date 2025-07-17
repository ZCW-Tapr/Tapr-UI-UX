const STORAGE_KEY = 'taprZones';

export function saveZones(zones) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(zones));
}

export function loadZones() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}