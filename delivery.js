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
  total    += (dessertPrice * dessertQuantity);
  total    += (total * tax);

  printReceipt(total);
}

/* printReceipt() - given the user's total, print out their receipt in the document */
function printReceipt(total) {
  document.getElementById('receiptDiv').innerHTML = ("Your total is: " + total);
}
