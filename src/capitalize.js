export default function capitalize(str) {
  return str
    .split("")
    .map((char, i) => (i === 0 ? char.toUpperCase() : char))
    .join("");
}
