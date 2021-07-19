 
  const { getGreeting, findSum, quickMafs } = require("./project");
  
  test("return the sum of two numbers", () => {
    console.log(findSum(3, 4));
    expect(findSum(3, 4)).toBe(7);
  });
  
  test("can create a basic greeting", () => {
    expect(getGreeting("Sam")).toBe("Hi Sam");
  });

  test('Return the sum of num1 and num2', () => {
    console.log(quickMafs(1,2))
    expect(quickMafs(1, 2)).toBe(3)
  });