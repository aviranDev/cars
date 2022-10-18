import React, { useState, useEffect } from 'react'
import { getBrandsData } from '../redux/slices/modelSlice'
import Categoty from './Category';
import brandsApi from '../services/brands';

const Brands = () => {
  const [state, setState] = useState(null);
  let data = localStorage.getItem('brands');

  useEffect(() => {
    const getData = async () => {
      const response = await brandsApi();
      setState(response.data)
    }
    if (!data) {
      getData()
    }
  }, [data]);

  return (
    <Categoty keys={['brand']} storage="brands" data={state} action={getBrandsData} />
  )
}

export default Brands;