export default function (list, query) {
  return list.filter((item) => (
    item.city.toLowerCase().includes(query.toLowerCase())
  )).slice(0, 10);
}
