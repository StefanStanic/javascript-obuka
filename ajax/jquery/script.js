$(document).ready(function() {
    //fetch data via get request
    $.get("https://60ebfe17e9647b0017cddfb8.mockapi.io/product", function( data ) {
        $.each(data, function(index, animal) {
            //get where to put the data
            let table = document.getElementById('animals');

            //create tr and td elements
            let tr = createNode('tr');
            let animalType = createNode('td');
            let animalName = createNode('td');

            //set data from colums
            animalType.innerHTML = animal.animal_type;
            animalName.innerHTML = animal.animal_name;

            //append to parent element
            append(tr, animalType);
            append(tr, animalName);
            append(table, tr);
        })    
    });
});


//create node function
function createNode(element) {
    return document.createElement(element);
}

//append function
function append(parent, el) {
    return parent.appendChild(el);
}