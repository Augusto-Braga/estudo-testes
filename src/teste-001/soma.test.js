const soma = require("./soma");

test("soma 2 + 2 deve retornar 4", () => {
  expect(soma(2, 2)).toBe(4);
});
