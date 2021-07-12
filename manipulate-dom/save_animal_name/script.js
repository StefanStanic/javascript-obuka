$(document).ready(function() {
    //attach on click on button
    $('#change_animal_name').on('click', function() {        
        //get data you want to overide
        const animal_name = $("#animal_name").val();
        
        //add animal name to the input
        $("#current_animal_name").val(animal_name);
    });
});