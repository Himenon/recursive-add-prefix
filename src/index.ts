export interface OnlyStringValueObject {
  [key: string]: OnlyStringValueObject | string;
}

export const addPrefix = (prefix: string, obj: OnlyStringValueObject): OnlyStringValueObject => {
  for (const key in obj) {
    const nextObj = obj[key];
    if (typeof nextObj === "string") {
      obj[key] = prefix + obj[key];
    } else {
      addPrefix(prefix, nextObj);
    }
  }
  return obj;
};
