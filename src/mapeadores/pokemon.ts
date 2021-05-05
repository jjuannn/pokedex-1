import Pokemon from "../entidades/pokemon.js";
import Movimiento from "../entidades/movimiento.js";
import ListadoPokemones from "../entidades/listadoPokemones.js";
interface IDatosApi {
  // preguntar si esta bien usar la interface
  abilities: object[];
  id: number;
  moves: object[];
  name: string;
  sprites: any; //  sprites: object; => no funciona no se xq
  types: object[];
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
    habilidades.map((item: any) => item.ability.name), // preguntar aca lo mismo
    tipos.map((item: any) => item.type.name), // preguntar aca lo mismo
    movimientos.map(
      (item: any) => // preguntar aca lo mismo
        new Movimiento(
          item.move.name,
          item.version_group_details.map((v: any) => v.version_group.name) // preguntar aca lo mismo
        )
    )
  );
}
interface IInformacionPaginacion {
  count: number;
  next: string;
  previous: string;
  results: Object[];
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
    resultados.map((pokemon: any) => pokemon.name) // preguntar porque no puedo hacer pokemon: object
  );
}
