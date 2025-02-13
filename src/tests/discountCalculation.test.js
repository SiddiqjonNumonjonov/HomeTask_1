const calculateDiscount = require("../DiscountCalculation")

describe("check the discount of user",()=> {
    test("with valid inputs ",()=> {
        expect(calculateDiscount(true,120)).toBe(15)
    })

    test("with membership and with lower spending ",()=> {
        expect(calculateDiscount(true,80)).toBe(10)
    })

    
    test("with not membership and with enough spending ",()=> {
        expect(calculateDiscount(false,120)).toBe(5)
    })

    test("with not membership and with not enough spending ",()=> {
        expect(calculateDiscount(false,55)).toBe(0)
    })

})