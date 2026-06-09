import caesarCipher from "../src/caesarCipher.js";

test(`Takes "abc" and shifts by 1`, () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test(`Takes "hello" and shifts by 3`, () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test(`Takes "xyz" and shifts by 3, correctly wrapping`, () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test(`Takes single character and wraps it around`, () => {
  expect(caesarCipher("z", 1)).toBe("a");
});

test(`Takes "wxyz" and wraps it all around`, () => {
  expect(caesarCipher("wxyz", 4)).toBe("abcd");
});

test(`Takes capital letters and shifts them correctly`, () => {
  expect(caesarCipher("ABC", 1)).toBe("BCD");
});

test(`Takes capital letters and has them correctly wrap around`, () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test(`Mixed lowercase and uppercase works fine`, () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test(`Mixed lowercase and uppercase works fine`, () => {
  expect(caesarCipher("JavaScript", 3)).toBe("MdydVfulsw");
});

test(`Mixed casing and some letters wrapping works`, () => {
  expect(caesarCipher("aBcXyZ", 2)).toBe("cDeZaB");
});

test(`Punctuation is left in place`, () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test(`More punctuation testing`, () => {
  expect(caesarCipher("a-b-c", 1)).toBe("b-c-d");
});

test(`Numbers are left unchanged`, () => {
  expect(caesarCipher("Room 101", 3)).toBe("Urrp 101");
});

test(`Shift of 0 leaves string unchanged`, () => {
  expect(caesarCipher("abc", 0)).toBe("abc");
});

test(`Shift of 26 leaves string unchanged`, () => {
  expect(caesarCipher("abc", 26)).toBe("abc");
});

test(`Shift greater than 26 wraps correctly`, () => {
  expect(caesarCipher("abc", 27)).toBe("bcd");
});

test(`Larger shift numbers still handled correctly`, () => {
  expect(caesarCipher("abc", 52)).toBe("abc");
});

test(`Big shift that's not multiple of 26`, () => {
  expect(caesarCipher("abc", 53)).toBe("bcd");
});

test(`Large shift where letters have to wrap`, () => {
  expect(caesarCipher("xyz", 55)).toBe("abc");
});

test(`Large shift with mixed casing and punctuation`, () => {
  expect(caesarCipher("Hello, World!", 55)).toBe("Khoor, Zruog!");
});
