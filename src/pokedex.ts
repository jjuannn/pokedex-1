import { cargarPokemon, cargarPokemones } from './servicios/pokemon.js';
import { actualizarTextoAyuda, mostrarTotalPokemones } from './ui/general.js';
import { actualizarTextoIndicePokemones, mostrarListadoPokemones } from './ui/listado.js';
import mostrarPaginador from './ui/paginador.js';
import mostrarPokemon from './ui/pokemon.js';
import obtenerParametrosDeURL from './utilidades/utilidades.js';

async function cambiarPagina(pagina: number | string): Promise<void> {
  // pagina : number o string
  console.log(pagina)
  console.log(typeof pagina)
  console.log("asdasdasdas")
  const POKEMONES_POR_PAGINA = 20;
  let paginaActual;
  let offset;
  let limit = POKEMONES_POR_PAGINA;

  if (typeof pagina === 'number') {
    offset = POKEMONES_POR_PAGINA * (pagina - 1);
    paginaActual = pagina;
  } else {
    const parametros = obtenerParametrosDeURL(pagina);
    offset = Number(parametros.offset);
    limit = Number(parametros.limit);
    paginaActual = Math.ceil(offset / limit) + 1;
  }

  actualizarTextoIndicePokemones('Cargando...');

  const listadoPokemones = await cargarPokemones(offset, limit);
  mostrarTotalPokemones(listadoPokemones.total.toString());
  mostrarListadoPokemones(listadoPokemones.nombresPokemones, async (nombre) => {
    actualizarTextoAyuda('Cargando...');
    mostrarPokemon(await cargarPokemon(nombre));
  });

  mostrarPaginador(
    listadoPokemones.total,
    paginaActual,
    listadoPokemones.siguienteUrl,
    listadoPokemones.anteriorUrl,
    cambiarPagina,
  );
}

export default function inicializar() {
  return cambiarPagina(1)
    .catch((e) => console.error(e));
}
