'use strict'

// function calculates the price for the soup order based on the size and type of soup, if the user wants an extra 
function buttonClicked() {
  // declared constants for tax, medium price and large price
  const MEDIUM = 2.00;
  const LARGE = 3.00;

  // variables for total and no input message
  let total = 0.00;
  let noInput = "";
  
 /// soup constants
  const CHICKEN_NOODLE = 8.00;
  const MINESTRONE = 9.00;
  const FRENCH_ONOIN = 9.00;
  const ITALLIAN_WEDDING = 10.00;
  const TOMATO = 6.69;

  // extra constants
  const SALTINES = 0.69;
  const MAGIC_MILK = 15.99;
  
  //get soup dropdown option
  let selectSoup = document.getElementById('soups');
  let soup = selectSoup.options[selectSoup.selectedIndex].value;

  //get size dropdown option
  let selectSize = document.getElementById('size');
  let size = selectSize.options[selectSize.selectedIndex].value;

  // chackboxes 
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
  // if statement for no selection
  if (size == "." || soup == "") {
    noInput = "Can not complete order. Please make sure you ordered a soup and specified the size."
  } else {

    // if statement about sizes
    if(size == 'medium'){
      total = total + MEDIUM;
      
    } else if (size == large){
      total = total + LARGE;
    }

    // if statements for soups
    if(soup == 'chicken-noodle'){
      total == total + CHICKEN_NOODLE;
      
    } else if(soup == 'minestrone'){
      total == total + MINESTRONE;
      
    } else if(soup == 'french-onion'){
      total == total + FRENCH_ONOIN;
      
    } else if(soup == 'itallian-wedding'){
      total == total + ITALLIAN_WEDDING;
      
    } else if(soup == 'tomato'){
      total == total + TOMATO;
    }
  }

  
  
  // displays noInput message
  document.getElementById('no-choice-made').innerHTML = noInput;
  // displays noInput message
  document.getElementById('total').innerHTML = total;
}