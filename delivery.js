/* delivery.js - JavaScript file containing functions for form in index.html, assignment 4*/

/* placeOrder() - take the values in the form and process them */
function placeOrder() {

  /* Grab form name and all values from form in relevant data types */ 
  var formName           = document.forms[0];
  var userName           = formName.username.value;
  var mainCoursePrice    = parseFloat(formName.mainCourse.value);
  var sideDishPrice      = parseFloat(formName.sideDish.value);
  var dessertPrice       = parseFloat(formName.dessert.value);
  var mainCourseQuantity = parseInt(formName.mainCourseQuantity.value);
  var sideDishQuantity   = parseInt(formName.sideDishQuantity.value);
  var dessertQuantity    = parseInt(formName.dessertQuantity.value);

  var tax = 0.035; /* Let's say tax is 3.5% */

  var total = (mainCoursePrice * mainCourseQuantity) + (sideDishPrice * sideDishQuantity);
  total += (dessertPrice * dessertQuantity);
  total += (total * tax);
  if(userName != '') { 
    printReceipt(userName, mainCoursePrice, sideDishPrice, dessertPrice, mainCourseQuantity, 
                 sideDishQuantity, dessertQuantity, total);
  }
  else {
    var emptyNameMsg = "<h2>Please enter your name.</h2>";
    document.getElementById('receiptDiv').innerHTML = (emptyNameMsg);
  }
}

/* printReceipt() - given the user's total, print out their receipt in the document */
function printReceipt(userName, mainCoursePrice, sideDishPrice, dessertPrice, mainCourseQuantity,
                      sideDishQuantity, dessertQuantity, total) {
  if(isNaN(total)) {
    var invalidOrderMsg = "<h2>Please enter a valid order.</h2>";
    document.getElementById('receiptDiv').innerHTML = (invalidOrderMsg); 
  }
  else {
    var receiptContent = "<h2>Hi, " + userName + "!</h2><br><p>Here's your receipt:</p>";
    var mainCourse;
    var sideDish;
    var dessert;
   
    /* Determine main course */
    if(mainCoursePrice == 11.99) {
      mainCourse = "Gumbo";
    }
    else if(mainCoursePrice == 13.99) {
      mainCourse = "Catfish";
    }
    else {
      mainCourse = "Jambalaya";
    }
      
    /* Determine side dish */
    if(sideDishPrice == 3.99) {
      sideDish = "Fried Pickles";
    }
    else if(sideDishPrice == 2.99) {
      sideDish = "Dirty Rice";
    }
    else {
      sideDish = "Hush Puppy";
    }

    /* Determine dessert */
    if(dessertPrice == 4.99) {
      dessert = "Beignets";
    }
    else {
      dessert = "Pecan Pralines";
    }
 

    receiptContent += "<p>Main course: " + mainCourse + " x " 
                      + mainCourseQuantity + " @ " + mainCoursePrice + " each";
    receiptContent += "Side dish: " + sideDish + " x " 
                      + sideDishQuantity + " @ " + sideDishPrice + " each";
    receiptContent += "Dessert: " + dessert + " x " 
                      + dessertQuantity + " @ " + dessertPrice + " each</p>";
    receiptContent += "<p>Your total comes to: " + (total.toFixed(2)) + "</p>";
    document.getElementById('receiptDiv').innerHTML = (receiptContent);
  }
}
