const quantityValidate = require("../quantityValidate");

describe('check the quantity', () => {
    test('with valid input', () => {
        expect(quantityValidate(7)).toBeTruthy();
    });

    test('invalid input with 0', () => {
        expect(quantityValidate(0)).toBeFalsy();
    });

    test('invalid input with lower than 0', () => {
        expect(quantityValidate(-2)).toBeFalsy();
    });

    test('invalid input with characters', () => {
        expect(quantityValidate("23")).toBeFalsy();
    });
});


