const isPrime = require("./isPrime");

test("A função deve retornar se um número é primo ou não", () => {
  expect(() => isPrime("hello")).toThrowError("Input is not a number");
  expect(isPrime(0)).toBe(false);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(7)).toBe(true);
});
