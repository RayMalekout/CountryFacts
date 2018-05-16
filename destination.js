//This file follows a design pattern for constructors with prototypes
//First, a function that will be called by a constructor to create destination objects is defined

function Destination(country,continent,population) {

    this.country = country;
    this.continent = continent;
    this.population = population;

}

//Using Destination.prototype.newMethod

Destination.prototype.toString = function() {
  return this.country + " is in " + this.continent + " and has around " + this.population + " millon people ";
}

/* Using the constructor and prototype method to create new Destination objects.
Encapsulated in showcountries function to be called by onclick event in index.html.
Each country's stats are output to an <li> tag in index.html  */

function showcountries() {
let finland = new Destination("Finland", "Europe", 5.5);
let southAfrica = new Destination("South Africa", "Africa",55 );
let thailand = new Destination("Thailand", "Asia", 68);

document.getElementById('country1').innerHTML = (finland.toString());
document.getElementById('country2').innerHTML = (southAfrica.toString());
document.getElementById('country3').innerHTML = (thailand.toString());

};
