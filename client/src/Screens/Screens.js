import React, { useState, useEffect, Fragment } from 'react';
import { Select } from './screenStyle';
import { Container, Section } from '../styles/globalStyles';
import Models from '../Pages/Models';
import Brands from '../Pages/Brands';
import Hero from '../Components/Hero/Hero'
import options from './options';

const Screen = () => {
  const [page, setPage] = useState("models");
  const [modelsContentVisibility, setModelsContentVisibility] = useState(false);
  const [brandsContentVisibility, setBrandsContentVisibility] = useState(false);

  useEffect(() => {
    page === "models"
      ? setModelsContentVisibility(true)
      : setModelsContentVisibility(false)
    page === "brands"
      ? setBrandsContentVisibility(true)
      : setBrandsContentVisibility(false)
  }, [page]);

  const handleChange = (e) => {
    setPage(e.target.value)
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renederResult = () => {
    let result;
    result === "selectOption"
      ? (result = "Select Option")
      : (result = makeFirstLetterCapital(page))
    return result
  };

  return (
    <Fragment>
      <Hero />
      <Section>
        <Container>
          <h1 style={{ color: 'white' }}>{renederResult()}</h1>
          <div style={{ marginTop: '-144.5px' }}>
            <Select value={page} onChange={handleChange}>
              {options.map((option) => (
                <Fragment key={option.label}>
                  <option value={option.value}>{option.label}</option>
                </Fragment>
              ))}
            </Select>
          </div>
          <div>
            {modelsContentVisibility && <Models />}
            {brandsContentVisibility && <Brands />}
          </div>
        </Container>
      </Section>
    </Fragment>
  );
};

export default Screen;