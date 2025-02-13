const validateLogin = require("../loginValidation");

describe('Validation process of login', () => {
    test('check for valid username and password', () => {
        expect(validateLogin("login", "password")).toBeTruthy();
    });

    test('check for valid username and incorrect password', () => {
        expect(validateLogin("login", "123")).toBeFalsy();
    });

    test('check for invalid username and correct password', () => {
        expect(validateLogin("sjn", "password")).toBeFalsy();
    });

    test('check for invalid username and invalid password', () => {
        expect(validateLogin("sjn", "dmnddjdnj")).toBeFalsy();
    });
});

