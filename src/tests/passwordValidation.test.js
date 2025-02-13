const validatePassword = require("../passwordValidation");

describe('Validatin proccess of password', ()=>{
    test('check for valid inputs',()=> {
        expect(validatePassword("Password123")).toBeTruthy();
    })

    test('check for less than 8 characters',()=> {
        expect(validatePassword("dwe3")).toBeFalsy();
    })
    test('check for more than 12 characters',()=> {
        expect(validatePassword("qwertyu2qwer3")).toBeFalsy();
    })
    test('check for no upper case characters',()=> {
        expect(validatePassword("dd12")).toBeFalsy();
    })
    test('check for no Lower case',()=> {
        expect(validatePassword("BDKSNMNMN21")).toBeFalsy();
    })
    test('check for no digit ',()=> {
        expect(validatePassword("djnjndnndkkdAQ")).toBeFalsy();
    })
})