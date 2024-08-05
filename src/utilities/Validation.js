function validate(email, password) {
    const rex_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const rex_password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  
    if (!rex_email.test(email)) return "Enter valid email";
    if (!rex_password.test(password)) return "Enter valid password";
    return true;
}
export default validate;
