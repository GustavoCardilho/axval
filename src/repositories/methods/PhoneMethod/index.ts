export const PhoneMethod = (value: string) => {
  try {
    let numero = value;
    const numeroLimpo = numero.replace(/\D/g, "");
    const regex = /^[+]\d{1,3}\s?[(]?\d{1,4}[)]?\s?\d{4,}$/;
    const verify = regex.test(numeroLimpo);
    if (!verify) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
};
