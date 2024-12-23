

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
import { httpClientPlugin as http } from "../plugins/http-client.plugin";

export const getPokemonById = async(id: number) : Promise<string> => {
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await http.get(url);
        return pokemon.name;
    } catch (error) {
        throw 'Not Found';
    }
};