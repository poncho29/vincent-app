export const generatePassword = (): string => {
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const allChars = upperCaseChars + lowerCaseChars + numberChars;

  let password = "";

  // Asegurarse de incluir al menos una letra mayúscula, una minúscula y un número
  password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
  password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
  password += numberChars[Math.floor(Math.random() * numberChars.length)];

  // Generar el resto de la contraseña de manera aleatoria
  for (let i = password.length; i < 12; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Mezclar la contraseña generada para evitar que los primeros caracteres siempre sean mayúscula, minúscula y número
  password = password
    .split('')
    .sort(() => 0.5 - Math.random())
    .join('');

  return password;
}
