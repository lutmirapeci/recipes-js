document.addEventListener('DOMContentLoaded', function () {
  displayUserProfile();
  displayUserFeedback();
});

const user = JSON.parse(localStorage.getItem('userProfile')) || {
  firstName: 'Anna',
  lastName: 'Doe',
  profession: 'Web Developer',
  image: 'img/user_profile.jpg',
};
const feedbackStorage =
  JSON.parse(localStorage.getItem('recipeFeedback')) || [];

function displayUserProfile() {
  const userProfile = document.getElementById('userProfile');
  userProfile.innerHTML = `
    <div class="text-center">
      <img src="${user.image}" class="rounded-circle" alt="User Profile" style="width: 220px; height: 200px;">
      <h2>${user.firstName} ${user.lastName}</h2>
      <p>${user.profession}</p>
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editProfileModal">Edit Profile</button>
    </div>
  `;

  document
    .getElementById('editProfileModal')
    .addEventListener('show.bs.modal', function () {
      document.getElementById('editFirstName').value = user.firstName;
      document.getElementById('editLastName').value = user.lastName;
      document.getElementById('editProfession').value = user.profession;
    });
}

function displayUserFeedback() {
  const feedbackSection = document.getElementById('feedbackSection');

  if (!feedbackStorage || Object.keys(feedbackStorage).length === 0) {
    feedbackSection.innerHTML = 'No feedback yet.';
    return;
  }

  feedbackSection.innerHTML =
    '<h5>User Feedback</h5><table class="table"><thead><tr><th>Recipe Title</th><th>Feedback</th><th>Rating</th><th>Action</th></tr></thead><tbody id="feedbackBody"></tbody></table>';
  const feedbackBody = document.getElementById('feedbackBody');

  for (const recipeId in feedbackStorage) {
    if (feedbackStorage.hasOwnProperty(recipeId)) {
      for (let i = 0; i < feedbackStorage[recipeId].length; i++) {
        const feedback = feedbackStorage[recipeId][i];
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${feedback.recipeTitle}</td>
        <td>${feedback.comment}</td>
        <td>${feedback.rating} stars</td>
        <td><button class="btn btn-sm btn-danger delete-feedback" data-recipe-id="${recipeId}" data-index="${i}">Delete</button></td>
      `;
        feedbackBody.appendChild(row);
      }
    }
  }

  document.querySelectorAll('.delete-feedback').forEach((button) => {
    button.addEventListener('click', function () {
      const recipeId = this.getAttribute('data-recipe-id');
      const index = this.getAttribute('data-index');
      deleteFeedback(recipeId, index);
    });
  });
}

function deleteFeedback(recipeId, feedbackIndex) {
  const index = parseInt(feedbackIndex, 10);

  if (feedbackStorage[recipeId] && feedbackStorage[recipeId].length > index) {
    feedbackStorage[recipeId].splice(index, 1);
    if (feedbackStorage[recipeId].length === 0) {
      delete feedbackStorage[recipeId];
    }
    localStorage.setItem('recipeFeedback', JSON.stringify(feedbackStorage));
    displayUserFeedback();
  }
}

function saveProfileChanges() {
  const updatedFirstName = document.getElementById('editFirstName').value;
  const updatedLastName = document.getElementById('editLastName').value;
  const updatedProfession = document.getElementById('editProfession').value;

  user.firstName = updatedFirstName;
  user.lastName = updatedLastName;
  user.profession = updatedProfession;
  localStorage.setItem('userProfile', JSON.stringify(user));

  bootstrap.Modal.getInstance(
    document.getElementById('editProfileModal')
  ).hide();

  displayUserProfile();
}
