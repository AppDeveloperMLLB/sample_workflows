const assert = require("assert");
const fizzBuzz = require("../index").fizzBuzz;

describe("fizzBuzz", () => {
  it("should return FizzBuzz when input is divisible by 3 and 5", () => {
    assert.strictEqual(fizzBuzz(15), "FizzBuzz");
    assert.strictEqual(fizzBuzz(30), "FizzBuzz");
  });
  it("should return Fizz when input is divisible by 3", () => {
    assert.strictEqual(fizzBuzz(3), "Fizz");
    assert.strictEqual(fizzBuzz(6), "Fizz");
  });
  it("should return Buzz when input is divisible by 5", () => {
    assert.strictEqual(fizzBuzz(5), "Buzz");
    assert.strictEqual(fizzBuzz(10), "Buzz");
  });
  it("should return the input when input is not divisible by 3 or 5", () => {
    assert.strictEqual(fizzBuzz(1), "1");
    assert.strictEqual(fizzBuzz(2), "2");
  });
});
