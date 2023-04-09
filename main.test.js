//👉 Write your tests below here:
//      import the things we need to test (from jest)
import { test, expect } from '@jest/globals';
//      import the function we want to test
import { howManyBuses } from './main.js';
//      write a test skeleton, see if it passes (this is the first step)
//      takes in label and callback function
//          Three A's pattern
//              Arrange
//                  Act
//                      Call the function we want to test (howManyBuses(numberOfPeople))
//                          Assert
//                              Assert that calling the function with 'numberOfPeople' gives us back 'numBuses'
test("should return how many buses required when bus holds 25 people", function () {
    const numberOfPeople = [60, 108, 248];
    const expected = [3, 5, 10];
    const actual = howManyBuses(numberOfPeople);
    expect(actual).toEqual(expected);
});

// Test #2
test('should return an empty array if the input is an empty array', () => {
    const numberOfPeople = [];
    const expected = [];
    const actual = howManyBuses(numberOfPeople);
    expect(actual).toEqual(expected);
});

// Test #3
test('should return the correct number of buses for a single input value', () => {
    const numberOfPeople = [248];
    const expected = [10];
    const actual = howManyBuses(numberOfPeople);
    expect(actual).toEqual(expected);
});
