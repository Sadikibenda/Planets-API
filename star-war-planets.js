let starWarsPlanetsList = document.querySelector("ul")

fetch("https://swapi.dev/api/planets")
 .then(response => response.json())
 .then(function(json){
    let planets = json.results;

    for(p of planets) {
        let listItem = document.createElement('li');
        listItem.innerHTML = p.name;
        starWarsPlanetsList.appendChild(listItem)
    }
 })


 .catch(error => console.log('Error:', error))