//foreach-a i ubacim elemente u html
document.addEventListener("DOMContentLoaded", function() {
    fetch('https://60ebfe17e9647b0017cddfb8.mockapi.io/product')
    .then((response) => {
        const animals = response.json()
        .then((data) => {
            data.map((animal) => {
                //uhvatiti tabelu
                let table = document.getElementById('animals');

                //pravljenje elementata
                let tableRow = createNode('tr');
                let animalType = createNode('td');
                let animalName = createNode('td');

                //setovati podatke
                animalType.innerHTML = animal.animal_type;
                animalName.innerHTML = animal.animal_name;

                //povezivanje elemenata
                append(tableRow, animalType);
                append(tableRow, animalName);

                //append u tabelu
                append(table, tableRow);
            });
        });
    });

    let searchInput = document.getElementById('search');
    searchInput.addEventListener('input', () => {
    
    let searchText = document.getElementById('search').value;
    
    fetch('https://60ebfe17e9647b0017cddfb8.mockapi.io/product')
    .then((response) => {
        //uhvatiti tabelu
        let table = document.getElementById('animals');
        table.innerHTML = '';

        const animals = response.json()
        .then((data) => {
            data.map((animal) => {
                if (animal.animal_type === searchText || animal.animal_name === searchText) {
                    //pravljenje elementata
                    let tableRow = createNode('tr');
                    let animalType = createNode('td');
                    let animalName = createNode('td');

                    //setovati podatke
                    animalType.innerHTML = animal.animal_type;
                    animalName.innerHTML = animal.animal_name;

                    //povezivanje elemenata
                    append(tableRow, animalType);
                    append(tableRow, animalName);

                    //replace content with search
                    append(table, tableRow);
                    }
                });
            });
        });
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