const generateId = (arr) => {
  let operation = (item => ({ ...item, _id: Math.random().toString(16).slice(2) }))
  return arr.map(operation)
}

export default generateId;