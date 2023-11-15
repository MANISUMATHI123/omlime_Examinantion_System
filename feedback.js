document.getElementById('feedbackForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Simulating AJAX request
  setTimeout(function() {
    document.getElementById('responseMessage').textContent = "Thank you for your feedback, " + name + "!";
    document.getElementById('feedbackForm').reset();
  }, 2000);
}