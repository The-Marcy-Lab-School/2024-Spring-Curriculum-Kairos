// Data layer

// Generic Helper Functions
// Don't export these to restrict how the rest of the program
// interacts with localStorage
const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error(err);
    return null;
  }
}

// names-specific helper functions
const setNames = (names) => setLocalStorageKey('names', names);
export const getNames = () => getLocalStorageKey('names');

// names-specific functions used by the application
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

