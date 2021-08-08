async function getData(url) {
  try {
    let res = await fetch(url);

    let data = await res.json();
    console.log(data);
    return data.meals;
  } catch (e) {
    console.log("e:", e);
  }
}

function appendData(meals, parent) {
  meals.forEach(({ strMealThumb, strMeal }) => {
    let div = document.createElement("div");
    div.setAttribute("id", "main_div");

    let p = document.createElement("p");
    p.setAttribute("id", "titlename");

    let img = document.createElement("img");

    img.src = strMealThumb;
    p.innerText = strMeal;

    div.append(img, p);
    parent.append(div);
  });
}

function appendDataextra(meals, parent) {
  meals.forEach(({ strMealThumb, strMeal, strInstructions }) => {
    let div = document.createElement("div");
    div.setAttribute("id", "main_div");

    let p = document.createElement("p");
    p.setAttribute("id", "titlename");

    let img = document.createElement("img");

    img.src = strMealThumb;
    p.innerText = strMeal;

    let p_description = document.createElement("p");
    p_description.innerText = strInstructions;

    div.append(img, p, p_description);
    parent.append(div);
  });
}

export { getData, appendData, appendDataextra };
