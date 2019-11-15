export interface OnlyStringValueObject {
  [key: string]: OnlyStringValueObject | string;
}

export const addPrefix = (prefix: string, obj: OnlyStringValueObject): OnlyStringValueObject => {
  Object.entries(obj).forEach((([key, value]) => {
    if (typeof value === "string") {
      obj[key] = prefix + value;
    } else {
      obj[key] = addPrefix(prefix, value);
    }
  }));
  return obj;
};
