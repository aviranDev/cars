const notMultiple = (item1, repositoryValues) => {
  const nestedFunction = (item, textValue) => {
    let position = (item?.startsWith(textValue)) || (item?.includes(textValue));
    return position
  };


  const lower = item1?.toLowerCase();
  const upper = item1?.toUpperCase();
  let carListLower = nestedFunction(lower, repositoryValues);
  let carListUpper = nestedFunction(upper, repositoryValues);
  return (repositoryValues && lower && carListLower) ||
    (repositoryValues && upper && carListUpper)
};

export default notMultiple