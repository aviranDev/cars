const searchEngine = (value, seacrhing) => {
  let match = value?.toLowerCase()?.includes(seacrhing?.toLowerCase().trim())
    && seacrhing.length > 3
  return match;
}

export default searchEngine;