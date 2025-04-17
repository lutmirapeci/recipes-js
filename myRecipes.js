const myRecipes = JSON.parse(localStorage.getItem('myRecipes')) || [];

document.addEventListener('DOMContentLoaded', function () {
  displayMyRecipes(myRecipes);
});

function prepareNewRecipeForm() {
  document.getElementById('recipeId').value = '';
  document.getElementById('authorName').value = '';
  document.getElementById('recipeName').value = '';
  document.getElementById('recipeBrief').value = '';
  document.getElementById('ingredients').value = '';
  document.getElementById('instructions').value = '';
}

function addRecipe() {
  const recipeId = document.getElementById('recipeId').value;
  const authorName = document.getElementById('authorName').value;
  const recipeName = document.getElementById('recipeName').value;
  const recipeBrief = document.getElementById('recipeBrief').value;
  const ingredients = document.getElementById('ingredients').value.split('\n');
  const instructions = document.getElementById('instructions').value;

  if (recipeId) {
    // Editing existing recipe
    const index = myRecipes.findIndex(
      (recipe) => recipe.id.toString() === recipeId
    );
    if (index !== -1) {
      myRecipes[index] = {
        ...myRecipes[index],
        author: authorName,
        title: recipeName,
        brief: recipeBrief,
        ingredients: ingredients,
        instructions: instructions,
      };
    }
  } else {
    // Adding new recipe
    const newRecipe = {
      id: Date.now(),
      author: authorName,
      title: recipeName,
      brief: recipeBrief,
      ingredients: ingredients,
      instructions: instructions,
      image: 'img/placeholder.png',
    };
    myRecipes.push(newRecipe);
  }

  localStorage.setItem('myRecipes', JSON.stringify(myRecipes));
  bootstrap.Modal.getInstance(document.getElementById('recipeModal')).hide();
  displayMyRecipes(myRecipes);
}

function displayMyRecipes(recipes) {
  const recipesContainer = document.getElementById('myRecipesContainer');
  recipesContainer.innerHTML = '';
  recipesContainer.className = 'row mx-1';

  // Check if there are no recipes
  if (!recipes || recipes.length === 0) {
    recipesContainer.textContent = 'No recipes added yet.';
    return;
  }

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const col = document.createElement('div');
    col.className = 'col-sm-12 col-md-6 col-lg-4 mb-4';
    col.innerHTML = `
            <div class="card h-100">
                <div class="img-container">
                    <img src="${recipe.image}" class="card-img-top img-fluid" alt="${recipe.title}">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${recipe.title}</h5>
                    <p class="card-text">${recipe.brief}</p>
                    <p class="card-text"><small class="text-muted">By ${recipe.author}</small></p>
                <button class="btn btn-primary view-my-details" data-id="${recipe.id}">View Details</button>
                 <button class="btn btn-warning edit-my-recipe" data-id="${recipe.id}">Edit</button>
                <button class="btn btn-danger delete-my-recipe" data-id="${recipe.id}">Delete</button>
                </div>
            </div>
        `;
    recipesContainer.appendChild(col);
    col
      .querySelector('.view-my-details')
      .addEventListener('click', function () {
        const recipeId = this.getAttribute('data-id');
        renderRecipeDetail(recipeId);
      });

    col
      .querySelector('.delete-my-recipe')
      .addEventListener('click', function () {
        deleteRecipe(this.getAttribute('data-id'));
      });

    col.querySelector('.edit-my-recipe').addEventListener('click', function () {
      const recipeId = this.getAttribute('data-id');
      openEditModal(recipeId);
    });
  }
}

function renderRecipeDetail(id) {
  const recipe = myRecipes.find((r) => r.id.toString() === id);
  if (!recipe) {
    console.error('Recipe not found.');
    return;
  }

  const modalTitle = document.querySelector('#recipeDetailModal .modal-title');
  const modalBody = document.querySelector('#recipeDetailModal .modal-body');

  modalTitle.textContent = recipe.title;
  modalBody.innerHTML = `
    <div class="container-fluid">
      <div class="row mb-4">
        <div class="col-md-6">
          <img src="${recipe.image}" class="img-fluid" alt="${recipe.title}">
        </div>
        <div class="col-md-6">
          <h5>Ingredients:</h5>
          <ul>${recipe.ingredients
            .map((ingredient) => `<li>${ingredient}</li>`)
            .join('')}</ul>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5>Instructions:</h5>
          <p>${recipe.instructions}</p>
        </div>
      </div>
    </div>
  `;

  const recipeDetailModal = new bootstrap.Modal(
    document.getElementById('recipeDetailModal')
  );
  recipeDetailModal.show();
}

function openEditModal(recipeId) {
  const recipeToEdit = myRecipes.find(
    (recipe) => recipe.id.toString() === recipeId
  );
  if (!recipeToEdit) return;

  // Populate the form fields
  document.getElementById('recipeId').value = recipeToEdit.id;
  document.getElementById('authorName').value = recipeToEdit.author;
  document.getElementById('recipeName').value = recipeToEdit.title;
  document.getElementById('recipeBrief').value = recipeToEdit.brief;
  document.getElementById('ingredients').value =
    recipeToEdit.ingredients.join('\n');
  document.getElementById('instructions').value = recipeToEdit.instructions;

  const myModal = new bootstrap.Modal(
    document.getElementById('recipeModal'),
    {}
  );
  myModal.show();
}

function deleteRecipe(recipeId) {
  const updatedMyRecipes = myRecipes.filter(
    (recipe) => recipe.id.toString() !== recipeId
  );
  localStorage.setItem('myRecipes', JSON.stringify(updatedMyRecipes));
  displayMyRecipes(updatedMyRecipes);
}
