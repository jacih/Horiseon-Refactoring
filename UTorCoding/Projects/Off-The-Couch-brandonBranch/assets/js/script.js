// Opens Modal on click of "search topic" button
$(document).ready(function(){
    $("#modBtn").click(function(){
      $("#searchAct").modal();
    });
  });
  
  
  // Closes modal on click of "search" button
  $('#saveSearch').click(function(e) {
    e.preventDefault();
    $('#searchAct').modal('toggle');
    return false;
  });

  const fetchLocationName =  (lat,lng) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat  = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log(lat)
      console.log(lng)
     fetch(
      'https://www.mapquestapi.com/geocoding/v1/reverse?key=PRZUpttP0TCp8zsRVAIyHZz7mpmjIupR&location='+lat+'%2C'+lng+'&outFormat=json&thumbMaps=false',
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        console.log(responseJson.results[0].locations[0].adminArea5)
        console.log(
          'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
        );
      });
    });
  };
  fetchLocationName()

//Selected Activity using serpstackAPI(uses google search)
//use res. "console.log ID"
//Grabbing from organic_results
//Search Button on click
  $('#saveSearch').on('click', function(e){
  e.preventDefault()
  let locationURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=1eb674328cc11445a9756c568ef53d13"

  .fetch(locationURL)
  .then(function(response) {
      if (response) {
        return response.json();
      }
  }).then(function(locData) {
console.log(locData);
city = locData.timezone.split("/")[1];
  });

  var query = $("#searchQuery").val()  //Grabs value from searchQuery ID in HTML
  let activities = "activities"; //Adds "activities" to the search
  let queryA = query + activities; //What were actually searching
  var API_KEY = '93b9743008322f7aa1476f093145a2fb' //serpstackAPI KEY
  let result=''
  var url = 'http://api.serpstack.com/search?access_key='  + API_KEY + "&type=web&num=1&query=" +queryA
  console.log(url);
  $.get(url, function(data){
      $("#result").html('')
      console.log(data)
      data.organic_results.forEach(res => {
        //What will be displayed
          result =`
          <h3>${res.title}</h3><br><a target="_blank" href="${res.url}">${res.url}</a>
          <p>${res.snippet}</p>
          `
          //Appends to #result in HTML
          $("#result").append(result)
      });
  });
});



// Random activity using BoredAPI
// use data."console.log ID"
let boredUrl = "https://www.boredapi.com/api/activity/"

//Random button on click
$('#randomQ').on('click', function(e){
  e.preventDefault()
  fetch(boredUrl)
    .then(function (response) {
      console.log(response);
      if (!response.ok) {
        throw response.json();
      }
      console.log(response.json);
      return response.json();

    })
    .then(function (data) {
      console.log(data);
      //What will be displayed
      resultRandom = `<h3>${data.activity}</h3><p><a target="_blank" href="${data.link}">${data.link}</a></p>`

      //Displays in #result in HTML
      document.getElementById("result").innerHTML = resultRandom;
      
});
});
