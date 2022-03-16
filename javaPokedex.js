const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = 'https://pokeapi.co/api/v2/pokemon/'+pokeInput;
    fetch (url).then((res) => {
        if (res.status != 200) {
            pokeImage('./pokeball.png');
            const noEncontrado = document.getElementById("pokemonNoEncontrado");
            noEncontrado.textContent="Pokemon no encontrado";
            resetear();
        }
        else{
            return res.json();
        }
    }).then ((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeNombre = data.name;
        let pokeTipos = data.types;
        let pokeEstadisticas = data.stats;
        let pokeMovimientos = data.moves;
        actualizarDatos(pokeTipos, pokeEstadisticas, pokeMovimientos, pokeNombre);
        pokeImage(pokeImg);
    })
}

const resetear = () => {
    const tipos = document.getElementById("pokeTipo");
    tipos.textContent = "Tipo: ";
    const nombre = document.getElementById("pokeNombre");
    nombre.textContent = "Nombre: ";
    const movimientos = document.getElementById("pokeMovimientos");
    movimientos.textContent = "Movimientos: ";
    const e1 = document.getElementById("e1");
    e1.textContent = "Hp: ";
    const e2 = document.getElementById("e2");
    e2.textContent = "Ataque: ";
    const e3 = document.getElementById("e3");
    e3.textContent = "Defensa: ";
    const e4 = document.getElementById("e4");
    e4.textContent = "Ataque especial: ";
    const e5 = document.getElementById("e5");
    e5.textContent = "Defensa especial: ";
    const e6 = document.getElementById("e6");
    e6.textContent = "Velocidad: ";
}

const actualizarDatos = (pokeTipos, pokeEstadisticas, pokeMovimientos, pokeNombre) => {
    const noEncontrado = document.getElementById("pokemonNoEncontrado");
    noEncontrado.textContent="";
    const tipos = document.getElementById("pokeTipo");
    var cadena = "Tipo: ";
    pokeTipos.map(tipo => {
        cadena += tipo.type.name;
        cadena += ", ";
    })
    tipos.textContent = cadena.substring(0, cadena.length-2);

    const nombre = document.getElementById("pokeNombre");
    nombre.textContent = "Nombre: " + pokeNombre;

    const movimientos = document.getElementById("pokeMovimientos");
    cadena = "Movimientos: ";
    for (i=0; i<5; i+=1){
        cadena += pokeMovimientos[i].move.name;
        cadena += ", ";
    }
    if (pokeMovimientos.length <= 5) {
        movimientos.textContent = cadena.substring(0, cadena.length-2);
    }
    else{
        cadena += "entre otros."
        movimientos.textContent = cadena;
    }

    const e1 = document.getElementById("e1");
    e1.textContent = "Hp: " + pokeEstadisticas[0].base_stat;
    const e2 = document.getElementById("e2");
    e2.textContent = "Ataque: " + pokeEstadisticas[1].base_stat;
    const e3 = document.getElementById("e3");
    e3.textContent = "Defensa: " + pokeEstadisticas[2].base_stat;
    const e4 = document.getElementById("e4");
    e4.textContent = "Ataque especial: " + pokeEstadisticas[3].base_stat;
    const e5 = document.getElementById("e5");
    e5.textContent = "Defensa especial: " + pokeEstadisticas[4].base_stat;
    const e6 = document.getElementById("e6");
    e6.textContent = "Velocidad: " + pokeEstadisticas[5].base_stat;
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src= url;
}
