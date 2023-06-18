export const UuidMethod = (value: string) => {
  try {
    const regex = /^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i;
    const verify = regex.test(value);
    if (!verify) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
};
