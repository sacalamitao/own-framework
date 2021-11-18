$(document).ready(function () {
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        types: ['geocode'],
    });
    // $(document.getElementById(searchInput)).val('test') 
  });
//---------- google api