/* export default async function fetchByIngredient(alcohol, setCocktailData) {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
    );
    const json = await response.json();
    setCocktailData(json["drinks"]);
  } catch (error) {
    console.error(error);
  }
}
 */

export default async function fetchCocktail(
  alcohol,
  setCocktail,
  setCocktailData,
  setStatus
) {
  try {
    setStatus("pending");
    const fullData = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
    );
    const data = await fullData.json();
    const randomCocktail =
      data["drinks"][Math.floor(Math.random() * data["drinks"].length)];
    setCocktailData(data["drinks"]);
    const singleCocktail = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${randomCocktail["idDrink"]}`
    );
    const cocktail = await singleCocktail.json();
    setCocktail(cocktail["drinks"][0]);
    setStatus("complete");
  } catch (error) {
    console.error(error);
  } finally {
    setStatus("idle");
  }
}
