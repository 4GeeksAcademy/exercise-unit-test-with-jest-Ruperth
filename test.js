// test.js

const { fromEuroToDollar, fromEuroToYen, fromEuroToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One euro should be 156.5 yen", function() {
    const expected = 3.5 * 156.5;
    expect(fromEuroToYen(3.5)).toBe(expected); // 1 euro son 156.5 yenes, entonces 3.5 euros deberían ser = (3.5 * 156.5)
});

test("One euro should be 0.87 pounds", function() {
    const expected = 3.5 * 0.87;
    expect(fromEuroToPound(3.5)).toBe(expected); // 1 euro son 0.87 libras, entonces 3.5 euros deberían ser = (3.5 * 0.87)
});
