// Easter egg 1: Clicking on an odd part of the website to change background
document.addEventListener('DOMContentLoaded', function() {
    var oddElement = document.querySelector('.main__image img'); // You can choose any odd element
    oddElement.addEventListener('click', function() {
      document.body.style.backgroundColor = getRandomColor();
    });
  });
  
  // Utility function to generate random color
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  