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
  var ccard; /* Need for loop or conditional block to determine credit card */
  var forPickUp          = formName.pickUp.checked;

  var tax = 0.035; /* Let's say tax is 3.5% */

  /* Determine credit card */
  for(var i = 0; i < formName.cc.length; i++) {
    if(formName.cc[i].checked == true) {
      ccard = formName.cc[i].value;
      break;
    }
  }

  var total = (mainCoursePrice * mainCourseQuantity) + (sideDishPrice * sideDishQuantity);
  total += (dessertPrice * dessertQuantity);
  total += (total * tax);
  if(!forPickUp) {
    total += 1; /* If delivery, add a $1 surcharge */ 
  }
  if(userName != '') { 
    printReceipt(userName, mainCoursePrice, sideDishPrice, dessertPrice, mainCourseQuantity, 
                 sideDishQuantity, dessertQuantity, ccard, forPickUp, total);
    revealImages(mainCoursePrice, sideDishPrice, dessertPrice);
  }
  else {
    var emptyNameMsg = "<h2>Please enter your name.</h2>";
    document.getElementById('receiptDiv').innerHTML = (emptyNameMsg);
  }
}

/* printReceipt() - given the user's total, print out their receipt in the document */
function printReceipt(userName, mainCoursePrice, sideDishPrice, dessertPrice, mainCourseQuantity,
                      sideDishQuantity, dessertQuantity, ccard, forPickUp, total) {
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
                      + mainCourseQuantity + " @ " + mainCoursePrice + " each</p>";
    receiptContent += "<p>Side dish: " + sideDish + " x " 
                      + sideDishQuantity + " @ " + sideDishPrice + " each</p>";
    receiptContent += "<p>Dessert: " + dessert + " x " 
                      + dessertQuantity + " @ " + dessertPrice + " each</p>";
    receiptContent += "<p>Your total comes to: $" + (total.toFixed(2)) + "</p>";
    receiptContent += "<p>You will be paying by " + ccard + "</p>";
    if(forPickUp == true) {
      receiptContent += "<p>Your order is for pick up</p>";
    }
    else {
      receiptContent += "<p>Your order is for delivery</p>";
    }
    document.getElementById('receiptDiv').innerHTML = (receiptContent);
  }
}

function calculateTotal() {
  /* Grab form name and all values from form in relevant data types */ 
  var formName           = document.forms[0];
  var mainCoursePrice    = parseFloat(formName.mainCourse.value);
  var sideDishPrice      = parseFloat(formName.sideDish.value);
  var dessertPrice       = parseFloat(formName.dessert.value);
  var mainCourseQuantity = parseInt(formName.mainCourseQuantity.value);
  var sideDishQuantity   = parseInt(formName.sideDishQuantity.value);
  var dessertQuantity    = parseInt(formName.dessertQuantity.value);
  var forPickUp          = formName.pickUp.checked;

  var tax = 0.035; /* Let's say tax is 3.5% */

  var total = (mainCoursePrice * mainCourseQuantity) + (sideDishPrice * sideDishQuantity);
  total += (dessertPrice * dessertQuantity);
  total += (total * tax);
  if(!forPickUp) {
    total += 1; /* If delivery, add a $1 surcharge */ 
  }
  if(!isNaN(total) {
    var receiptContent += "<p>Your total comes to: $" + (total.toFixed(2)) + "</p>";
    document.getElementById('receiptDiv').innerHTML = receiptContent;
  }
  else {
    var invalidOrderMsg = "<h2>Please enter a valid order.</h2>";
    document.getElementById('receiptDiv').innerHTML = (invalidOrderMsg);  
  }
}


function revealImages(mainCoursePrice, sideDishPrice, dessertPrice) {
  /* Images */
  var mainCourseImage = document.images[0].src;
  var sideDishImage   = document.images[1].src;
  var dessertImage    = document.images[2].src;

  /* First image */
  if(mainCoursePrice == 11.99) {
    mainCourseImage = "gumbo.png";
  }
  else if(mainCoursePrice == 13.99) {
    mainCourseImage = "catfish.png";
  }
  else {
    mainCourseImage = "jambalaya.png";
  }
    
  /* Determine side dish */
  if(sideDishPrice == 3.99) {
    sideDishImage = "pickles.png";
  }
  else if(sideDishPrice == 2.99) {
    sideDishImage = "rice.png";
  }
  else {
    sideDishImage = "hushpuppy.png";
  }

  /* Determine dessert */
  if(dessertPrice == 4.99) {
    dessertImage = "beignet.png";
  }
  else {
    dessertImage = "pralines.png";
  }
}
