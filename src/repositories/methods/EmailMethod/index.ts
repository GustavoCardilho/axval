export const EmailMethod = (value: string) => {
  try {
    const email = value;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (!regex.test(email)) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
};
