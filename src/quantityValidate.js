function quantityValidate(quantity) {
    if (typeof quantity !== "number") { 
        return false;
    }
    return quantity >= 1 && quantity < 11; 
}

module.exports = quantityValidate;