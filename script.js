const messageForm = document.getElementById('message-form');

messageForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const message = messageForm.querySelector('textarea').value;

  // Here, you can add code to send the magical message to the creators of the website.
  // For this example, we'll just simulate the submission and show the owl animation.
  showMessageSentAnimation();
});

function showMessageSentAnimation() {
  const owlAnimation = document.querySelector('.owl-animation');
  owlAnimation.style.display = 'block';

  setTimeout(() => {
    owlAnimation.style.display = 'none';
    messageForm.reset();
  }, 1000); // Adjust the duration (in milliseconds) based on your owl animation.
}
