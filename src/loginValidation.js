function validateLogin(username, password) {
    const correctUsername = "login";
    const correctPassword = "password";
    return username === correctUsername && password === correctPassword;
}
module.exports = validateLogin;