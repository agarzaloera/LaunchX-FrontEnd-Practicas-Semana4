const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif");
            pokeStats();
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            //pokeId.innerHTML = `#${data.id} -&nbsp;`;
            pokeTitle.innerHTML = `#${data.id}&nbsp-&nbsp${data.name}`;
            pokeType.innerHTML = `${data.types[0].type.name}`;
            pokeSkll.innerHTML = `${data.moves[0].move.name}, ${data.moves[1].move.name}, ${data.moves[2].move.name}`;
            pokeHp.innerHTML = `${data.stats[0].base_stat}`;
            pokeAttk.innerHTML = `${data.stats[1].base_stat}`;
            pokeDef.innerHTML = `${data.stats[2].base_stat}`;
            pokeSpattk.innerHTML = `${data.stats[3].base_stat}`;
            pokeSpdef.innerHTML = `${data.stats[4].base_stat}`;
            pokeSpd.innerHTML = `${data.stats[5].base_stat}`;
            pokeWeight.innerHTML = `${data.weight / 10}kg`;
            pokeHeight.innerHTML = `${data.height * 10}cm`;
        }
    });
}

//fetchPokemon();

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
//const pokeId = document.getElementById("pokeId");
const pokeTitle = document.getElementById("pokeTitle");
const pokeType = document.getElementById("pokeType");
const pokeSkll = document.getElementById("pokeSkll");
const pokeHp = document.getElementById("pokeHp");
const pokeAttk = document.getElementById("pokeAttk");
const pokeDef = document.getElementById("pokeDef");
const pokeSpattk = document.getElementById("pokeSpattk");
const pokeSpdef = document.getElementById("pokeSpdef");
const pokeSpd = document.getElementById("pokeSpd");
const pokeWeight = document.getElementById("pokeWeight");
const pokeHeight = document.getElementById("pokeHeight");
