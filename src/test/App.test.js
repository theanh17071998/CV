function sum(a, b) {
  return a + b;
}

  test("sum: ?", () => {
    expect(sum(1, 1)).toBe(2)
  })