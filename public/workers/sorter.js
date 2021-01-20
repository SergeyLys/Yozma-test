// eslint-disable-next-line no-restricted-globals
self.onmessage = (event) => {
  if (event) {
    const {words, character} = event.data;
    const resultPattern = {
      starts: [],
      ends: [],
      contains: [],
      doubles: []
    }
    const result = Object.keys(words).reduce((acc, curr) => ({
      ...acc,
      starts: [...acc.starts, ...(curr.startsWith(character) ? [curr] : [])],
      ends: [...acc.ends, ...(curr.endsWith(character) ? [curr] : [])],
      contains: [...acc.contains, ...(curr.includes(character) ? [curr] : [])],
      doubles: [...acc.doubles, ...(curr.includes(`${character}${character}`) ? [curr] : [])]
    }), resultPattern);
    // eslint-disable-next-line no-restricted-globals
    self.postMessage({result});
  }
};
