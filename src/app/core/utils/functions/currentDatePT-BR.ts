export function getCurrentDate() {
  const data = new Date();

  const day = String(data.getDate()).padStart(2, '0');
  const month = String(data.getMonth() + 1).padStart(2, '0');
  const year = data.getFullYear();

  return `${day}/${month}/${year}`;
}
