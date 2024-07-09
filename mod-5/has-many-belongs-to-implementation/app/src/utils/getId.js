const makeIdCounter = (id = 0) => {
  return () => ++id;
};

const getId = makeIdCounter();

export default getId;