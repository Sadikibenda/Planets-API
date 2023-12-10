let starWarsPlanetsList = document.querySelector("ul")

fetch("https://swapi.dev/api/planets")

 .then(response => response.json())
 .then(function(json){
    //console.log(json)
    let search = json.results;
      
    for(p of search) {
        console.log(p)
        let listItem = document.createElement('li');
        listItem.innerHTML = p.name //+ "<br />" + p.name;
        starWarsPlanetsList.appendChild(listItem)
    }
 })


 .catch(error => console.log('Error:', error))