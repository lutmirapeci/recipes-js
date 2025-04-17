const recipes = [
  {
    id: 1,
    title: 'Chocolate Cake',
    brief: 'Delicious and rich chocolate cake perfect for any celebration.',
    author: 'John Doe',
    image: 'img/chocolate_cake.jpg',
    ingredients: [
      '2 cups sugar',
      '1 3/4 cups all-purpose flour',
      '3/4 cup cocoa powder',
      '1 1/2 teaspoons baking powder',
      '1 1/2 teaspoons baking soda',
      '1 teaspoon salt',
      '2 eggs',
      '1 cup milk',
      '1/2 cup vegetable oil',
      '2 teaspoons vanilla extract',
      '1 cup boiling water',
    ],
    instructions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at risus vel ante bibendum tristique ut in leo. Donec in fermentum ipsum. Morbi eros nisi, volutpat in porttitor quis, sollicitudin quis enim. Ut interdum luctus purus sit amet eleifend. Praesent malesuada a justo quis imperdiet. Suspendisse egestas tortor non nisi.',
  },
  {
    id: 2,
    title: 'Classic Margherita Pizza',
    brief: "A timeless classic that's simple yet satisfying.",
    author: 'Jane Smith',
    image: 'img/margherita_pizza.jpg',
    ingredients: [
      '1 pizza dough',
      '1/2 cup tomato sauce',
      '2 cups shredded mozzarella cheese',
      'Fresh basil leaves',
      '2 tablespoons olive oil',
      'Salt to taste',
      'Red pepper flakes (optional)',
    ],
    instructions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at risus vel ante bibendum tristique ut in leo. Donec in fermentum ipsum. Morbi eros nisi, volutpat in porttitor quis, sollicitudin quis enim. Ut interdum luctus purus sit amet eleifend. Praesent malesuada a justo quis imperdiet. Suspendisse egestas tortor non nisi.',
  },
  {
    id: 3,
    title: 'Caesar Salad',
    brief: 'Crisp, creamy, and packed with flavor.',
    author: 'Emily Turner',
    image: 'img/caesar_salad.jpg',
    ingredients: [
      '1 head romaine lettuce, torn into bite-size pieces',
      '1/2 cup Caesar dressing',
      '1 cup croutons',
      '1/2 cup grated Parmesan cheese',
      '1 grilled chicken breast, sliced (optional)',
      'Salt and pepper to taste',
    ],
    instructions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at risus vel ante bibendum tristique ut in leo. Donec in fermentum ipsum. Morbi eros nisi, volutpat in porttitor quis, sollicitudin quis enim. Ut interdum luctus purus sit amet eleifend. Praesent malesuada a justo quis imperdiet. Suspendisse egestas tortor non nisi.',
  },
  {
    id: 4,
    title: 'Beef Stroganoff',
    brief: 'A rich and comforting dish with tender beef in creamy sauce.',
    author: 'Alex Reid',
    image: 'img/beef_stroganoff.jpg',
    ingredients: [
      '2 pounds beef sirloin',
      '3 tablespoons all-purpose flour',
      '2 tablespoons olive oil',
      '1 onion, chopped',
      '1 clove garlic, minced',
      '1/2 pound mushrooms, sliced',
      '1 cup beef broth',
      '1 cup sour cream',
      'Salt and pepper to taste',
      'Chopped parsley for garnish',
    ],
    instructions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at risus vel ante bibendum tristique ut in leo. Donec in fermentum ipsum. Morbi eros nisi, volutpat in porttitor quis, sollicitudin quis enim. Ut interdum luctus purus sit amet eleifend. Praesent malesuada a justo quis imperdiet. Suspendisse egestas tortor non nisi.',
  },
  {
    id: 5,
    title: 'Vegetable Stir Fry',
    brief: 'A quick and colorful mix of veggies with an Asian flair.',
    author: 'Chris Wong',
    image: 'img/vegetable_stir_fry.jpg',
    ingredients: [
      '2 tablespoons vegetable oil',
      '1 bell pepper, sliced',
      '1 carrot, sliced',
      '1/2 cup broccoli florets',
      '1/2 cup snow peas',
      '2 cloves garlic, minced',
      '1 tablespoon soy sauce',
      '1 tablespoon oyster sauce',
      '1 teaspoon sesame oil',
    ],
    instructions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at risus vel ante bibendum tristique ut in leo. Donec in fermentum ipsum. Morbi eros nisi, volutpat in porttitor quis, sollicitudin quis enim. Ut interdum luctus purus sit amet eleifend. Praesent malesuada a justo quis imperdiet. Suspendisse egestas tortor non nisi.',
  },
  {
    id: 6,
    title: 'Quiche Lorraine',
    brief: 'A French classic, perfect for brunch or a light dinner.',
    author: 'Sophie Boulanger',
    image: 'img/quiche_lorraine.jpg',
    ingredients: [
      '1 pie crust',
      '8 ounces bacon, chopped',
      '1 onion, chopped',
      '4 eggs',
      '1 1/2 cups heavy cream',
      '1 cup grated Gruyère cheese',
      'Salt and nutmeg to taste',
    ],
    instructions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at risus vel ante bibendum tristique ut in leo. Donec in fermentum ipsum. Morbi eros nisi, volutpat in porttitor quis, sollicitudin quis enim. Ut interdum luctus purus sit amet eleifend. Praesent malesuada a justo quis imperdiet. Suspendisse egestas tortor non nisi.',
  },
  {
    id: 7,
    title: 'Pan-Seared Salmon',
    brief: 'Perfectly crispy on the outside, tender on the inside.',
    author: 'Mark Fisher',
    image: 'img/pan_seared_salmon.jpg',
    ingredients: [
      '4 salmon fillets',
      '2 tablespoons olive oil',
      'Salt and pepper to taste',
      'Lemon wedges for serving',
    ],
    instructions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at risus vel ante bibendum tristique ut in leo. Donec in fermentum ipsum. Morbi eros nisi, volutpat in porttitor quis, sollicitudin quis enim. Ut interdum luctus purus sit amet eleifend. Praesent malesuada a justo quis imperdiet. Suspendisse egestas tortor non nisi.',
  },
  {
    id: 8,
    title: 'Avocado Toast',
    brief: 'A simple, nutritious, and delicious start to your day.',
    author: 'Nina Martinez',
    image: 'img/avocado_toast.jpg',
    ingredients: [
      '2 slices of bread',
      '1 ripe avocado',
      'Salt and pepper to taste',
      'Red pepper flakes (optional)',
      '2 eggs (optional)',
    ],
    instructions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at risus vel ante bibendum tristique ut in leo. Donec in fermentum ipsum. Morbi eros nisi, volutpat in porttitor quis, sollicitudin quis enim. Ut interdum luctus purus sit amet eleifend. Praesent malesuada a justo quis imperdiet. Suspendisse egestas tortor non nisi.',
  },
  {
    id: 9,
    title: 'Chicken Parmesan',
    brief: 'A hearty Italian-American comfort food classic.',
    author: 'Tony Romano',
    image: 'img/chicken_parmesan.jpg',
    ingredients: [
      '4 boneless, skinless chicken breasts',
      '1 cup all-purpose flour',
      '2 eggs',
      '1 cup breadcrumbs',
      '1 cup grated Parmesan cheese',
      '2 cups marinara sauce',
      '1 cup shredded mozzarella cheese',
      '2 tablespoons olive oil',
    ],
    instructions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at risus vel ante bibendum tristique ut in leo. Donec in fermentum ipsum. Morbi eros nisi, volutpat in porttitor quis, sollicitudin quis enim. Ut interdum luctus purus sit amet eleifend. Praesent malesuada a justo quis imperdiet. Suspendisse egestas tortor non nisi.',
  },
  {
    id: 10,
    title: 'Lemon Drizzle Cake',
    brief: 'A moist, lemony treat with a sweet, tangy glaze.',
    author: 'Lucy Adams',
    image: 'img/lemon_drizzle_cake.jpg',
    ingredients: [
      '1/2 cup unsalted butter, softened',
      '1 cup granulated sugar',
      '2 eggs',
      '1 1/2 cups all-purpose flour',
      '1 teaspoon baking powder',
      '1/2 teaspoon salt',
      '1/2 cup milk',
      'Zest of 1 lemon',
      'For the drizzle: Juice of 1 lemon, 1/4 cup granulated sugar',
    ],
    instructions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at risus vel ante bibendum tristique ut in leo. Donec in fermentum ipsum. Morbi eros nisi, volutpat in porttitor quis, sollicitudin quis enim. Ut interdum luctus purus sit amet eleifend. Praesent malesuada a justo quis imperdiet. Suspendisse egestas tortor non nisi.',
  },
];

const favoriteRecipes =
  JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

const feedbackStorage =
  JSON.parse(localStorage.getItem('recipeFeedback')) || {};

document.addEventListener('DOMContentLoaded', function () {
  const recipesGrid = document.getElementById('recipesGrid');

  function renderRecipes() {
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
          <button class="btn btn-primary view-details" data-id="${recipe.id}">View Details</button>
        </div>
      </div>
    `;
      recipesGrid.appendChild(col);

      col.querySelector('.view-details').addEventListener('click', function () {
        const recipeId = this.getAttribute('data-id');
        renderRecipeDetail(recipeId);
      });
    }
  }

  function renderRecipeDetail(id) {
    const recipe = recipes.find((r) => r.id.toString() === id);
    if (!recipe) {
      console.error('Recipe not found.');
      return;
    }

    const modalTitle = document.querySelector(
      '#recipeDetailModal .modal-title'
    );
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
          <button id="addToFavorites-${id}" class="btn btn-primary my-3" onclick="addToFavorites(${id})">Add to Favorites</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5>Instructions:</h5>
          <p>${recipe.instructions}</p>
        </div>
      </div>
       <div class="row">
        <div class="col">
          <h5>Rate this Recipe:</h5>
          <select class="form-select" id="recipeRating">
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
          <h5>Leave a Comment:</h5>
          <textarea class="form-control" id="recipeComment" rows="3"></textarea>
          <button class="btn btn-primary my-3" onclick="submitRecipeFeedback(${id})">Submit</button>
        </div>
      </div>
    </div>
  `;

    const recipeDetailModal = new bootstrap.Modal(
      document.getElementById('recipeDetailModal')
    );
    recipeDetailModal.show();
  }

  renderRecipes();
});

function addToFavorites(recipeId) {
  const parsedRecipeId = Number(recipeId);
  const recipeToAdd = recipes.find((recipe) => recipe.id === parsedRecipeId);

  if (recipeToAdd) {
    const isAlreadyFavorite = favoriteRecipes.some(
      (favorite) => favorite.id === parsedRecipeId
    );

    if (!isAlreadyFavorite) {
      favoriteRecipes.push(recipeToAdd); // Add the whole recipe object to the array
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      alert('Added to Favorites!');
      updateFavoriteButton(parsedRecipeId, true);
    } else {
      alert(`Recipe ${parsedRecipeId} is already in the favorites.`);
    }
  } else {
    console.error('Recipe not found.');
  }
}

function updateFavoriteButton(recipeId, isFavorite) {
  const favoriteButton = document.getElementById(`addToFavorites-${recipeId}`);
  if (favoriteButton) {
    favoriteButton.textContent = isFavorite
      ? 'Added to Favorites'
      : 'Add to Favorites';
    if (isFavorite) {
      favoriteButton.disabled = true;
    } else {
      favoriteButton.disabled = false;
    }
  }
}

function submitRecipeFeedback(recipeId) {
  const rating = document.getElementById('recipeRating').value;
  const comment = document.getElementById('recipeComment').value;
  const recipeCommented = recipes.find(
    (recipe) => recipe.id === Number(recipeId)
  );

  const feedback = { rating, comment, recipeTitle: recipeCommented.title };

  if (!feedbackStorage[recipeId]) {
    feedbackStorage[recipeId] = [];
  }
  feedbackStorage[recipeId].push(feedback);

  // Save updated feedback back to local storage
  localStorage.setItem('recipeFeedback', JSON.stringify(feedbackStorage));

  alert('Thank you for your feedback!');

  document.getElementById('recipeRating').value = '1';
  document.getElementById('recipeComment').value = '';
}
