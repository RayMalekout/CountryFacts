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
  let allcountries = [[61.92410999999999,25.7481511],[-30.559482,	22.937506],[15.870032,100.992541]];

document.getElementById('country1').innerHTML = (finland.toString());
document.getElementById('country2').innerHTML = (southAfrica.toString());
document.getElementById('country3').innerHTML = (thailand.toString());

};

/* Use Google Map API to randomly return the map for one of the three countries */

function myMap() {
let allcountries = [[61.92410999999999,25.7481511],[-30.559482,	22.937506],[15.870032,100.992541]];
let countryselector = [0,1,2];
let randomselection = countryselector[Math.floor(Math.random() * countryselector.length)];
let mapProp= {
    center:new google.maps.LatLng(allcountries[(randomselection)][0],allcountries[(randomselection)][1]),
    zoom:5,
};
let map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
