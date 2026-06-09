import capitalize from "../src/capitalize.js";

test(`Takes in "foot" and returns "Foot"`, () => {
  expect(capitalize("foot")).toBe("Foot");
});

test(`Takes in "hand" and returns "Hand"`, () => {
  expect(capitalize("hand")).toBe("Hand");
});

test(`Capitalizes a singe character string`, () => {
  expect(capitalize("a")).toBe("A");
});

test(`Takes in an empty string and returns an empty string`, () => {
  expect(capitalize("")).toBe("");
});

test(`Takes an already capitalized word and doesn't change it`, () => {
  expect(capitalize("Howdy")).toBe("Howdy");
});

test(`Doesn't change capitalization of the rest of words`, () => {
  expect(capitalize("hELLO")).toBe("HELLO");
});

test(`String starting with number leaves it unchanged`, () => {
  expect(capitalize("123abc")).toBe("123abc");
});

test(`String with leading space leaves the space and the rest unchanged`, () => {
  expect(capitalize(" hello")).toBe(" hello");
});

test(`String with other starting character leaves the string unchanged`, () => {
  expect(capitalize("-hello")).toBe("-hello");
});

test(`Takes a full sentence and just capitalizes the first letter`, () => {
  expect(capitalize("running through the valley")).toBe(
    "Running through the valley",
  );
});
