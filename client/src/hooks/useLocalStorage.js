import { useState } from "react";

/* const generateId = (arr) => {
  let operation = (item => ({ ...item, _id: Math.random().toString(16).slice(2) }))
  return arr.map(operation)
} */

const get = (key) => {
  const localData = localStorage.getItem(key);
  return JSON.parse(localData)
};

const set = (key, data) => {
  const localData = localStorage.setItem(key, JSON.stringify(data));
  return localData
};

const useLocalStorage = (key) => {
  const [state, setState] = useState(get(key));
  const setStorage = (item) => {
    // const dataWithIds = item && generateId(item).sort(() => .5 - Math.random())
    const dataWithIds = item && (item).sort(() => .5 - Math.random())
    set(key, dataWithIds);
    setState(dataWithIds);
  }
  return [state, setStorage];
}

export default useLocalStorage