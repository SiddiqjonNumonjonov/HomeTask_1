function validatePassword(password) {
    if(password.length <= 8 || password.length >= 12) {
        return false;
   }
   if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
    return true;
 } else {
    return false;
}
}
module.exports  = validatePassword;