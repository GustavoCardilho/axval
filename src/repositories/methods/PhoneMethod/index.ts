export const PhoneMethod = (value: string) => {
  try {
    const numericPhoneNumber = value.replace(/\D/g, "");
    if (numericPhoneNumber.length !== 10 && numericPhoneNumber.length !== 11) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
};
