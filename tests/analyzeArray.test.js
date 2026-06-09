import analyzeArray from "../src/analyzeArray.js";

test(`returns the correct analysis for the example array`, () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test(`returns the correct analysis for a small ordered array`, () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test(`returns a decimal average when the numbers do not divide evenly`, () => {
  expect(analyzeArray([5, 10])).toEqual({
    average: 7.5,
    min: 5,
    max: 10,
    length: 2,
  });
});

test(`handles an array with one number`, () => {
  expect(analyzeArray([7])).toEqual({
    average: 7,
    min: 7,
    max: 7,
    length: 1,
  });
});

test(`handles an array that includes zero`, () => {
  expect(analyzeArray([0, 2, 4, 6])).toEqual({
    average: 3,
    min: 0,
    max: 6,
    length: 4,
  });
});

test(`handles an array of negative numbers`, () => {
  expect(analyzeArray([-1, -2, -3])).toEqual({
    average: -2,
    min: -3,
    max: -1,
    length: 3,
  });
});

test(`handles an array with negative, zero, and positive numbers`, () => {
  expect(analyzeArray([-5, 0, 5, 10])).toEqual({
    average: 2.5,
    min: -5,
    max: 10,
    length: 4,
  });
});

test(`handles an array where all numbers are the same`, () => {
  expect(analyzeArray([4, 4, 4, 4])).toEqual({
    average: 4,
    min: 4,
    max: 4,
    length: 4,
  });
});

test(`handles a repeating decimal average`, () => {
  const result = analyzeArray([1, 2, 2]);

  expect(result.average).toBeCloseTo(5 / 3);
  expect(result.max).toEqual(2);
  expect(result.min).toEqual(1);
  expect(result.length).toEqual(3);
});

test(`handles an array of decimal numbers`, () => {
  expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({
    average: 2.5,
    min: 1.5,
    max: 3.5,
    length: 3,
  });
});
