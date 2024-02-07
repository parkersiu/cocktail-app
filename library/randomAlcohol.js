const randomAlcohol = (cocktailData) => {
  return cocktailData[0][Math.floor(Math.random() * cocktailData.length)];
};

export default randomAlcohol;
