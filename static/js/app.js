//Make a copy!
var dataset = data

var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");

// Get Buttons
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");
var $resetBtnMain = document.querySelector("#reset-main");


// Event listeners on modal search
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);
$resetBtnMain.addEventListener("click", handleResetButtonClick);


var filteredData = dataset;

// Dynamic Table definition
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    var sighting = filteredData[i];
    var fields = Object.keys(sighting);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {

  var filterDate = $dateInput.value.trim();
  if (filterDate != "") {
    filteredData = dataSet.filter(function (sighting) {
      var sightingDate = sighting.datetime;
      return sightingDate === filterDate;
    });
  };
  var filterCity = $cityInput.value.trim().toLowerCase();
  if (filterCity != "") {
    filteredData = filteredData.filter(function (sighting) {
      var sightingCity = sighting.city;
      return sightingCity === filterCity;
    });
  };
  var filterState = $stateInput.value.trim().toLowerCase();
  if (filterState != "") {
    filteredData = filteredData.filter(function (sighting) {
      var sightingState = sighting.state;
      return sightingState === filterState;
    });
  };
  var filterCountry = $countryInput.value.trim().toLowerCase();
  if (filterCountry != "") {
    filteredData = filteredData.filter(function (sighting) {
      var sightingCountry = sighting.country;
      return sightingCountry === filterCountry;
    });
  };
  var filterShape = $shapeInput.value.trim().toLowerCase();
  if (filterShape != "") {
    filteredData = filteredData.filter(function (sighting) {
      var sightingShape = sighting.shape;
      return sightingShape === filterShape;
    });
  };
  renderTable();
};


// Reset the data and search form after a search
function handleResetButtonClick() {
  filteredData = data;
  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";
  renderTable();
}

// Render the table for the first time on page load
renderTable();

  //Just for fun, lets highlight some random comments.
var comments = data.map(data => data.comments);
var rand = Math.floor(Math.random() * comments.length);

function showquote(){
    document.getElementById('quote').innerHTML = comments[rand];
    console.log(comments[rand])
}
showquote();
