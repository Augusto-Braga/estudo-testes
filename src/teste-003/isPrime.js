function isPrime(number) {
  if (typeof number !== "number") {
    throw new Error("Input is not a number");
  }
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = isPrime;
