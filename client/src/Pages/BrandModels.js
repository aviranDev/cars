import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Features from '../Components/Features/Features';
import Hero from '../Components/Hero/Hero';
import heroData from '../Components/Hero/heroData';

const BrandModels = () => {
  const [brandModels, setBrandModels] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [image, setImage] = useState("");
  const { brand } = useParams();

  useEffect(() => {
    const brandWallpaper = heroData.heroBrands.find(brand => brand.name === brandName)
    setImage(brandWallpaper);
  }, [brandName]);

  useEffect(() => {
    const handleBrand = (data) => {
      setBrandName(data)
    };
    handleBrand(brand);
  }, [brand])

  useEffect(() => {
    const getModels = () => {
      const data = localStorage.getItem('models');
      const findModel = JSON.parse(data).filter(model => model.brand === brand);
      setBrandModels(findModel)
    }
    getModels()
  }, [brand]);

  return (
    <Fragment>
      <Hero sectionHeight="85vh" imgHeight="80%" img={image?.img} />
      <Features background="#fff" title={`The ${brand} Models:`} items={brandModels} />
    </Fragment>
  )
}

export default BrandModels