function validateAge(age) {

    if(typeof age != "number") {
        return false;
    }
    if(age < 18 || age > 60 ) {
        return false;
    }
    return true;
}

module.exports = validateAge;