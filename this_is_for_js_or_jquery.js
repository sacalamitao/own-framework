
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

  $(document).on 'keyup', '.numbersOnly', ->
    if @value != @value.replace(/[^0-9\.]*$/g, '')
    @value = @value.replace(/[^0-9\.]*$/g, '')
    return
//--------------------REGEX for numbers and dollar sign only


$(document).on 'keyup', '.numbersOnly', ->
  if @value != @value.replace(/[^0-9\.]/g, '')
    @value = @value.replace(/[^0-9\.]/g, '')
  return

$(document).on 'keyup', '.numbersOnly', ->
  if @value != @value.replace(/\.(?=.*\.)/g, '')
    @value = @value.replace(/\.(?=.*\.)/g, '')
  return 

$(document).on 'keyup', '.numbersOnly', ->
  if @value != @value.replace(/[^0-9\.]*\.[0-9]{3}$/g, '')
    @value = @value.replace(/[^0-9\.]*\.[0-9]{3}$/g, '')
  return


$(document).on 'keyup', '.numbersOnly', ->
  if @value != @value.replace(/\.(?=.*\.)/g, '')
    @value = @value.replace(/\.(?=.*\.)/g, '')
  return

$(document).on 'keyup', '.numbersOnly', ->
  if @value != @value.replace(/[^0-9\.]*\.[0-9]{3}$/g, '')
    @value = @value.replace(/[^0-9\.]*\.[0-9]{3}$/g, '')
  return


// --------------------REGEX for one DOT only------------------
var total = document.querySelector("#testId");
  $(document).on('click', total, function(){
    // var total = document.querySelector(".total");
    console.log('test total')

  });

  // var testest = document.querySelector(".numbersonly");
  // $(document).on('keyup', testest, function(){ 
  //   console.log('test')

  // });​


// ---------------------------------------
