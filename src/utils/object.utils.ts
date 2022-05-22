export const isObject = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

export const getKeys = (
  obj: Record<string, any>,
  prefix: string = "",
  flattenedObject: Record<string, string> = {}
) => {
  var keys = Object.keys(obj);
  prefix = prefix ? prefix + "." : "";
  return keys.reduce((paths: string[], key: string) => {
    if (isObject(obj[key])) {
      paths = paths.concat(getKeys(obj[key], prefix + key, flattenedObject));
    } else {
      const path = prefix + key;
      flattenedObject[path] = obj[key];
      paths.push(path);
    }
    return paths;
  }, []);
};
