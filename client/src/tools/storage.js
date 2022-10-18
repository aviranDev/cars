const get = (storageName) => {
  const localData = localStorage.getItem(storageName)
  return localData ? JSON.parse(localData) : [];
};

const set = (storageName, storageData) => {
  const localData = localStorage.setItem(storageName, JSON.stringify(storageData));
  return localData
}

const storage = {
  get,
  set
}

export default storage;