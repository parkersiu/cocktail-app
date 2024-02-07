const getCocktailByIngredient = async (alcohol, setCocktailData) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
    );
    const json = await response.json();
    setCocktailData([...json["drinks"]]);
  } catch (error) {
    console.error(error);
  }
};

export default getCocktailByIngredient;
