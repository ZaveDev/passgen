const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&(){}[]|<>?_-+=*.~";

const createPassword = (length, hasNumbers, hasSymbols) => {
  let chars = alpha;
  hasSymbols ? (chars += symbols) : null;
  hasNumbers ? (chars += numbers) : null;
  return generatePassword(chars, length);
};

const generatePassword = (chars, length) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};
module.exports = createPassword;
