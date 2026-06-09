import reverseString from "../src/reverseString.js";

test(`Takes "car" and returns "rac"`, () => {
  expect(reverseString("car")).toBe("rac");
});

test(`Takes "howdy" and returns "ydwoh`, () => {
  expect(reverseString("howdy")).toBe("ydwoh");
});

test(`Single character string returns unchanged`, () => {
  expect(reverseString("a")).toBe("a");
});

test(`Spaces should be taken into account`, () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test(`Spaces should be taken into account`, () => {
  expect(reverseString("a b c")).toBe("c b a");
});

test(`Capitalization stays in place`, () => {
  expect(reverseString("hello!")).toBe("!olleh");
});

test(`Strings with numbers`, () => {
  expect(reverseString("abc123")).toBe("321cba");
});

test(`Palindrome returns the same string`, () => {
  expect(reverseString("racecar")).toBe("racecar");
});

test(`Takes an empty string and returns an empty string`, () => {
  expect(reverseString("")).toBe("");
});
