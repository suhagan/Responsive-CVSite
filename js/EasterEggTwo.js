// Easter egg 2: Typing a combination on the keyboard to show a popup message
var combinationCode = [];
var combinationSequence = [49, 51, 51, 55]; // Key codes for '1', '3', '3', '7'
document.addEventListener('keydown', function(event) {
  combinationCode.push(event.keyCode);
  if (combinationCode.length > combinationSequence.length) {
    combinationCode.shift();
  }
  if (arraysEqual(combinationCode, combinationSequence)) {
    var text = "You found the Easter egg! 🎉"; 
    showModal(text);
    combinationCode = [];
  }
});

// Utility function to compare arrays
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// Utility function to show modal
function showModal(message) {
  var modal = document.createElement('div');
  modal.classList.add('easter-modal');
  modal.innerHTML = '<div class="easter-modal-content">' +
                    '<span class="easter-close">&times;</span>' +
                    '<p>' + message + '</p>' +
                    '</div>';
  document.body.appendChild(modal);
  var closeButton = modal.querySelector('.easter-close');
  closeButton.addEventListener('click', function() {
    modal.remove();
  });
}
