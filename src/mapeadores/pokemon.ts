import Pokemon from "../entidades/pokemon.js";
import Movimiento from "../entidades/movimiento.js";
import ListadoPokemones from "../entidades/listadoPokemones.js";
interface IDatosApi {
  // preguntar si esta bien usar la interface
  abilities: {ability: { name: string}}[];
  id: number;
  moves: {move: { name: string}, version_group_details: {version_group: {name: string}}[]}[];
  name: string;
  sprites: { front_default: string}; 
  types: {type: { name: string}}[];
}
export function mapearPokemon(datosApi: IDatosApi) {
  const {
    id,
    name: nombre,
    sprites: { front_default: fotoPrincipal },
    types: tipos,
    abilities: habilidades,
    moves: movimientos,
  } = datosApi;

  return new Pokemon(
    id,
    nombre,
    fotoPrincipal,
    habilidades.map((item) => item.ability.name), 
    tipos.map((item) => item.type.name), 
    movimientos.map(
      (item) =>
        new Movimiento(
          item.move.name,
          item.version_group_details.map((v) => v.version_group.name)
        )
    )
  );
}
interface IInformacionPaginacion {
  count: number;
  next: string;
  previous: string;
  results: {name: string}[];
}
export function mapearListadoPokemones(datosApi: IInformacionPaginacion): ListadoPokemones {
  const {
    count: total,
    next: siguienteUrl,
    previous: anteriorUrl,
    results: resultados,
  } = datosApi;

  return new ListadoPokemones(
    total,
    siguienteUrl,
    anteriorUrl,
    resultados.map((pokemon) => pokemon.name) // preguntar porque no puedo hacer pokemon: object
  );
}
