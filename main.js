"use strict"
// table
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//drop-down menu
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var nameQuery = nameSelection.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(nameQuery)) {
            filteredCoffees.push(coffee);
        } else if(selectedRoast === "all types" && coffee.name.toLowerCase().includes(nameQuery)) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeContainer.innerHTML = renderCoffees(filteredCoffees);
}

//Add Coffee input

// (function() {
//     var userInput = document.forms.user.user-add;
//
//     document.log(userInput.value)
// })();

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//auto roast drop-down
var selectElement = document.getElementById('roast-selection');

selectElement.addEventListener('change', updateCoffees);


var coffeeContainer = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.getElementById('name-selection');


coffeeContainer.innerHTML = renderCoffees(coffees);

//auto search box
nameSelection.addEventListener('keyup', updateCoffees);

//submit button
submitButton.addEventListener('click', updateCoffees);

