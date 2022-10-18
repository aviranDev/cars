import { useState } from 'react'

const usePlaceholder = (data) => {
  const [placeHolderName, setPlaceHolderName] = useState("");

  const placeHolder = (first, second) => {
    let sreach = 'Search';
    const modelHolder = data.findIndex(value => value[first]);
    const brandHolder = data.findIndex(value => value[second]);

    if (modelHolder !== -1) {
      setPlaceHolderName(`${sreach} ${first}`)
    } else if (brandHolder !== -1) {
      setPlaceHolderName(`${sreach} ${second}`)
    }
  }

  return { placeHolderName, placeHolder }
};

export default usePlaceholder;