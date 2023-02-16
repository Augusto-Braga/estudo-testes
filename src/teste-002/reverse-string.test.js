const reverseString = require("./reverse-string");

test("A função deve retornar o texto escrito ao contrário", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});
