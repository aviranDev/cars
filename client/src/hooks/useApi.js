import { useState } from 'react'
import axios from 'axios';
const useApi = () => {
  const [state, setState] = useState(null);

  const handleState = async (callBack) => {
    const response = await axios.get(callBack);
    setState(response.data)
  }
  return [state, handleState];
}

export default useApi;

