const pokeContainer = document.getElementById('poke-container');
const pokemon_count = 150;

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

async function logPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemons = await response.json();
    return pokemons;
}

async function displayPokemon() {
    for (let i = 1; i <= pokemon_count; i++) {
        const pokemon = await logPokemon(i);

        const card = document.createElement('div');
        card.classList.add('pokemon');

        const image = document.createElement('img');
        image.src = pokemon.sprites.front_default;
        image.alt = pokemon.name;

        const number = document.createElement('p');
        number.textContent = `${pokemon.id}`;

        const name = document.createElement('p');
        name.textContent = pokemon.name;

        const type = document.createElement('p');
        type.textContent = pokemon.types[0].type.name;

        const pokemonType = pokemon.types[0].type.name;

        Object.keys(colors).forEach(key => {
            if (key === pokemonType) {
                card.style.backgroundColor = `${colors[key]}`
            }
        });

        card.appendChild(image);
        card.appendChild(number);
        card.appendChild(name);
        card.appendChild(type);

        pokeContainer.appendChild(card);
    }
}

displayPokemon();