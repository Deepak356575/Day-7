//Get all the countries from Asia continent /region using Filter function
/*
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function ()
{
  var data = request.response;
  var result = JSON.parse(data);
  var asianCountries = result.filter((ele) => ele.region === "Asia");
  var countryNames = asianCountries.map((ele) => ele.name.common);
  console.log(countryNames);
};
*/
/*
//Get all the countries with a population of less than 2 lakhs using Filter function

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function ()
{
  var data = request.response;
  var result = JSON.parse(data);
  var countrynames = result.filter((country)=>country.population<200000)
  var lessthan2lakhs = countrynames.map((country)=>country.name.common)
console.log(lessthan2lakhs)}
*/
//Print the following details name, capital, flag, using forEach function
/*
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  result.forEach(function(country) 
  { 
    console.log('Name:', country.name.common);
    console.log('Capital:', country.capital[0]);
    console.log('Flag:', country.flags.svg);
  });
}
*/
/*
//Print the total population of countries using reduce function

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function ()
 {
  var data = request.response;
  var result = JSON.parse(data);
  var totalPopulation = result.reduce((total, country) => {
    return total + country.population;
  }, 0);
  console.log('Total population:', totalPopulation);
}
*/
/*
//Print the country that uses US dollars as currency.
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () 
{
  var data = request.response;
  var result = JSON.parse(data);

  var USDcountries = result.filter(country => {
    return country.currencies && Object.keys(country.currencies).includes('USD');
  });
  var countryNames = USDcountries.map(country => country.name.common);

  console.log(countryNames);
}
*/