const { sum, sott, showResult } = require('../src/library');

const sub = sott;

describe('sum function', () => {
    test('sum should add two positive numbers', () => {
        expect(sum(3,4)).toBe(7);
    })
    test('sum should raise an error trying to add positive and negative numbers', () => {
        expect(sum(4,-5)).toBe(-1);
    })
    test('sum should raise en error trying to add negative and positive numbers', () => {
        expect(sum(-3,5)).toBe(2);
    })
    test('sum should add negative numbers', () => {
        expect(sum(-3,-4)).toBe(-7);
    })
});

describe('sub function', () => {
    test('sub should subtract two different positive numbers', () => {
        expect(sub(2,1)).toBe(1);
    })
    test('sub should subtract two equal positive numbers', () => {
        expect(sub(2,2)).toBe(0);
    })
    test('sub should subtract two equal negative numbers', () => {
        expect(sub(-7,-7)).toBe(0);
    })
    test('sub should subtract a negative number and a positive number', () => {
        expect(sub(-4,1)).toBe(-5);
    })
    test('sub should subtract a positive number and a negative number', () => {
        expect(sub(2,-1)).toBe(3);
    })
    test('sub should subtract two negative numbers', () => {
        expect(sub(-5,-1)).toBe(-4);
    })
})

test('showResult should log the result', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    showResult(2,3);
    expect(consoleLogSpy).toHaveBeenCalledWith(5);
    consoleLogSpy.mockRestore();
});