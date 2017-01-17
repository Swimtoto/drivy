'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);


//-----------------------
//      Exercice 1
//-----------------------

/* Function to handle date format correctly
 * Convert a string to a Date
 *
 * @param {String} str
 * @return {Date}
*/
function convertDate(str) {
	var re = /[0-9]+/g;
	var result = re[Symbol.match](str);

	var dateLoc = new Date(result[0], result[1], result[2]);

	return dateLoc;
}

/* Function to get the price per day of a car from its ID
 * @param {String} str
 * @return {price}
*/
function getPricePerDay(str) {
  for(var i = 0; i < cars.length; i++) {
    if (cars[i].id == str)
      return cars[i].pricePerDay;
  }
}

/* Function to get the price per km of a car from its ID
 * @param {String} str
 * @return {price}
*/
function getPricePerKm(str) {
  for(var i = 0; i < cars.length; i++) {
    if (cars[i].id == str)
      return cars[i].pricePerKm;
  }
}

/* Function to get number of days between 2 dates
 * Compute the number of milliseconds between 2 dates
 * and convert it into number of days
 * @param {String} str
 * @return {price}
*/
function numberOfDays(n1, n2) {
  var timeDiff;
  	timeDiff = Math.abs(convertDate(n1).getTime() - convertDate(n2).getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}
// Generates the price for each rental
function Exercice1() {
  var diffDays;
  for(var i = 0; i < rentals.length; i++) {
  	diffDays = numberOfDays(rentals[i].returnDate, rentals[i].pickupDate);
    rentals[i].price = diffDays * getPricePerDay(rentals[i].carId) + rentals[i].distance * getPricePerKm(rentals[i].carId);
  }

  // DEBUG & CHECK
  //for(var i = 0; i < rentals.length; i++) console.log(rentals[i].price);
}

//-----------------------
//      Exercice 2
//-----------------------
function Exercice2() {
  var diffDays;
  for(var i = 0; i < rentals.length; i++) {
    var prices = [getPricePerDay(rentals[i].carId), getPricePerKm(rentals[i].carId)];
    diffDays = numberOfDays(rentals[i].returnDate, rentals[i].pickupDate);
    if (diffDays >= 10)
      prices[0] = prices[0] * (1 - 0.5);  // 50% discount
    else if ((diffDays >= 4) && (diffDays < 10))
      prices[0] = prices[0] * (1 - 0.3);  // 30% discount
    else if ((diffDays >= 1) && (diffDays < 4))
      prices[0] = prices[0] * (1 - 0.1);  // 10% discount

    rentals[i].price = diffDays * prices[0] + rentals[i].distance * prices[1];
  }

  // DEBUG & CHECK
  //for(var i = 0; i < rentals.length; i++) console.log(rentals[i].price);
}

//-----------------------
//      Exercice 3
//-----------------------
function Exercice3() {
  for(var i = 0; i < rentals.length; i++) {
    var incentive = rentals[i].price * 0.3;
    rentals[i].commission.insurance = incentive / 2;
    rentals[i].commission.assistance = numberOfDays(rentals[i].returnDate, rentals[i].pickupDate);
    rentals[i].commission.drivy = rentals[i].commission.insurance - rentals[i].commission.assistance;
  }

  // DEBUG & CHECK
  //for(var i = 0; i < rentals.length; i++) console.log(rentals[i].commission);
}


//-----------------------
//      Exercice 4
//-----------------------
function Exercice4() {
  for(var i = 0; i < rentals.length; i++) {
      if(rentals[i].options.deductibleReduction == true)
        rentals[i].price = rentals[i].price + 4 * numberOfDays(rentals[i].returnDate, rentals[i].pickupDate);
  }
  // Now prices have been modified because of reduction option,
  // we have to update the amount of commission using Exercice3() function
  Exercice3();

  // DEBUG & CHECK
  //for(var i = 0; i < rentals.length; i++) console.log(rentals[i].price);
}


//-----------------------
//      Exercice 5
//-----------------------

function Exercice5() {
  for(var i = 0; i < rentals.length; i++) {
    for(var j = 0; j < actors.length; j++) {
      if(rentals[i].id == actors[j].rentalId) {

        // We look for the right actor and update his amount of credit/debit
        for(var k = 0; k < actors[j].payment.length; k++) {
          if(actors[j].payment[k].who == "driver")
            actors[j].payment[k].amount = rentals[i].price;  // According to the logic of the exercice, the price reduction is already applied with the Exercice4() function
                                                    // If not, insert the function Exercice4() befor the i for-loop to apply the deductibleReduction option.
          if (actors[j].payment[k].who == "owner")
            actors[j].payment[k].amount = rentals[i].price * (1 - 0.3);
          if (actors[j].payment[k].who == "insurance")
            actors[j].payment[k].amount = rentals[i].commission.insurance;
          if (actors[j].payment[k].who == "assistance")
            actors[j].payment[k].amount = rentals[i].commission.assistance;
          if (actors[j].payment[k].who == "drivy")
            actors[j].payment[k].amount = rentals[i].commission.drivy;
        }
      }
    }
  }
  // DEBUG & CHECK
  //for(var i = 0; i < actors.length; i++) console.log(actors[i]);
}


//-----------------------
//      Exercice 6
//-----------------------

 /* Search a rental in rentals using its id
  * @param [string]
  *@return [int]
 */
function searchForRental(str){
  for (var i = 0; i < rentals.length; i++){
    if (rentals[i].id == str)
      return i;
  }
}

//Using a "hard" method : we update rentals and do everything all over again
function Exercice6(){
  for (var i = 0; i < rentalModifications.length; i++){
    if (rentalModifications[i].pickupDate)
      rentals[searchRental(rentalModifications[i].rentalId)].pickupDate = rentalModifications[i].pickupDate;
    if (rentalModifications[i].distance)
      rentals[searchRental(rentalModifications[i].rentalId)].distance = rentalModifications[i].distance;
    if (rentalModifications[i].returnDate)
      rentals[searchRental(rentalModifications[i].rentalId)].returnDate = rentalModifications[i].returnDate;
  }
  // We update each payment
  Exercice5();

  // DEBUG & CHECK UPDATES
  //console.log(actors)
}
