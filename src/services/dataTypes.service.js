
// Strings
export const capitalFirstLetter = word => word.charAt(0).toUpperCase() + word.slice(1);
export const capitalized = word => word.toUpperCase();
export const lowerCase = word => word.toLowerCase();


// Objects

export const isObject = obj => obj && typeof obj === 'object' && !(obj instanceof Date);

export const objectToList = obj =>
  isObject(obj) ? Object.keys(obj).reduce((acc, key) => {
    return acc.concat(obj[key]);
  }, []) : null;