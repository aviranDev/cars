function objectType(input, Type) {
  if (Object.prototype.toString.call(input) === `[object ${Type}]`) {
    return true;
  }
  return false;
};

export default objectType;