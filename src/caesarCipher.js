export default function caesarCipher(str, shift) {
  shift = shift < 26 ? shift : shift % 26;
  return str
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) {
        return char;
      }
      const newCharCode = charCode + shift;

      if (newCharCode > 122) {
        return String.fromCharCode(newCharCode - 26);
      } else if (newCharCode > 90 && newCharCode < 97) {
        return String.fromCharCode(newCharCode - 26);
      } else {
        return String.fromCharCode(char.charCodeAt(0) + shift);
      }
    })
    .join("");
}
