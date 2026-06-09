import calculator from "../src/calculator.js";

test(`adds 2 + 3 to get 5`, () => {
  expect(calculator.add(2, 3)).toEqual(5);
});

test(`adds 0 and 7 to get 7`, () => {
  expect(calculator.add(0, 7)).toEqual(7);
});

test(`adds two negative numbers correctly`, () => {
  expect(calculator.add(-2, -3)).toEqual(-5);
});

test(`adds a positive and negative number`, () => {
  expect(calculator.add(10, -4)).toEqual(6);
});

test(`adds decimal numbers`, () => {
  expect(calculator.add(1.5, 2.5)).toBeCloseTo(4);
});

test(`adds decimal numbers`, () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test(`Subtracts two positive numbers`, () => {
  expect(calculator.subtract(10, 4)).toEqual(6);
});

test(`Can return a negative number`, () => {
  expect(calculator.subtract(4, 10)).toEqual(-6);
});

test(`Correctly subtracts 0`, () => {
  expect(calculator.subtract(8, 0)).toEqual(8);
});

test(`Subtracts from 0 correctly`, () => {
  expect(calculator.subtract(0, 8)).toEqual(-8);
});

test(`Subtracts decimal numbers`, () => {
  expect(calculator.subtract(5.5, 2.25)).toBeCloseTo(3.25);
});

test(`Subtracts two negative numbers`, () => {
  expect(calculator.subtract(-5, -3)).toEqual(-2);
});

test(`Subtracts a negative from a positive`, () => {
  expect(calculator.subtract(5, -3)).toEqual(8);
});

test(`Subtracts a positive from a negative`, () => {
  expect(calculator.subtract(-5, 3)).toEqual(-8);
});

test(`Multiplies two positive numbers`, () => {
  expect(calculator.multiply(3, 4)).toEqual(12);
});

test(`Multiply by 0 returns 0`, () => {
  expect(calculator.multiply(7, 0)).toEqual(0);
});

test(`Multiply two negatives returns a positive`, () => {
  expect(calculator.multiply(-3, -4)).toEqual(12);
});

test(`Multiply a positive and a negative returns a negative`, () => {
  expect(calculator.multiply(3, -4)).toEqual(-12);
});

test(`Multiplies decimal numbers`, () => {
  expect(calculator.multiply(2.5, 4)).toBeCloseTo(10);
});

test(`Divides positive numbers`, () => {
  expect(calculator.divide(12, 3)).toEqual(4);
});

test(`Divides with a decimal result`, () => {
  expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
});

test(`Divide 0 by a number returns 0`, () => {
  expect(calculator.divide(0, 5)).toEqual(0);
});

test(`Divide two negatives returns correct positive`, () => {
  expect(calculator.divide(-12, -4)).toEqual(3);
});

test(`Divide negative and positive and get a negative`, () => {
  expect(calculator.divide(12, -3)).toEqual(-4);
});

test(`Divides decimal numbers`, () => {
  expect(calculator.divide(7.5, 2.5)).toBeCloseTo(3);
});

test(`Division by one`, () => {
  expect(calculator.divide(9, 1)).toEqual(9);
});

test(`Divide a number by itself`, () => {
  expect(calculator.divide(9, 9)).toEqual(1);
});

test(`Divides by 0 returns custom message`, () => {
  expect(calculator.divide(12, 0)).toBe("Cannot divide by 0");
});
