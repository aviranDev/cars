import { useState } from 'react'

const useLoader = (boolean) => {
  const [loading, setLodaing] = useState(boolean);
  const timer = 1500;

  const handlerLodaer = (callBack) => {
    setLodaing(true)
    const result = setTimeout(() => {
      setLodaing(false)
      callBack()
    }, timer);
    return result
  };

  return [loading, handlerLodaer]
};

export default useLoader;