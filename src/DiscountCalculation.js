function calculateDiscount(membership,spending) {
    if (membership && spending >= 100) {
        return 15;
    }
    if (membership && spending < 100) {
        return 10;
    }
    if (!membership && spending >= 100) {
        return 5;
    }
    return 0;
}
module.exports = calculateDiscount;