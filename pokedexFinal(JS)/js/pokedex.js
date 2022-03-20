// const usando document query selector para acceder a los datos
const pokeNames = document.querySelector('[poke-name]');
const pokeTypes = document.querySelector('[poke-types]');
const pokeStats = document.querySelector('[poke-stats]');
const pokeStats2 = document.querySelector('[poke-stats2]');
const pokeStats3 = document.querySelector('[poke-stats3]');
const pokeStats4 = document.querySelector('[poke-stats4]');
const pokeStats5 = document.querySelector('[poke-stats5]');
const pokeStats6 = document.querySelector('[poke-stats6]');
const pokeMoves = document.querySelector('[poke-moves]');
//consulta a la API
const fetchPokemon = () => {
        //Realiza la busqueda del pokemon con la entrada asignada en el input    
        const pokeName = document.getElementById("pokeName");
        let pokeInput = pokeName.value.toLowerCase();
        //toma los datos del input para realizar la busqueda
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
        console.log(url);
        // Realiza la consulta en la API
        fetch(url).then((res) => {
            //Verificacion de datos encontrados, el 20 es un status estandraizado que nos indica si se encontro o no
            if (res.status != "200") {
                console.log(res);
                pokeImage("https://th.bing.com/th/id/R.d9ecc5bcaac069cbaa40faea6226acc9?rik=M8OqdP%2bJ9lFbLw&pid=ImgRaw&r=0");
            } else {
                return res.json();
            }
            return res.json();
        }).then((data) => {
            // acceso a la informacion de la api
            console.log(data);
            // imagen desde la api
            let pokeImg = data.sprites.other.home.front_default;
            console.log(pokeImg);
            pokeImage(pokeImg);
            // nombre desde la api
            console.log(data.species.name);
            pokeNames.textContent = data.species.name
                // habilidades desde la api
            console.log(data.moves[0].move.name);
            pokeMoves.textContent = data.moves[0].move.name + ", " + data.moves[25].move.name + " and " + data.moves[26].move.name;
            // tipo de pokemon desde la api
            console.log(data.types[0].type.name);
            pokeTypes.textContent = data.types[0].type.name;
            // estadisticas de pokemon desde la api
            console.log(data.stats[0].stat.name);
            pokeStats.textContent = data.stats[0].stat.name + ": " + data.stats[0].base_stat + "% ";
            pokeStats2.textContent = data.stats[1].stat.name + ": " + data.stats[1].base_stat + "% ";
            pokeStats3.textContent = data.stats[2].stat.name + ": " + data.stats[2].base_stat + "% ";
            pokeStats4.textContent = data.stats[3].stat.name + ": " + data.stats[3].base_stat + "% ";
            pokeStats5.textContent = data.stats[4].stat.name + ": " + data.stats[4].base_stat + "% ";
            pokeStats6.textContent = data.stats[5].stat.name + ": " + data.stats[5].base_stat + "% ";

        })
    }
    // cambio de la imagen
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg")
    pokeImg.src = url;
}