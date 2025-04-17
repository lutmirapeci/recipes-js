const favoriteRecipes =
  JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

document.addEventListener('DOMContentLoaded', function () {
  displayFavoriteRecipes(favoriteRecipes);
});

function displayFavoriteRecipes(recipes) {
  const recipesContainer = document.getElementById('favoriteRecipesContainer');
  recipesContainer.className = 'row my-2 mx-2';

  if (!recipes || recipes.length === 0) {
    recipesContainer.textContent = 'You have no recipes in your favorites!';
    document.body.appendChild(recipesContainer);
    return;
  }

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    const col = document.createElement('div');
    col.className = 'col-sm-12 col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="card h-100">
        <div class="img-container">
          <img src="${recipe.image}" class="card-img-top img-fluid" alt="${recipe.title}">
        </div>
        <div class="card-body">
          <h5 class="card-title">${recipe.title}</h5>
          <p class="card-text">${recipe.brief}</p>
          <p class="card-text"><small class="text-muted">By ${recipe.author}</small></p>
          <button class="btn btn-danger remove-favorite" data-id="${recipe.id}">Remove from Favorites</button>
        </div>
      </div>
    `;
    recipesContainer.appendChild(col);

    // Add an event listener to the remove button
    col
      .querySelector('.remove-favorite')
      .addEventListener('click', function () {
        removeRecipeFromFavorites(recipe.id);
      });
  }

  document.body.appendChild(recipesContainer);
}

function removeRecipeFromFavorites(recipeId) {
  const updatedFavoriteRecipes = favoriteRecipes.filter(
    (recipe) => recipe.id !== recipeId
  );
  localStorage.setItem(
    'favoriteRecipes',
    JSON.stringify(updatedFavoriteRecipes)
  );
  const recipesContainer = document.getElementById('favoriteRecipesContainer');
  recipesContainer.innerHTML = '';
  displayFavoriteRecipes(updatedFavoriteRecipes);
}
