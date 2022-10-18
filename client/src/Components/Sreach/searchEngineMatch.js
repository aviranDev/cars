const searchEngineMatch = (value, seacrhing) => {
  let match = value?.toLowerCase() === seacrhing?.toLowerCase()?.trim()
  return match
}

export default searchEngineMatch;