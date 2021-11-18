  $(document).ready(function () {
    var searchInput = "search_input"    
    loadGooglePlaces((document.getElementById(searchInput)), {
        types: ['geocode'],
    });
  });

  $(document).ready(function () {
    const searchInput = document.querySelector('.autocomplete');    
    loadGooglePlaces(searchInput, {
        types: ['geocode'],
    });
  });
//---------- google api this is for ID, if a new item will be generated need to change it to class
