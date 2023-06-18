export const NumberMethod = (value: number) => {
  try {
    if (typeof value === "number") {
      return true;
    }
    return false;
  } catch {
    return false;
  }
};
