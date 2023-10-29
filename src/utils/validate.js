export const checkValidData = (email, password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "email is not valid";
    if(!isPassValid) return "password is not valid";

    return null;
};
