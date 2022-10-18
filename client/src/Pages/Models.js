import React, { useState, useEffect } from 'react'
import { getModelsData } from '../redux/slices/modelSlice'
import Categoty from './Category';
import { modelsApi } from '../services/models';

const Models = () => {
  const [state, setState] = useState(null);
  let data = localStorage.getItem('models');

  useEffect(() => {
    const getData = async () => {
      const response = await modelsApi();
      setState(response.data)
    }
    if (!data) {
      getData()
    }
  }, [data]);

  return (
    <div id='models'>
      <Categoty keys={['brand', 'model']} storage="models" data={state} action={getModelsData} />
    </div>
  );
}

export default Models;