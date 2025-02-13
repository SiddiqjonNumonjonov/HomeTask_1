const validateAge = require("../ageValidation")

describe('validate the age for [18-60] ',()=> {
    test('valid input with minumum boundary',()=> {
        expect(validateAge(18)).toBeTruthy();
    })
    test('invalid input with minumum boundary -1',()=> {
        expect(validateAge(17)).toBeFalsy();
    })

    test('valid input with maximum boundary',()=> {
        expect(validateAge(60)).toBeTruthy();
    })
    test('invalid input with maximum boundary +1',()=> {
        expect(validateAge(61)).toBeFalsy();
    })
    test('invalid input with String',()=> {
        expect(validateAge("sid")).toBeFalsy();
    })
})