export const StringMethod = (value: string) => {
  try {
    if (typeof value === "string") {
      return true;
    }
    return false;
  } catch {
    return false;
  }
};
