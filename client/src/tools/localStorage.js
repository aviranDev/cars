export const get = (key) => {
  const localData = localStorage.getItem(key);
  return localData
};

export const set = (key, data) => {
  const localData = localStorage.setItem(key, JSON.stringify(data));
  return localData
};

const localData = {
  get,
  set
};

export default localData;
