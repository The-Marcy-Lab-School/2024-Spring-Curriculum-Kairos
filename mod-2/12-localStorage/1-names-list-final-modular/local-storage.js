// Data layer

// Generic Helper Functions
export const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error(err);
    return null;
  }
}

// names-specific helper functions
export const setNames = (names) => setLocalStorageKey('names', names);
export const getNames = () => getLocalStorageKey('names');

// modifying names functions
export const initializeNames = () => setNames(['ben', 'gonzalo', 'motun']);

export const addName = (name) => {
  const names = getNames();
  setNames([...names, name]);
}

export const removeName = (nameToRemove) => {
  const names = getNames();
  const filteredNames = names.filter((name) => name !== nameToRemove);
  setNames(filteredNames);
}

// nums-specific helper functions
export const setNums = (nums) => setLocalStorageKey('nums', nums);
export const getNums = () => getLocalStorageKey('nums');

export const addNums = (num) => {
  const nums = getNums();
  setNums([...nums, num]);
}
