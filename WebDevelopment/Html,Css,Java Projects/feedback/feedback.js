const scdisplay = document.getElementById("thank_you_msg");
const submit_button = document.getElementById("submitBtn");
const close_button = document.getElementById("tax_button");

// Hide the thank you message initially
scdisplay.style.display = 'none';

// Event listener for the submit button
submit_button.addEventListener('click', function(event) {
  // Prevent the default form submission
  event.preventDefault();
  submit_feedback();
});

// Event listener for the close button
close_button.addEventListener('click', function() {
  // Hide the thank you message
  scdisplay.style.display = 'none';
});

function submit_feedback() {
  // You can add your form validation logic here if needed
  
  // Display the thank you message
  scdisplay.style.display = 'block';
}