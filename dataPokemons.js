const getPokemon = (id, number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            return response.json();
        })   
        .then(data => {
            console.log(data);
            paintPokemon(data, number);     
        })
        .catch(error => {
            console.log(error);
        })
}




const btnSeleccionar = () => {
    let pokemon1 = Math.round(Math.random() * 150) 
    let pokemon2 = Math.round(Math.random() * 150)

    getPokemon(pokemon1,1);
    getPokemon(pokemon2,2);
}

btnSeleccionar();


const lista = document.getElementById("listarpokemon")


const paintPokemon = (data, id) => {
    let item = lista.querySelector(`#pok-${id}`);
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
    item.getElementsByTagName("p")[0].innerHTML = data.name;

}




