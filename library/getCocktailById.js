const getCocktailById = async (id, setCocktail) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const json = await response.json();
    setCocktail(json["drinks"]);
  } catch (error) {
    console.error(error);
  }
};

export default getCocktailById;
