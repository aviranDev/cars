function stringCases(str) {
  const lowerCaseString = str?.toLowerCase();
  const upperCaseString = str?.toUpperCase();
  const firstLetter = str?.charAt(0).toUpperCase();
  const strWithoutFirstChar = lowerCaseString?.slice(1);

  return (firstLetter, strWithoutFirstChar, upperCaseString, lowerCaseString);
};

export default stringCases;