const multipleSearchResults = (item1, repositoryValues) => {
  const nestedFunction = (item, textValue) => {
    let position = (item?.startsWith(textValue)) || (item?.includes(textValue));
    return position
  };

  let concatination = item1[0].concat(' ', item1[1]);
  const lower = concatination?.toLowerCase();
  const upper = concatination?.toUpperCase();
  let carListLower = nestedFunction(lower, repositoryValues);
  let carListUpper = nestedFunction(upper, repositoryValues);
  return (repositoryValues && lower && carListLower) ||
    (repositoryValues && upper && carListUpper)
};

export default multipleSearchResults