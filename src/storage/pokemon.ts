import ListadoPokemones from "src/entidades/listadoPokemones";
import Pokemon from "src/entidades/pokemon";

export const LIMITE_POKEMONES = 20;

function obtenerKeyPokemon(id: string): string {
  return `pokemon_${id}`;
}

function obtenerKeyPokemones(offset: number, limite: number): string {
  return `pokemones_${offset}_${limite}`;
}


export function cargarPokemon(id: string): Pokemon {
  if (id === undefined) {
    throw new Error('Se necesita un identificador para cargar un pokemón');
  }
  const pokemon = JSON.parse(localStorage.getItem(obtenerKeyPokemon(id)) || "null");
  if (pokemon === null) {
    throw new Error(`Pokemon con id ${id} no encontrado`);
  }

  return pokemon;
}


export function cargarPokemones(offset: number = 0, limite: number = LIMITE_POKEMONES): ListadoPokemones {
  const pokemones = JSON.parse(localStorage.getItem(obtenerKeyPokemones(offset, limite)) || "null");
  if (pokemones === null) {
    throw new Error(`Listado de pokemones con offset ${offset} y limite ${limite} no encontrado`);
  }

  return pokemones;
}

export function guardarPokemon(id: string, pokemon: Pokemon): void {
  if (id === undefined || typeof pokemon !== 'object') {
    throw new Error('Se necesita un identificador y un pokemon para guardar en localStorage');
  }

  localStorage.setItem(obtenerKeyPokemon(id), JSON.stringify(pokemon));
}

// preguntar si pokemones: ListadoPokemones esta bien
// ya que tambien funciona con => pokemones: object
export function guardarPokemones(offset: number, limite: number, pokemones: ListadoPokemones): void {
  if (offset === undefined || limite === undefined || typeof pokemones !== 'object') {
    throw new Error('Se necesita offset, limite y pokemones');
  }

  localStorage.setItem(obtenerKeyPokemones(offset, limite), JSON.stringify(pokemones));
}
