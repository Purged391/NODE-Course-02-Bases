// !Promises

export const getPokemonByIdP = (id: number): Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
        .then(resp => resp.json())
        .then(pokemon => pokemon.name);
};


// !Async/Await

export const getPokemonByIdA = async(id: number): Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resp = await fetch(url);
    const pokemon = await resp.json();
    return pokemon.name;
};

// !Service
const {http} = require('../plugins');

export const getPokemonById = async(id: number) : Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);
    return pokemon.name;
};