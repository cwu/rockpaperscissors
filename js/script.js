// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



$('#shoot').click(function() {
  const userChoice = $('#input').val();
  
  // Display user's choice
  $('#userChoice').text(userChoice);
  
  // Select random computer choice
  const allChoices = ['rock', 'paper', 'scissors'];
  const randomChoiceIndex = Math.floor(Math.random() * allChoices.length);
  const computerChoice = allChoices[randomChoiceIndex];
  $('#computerChoice').text(computerChoice);
});