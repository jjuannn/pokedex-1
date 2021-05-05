import Movimiento from 'src/entidades/movimiento.js';
import Pokemon from 'src/entidades/pokemon.js';
import { actualizarTextoAyuda } from './general.js';

function mostrarTipos(tipos: Array<string>) {
  const $tipos = document.querySelector('#tipos');
  $tipos!.innerHTML = '';

  tipos.forEach((tipo: string) => {
    const $tipo = document.createElement('span');
    $tipo.className = `badge ${tipo} type`;
    $tipo.textContent = tipo;
    $tipos!.appendChild($tipo);
  });
}

function mostrarMovimientos(movimientos: Array<Movimiento>) {
  const $movimientos = document.querySelector('#movimientos');

  movimientos.forEach((movimiento: Movimiento) => {
    const { nombre, versiones } = movimiento;
    const $movimientoFila = document.createElement('tr');
    const $movimiento = document.createElement('th');
    $movimiento.setAttribute('scope', 'row');
    $movimiento.textContent = nombre;
    $movimientoFila.appendChild($movimiento);

    const $versiones = document.createElement('td');
    versiones.forEach((version: string) => {
      const $version = document.createElement('span');
      $version.className = 'badge';
      $version.textContent = version;
      $versiones.appendChild($version);
    });

    $movimientoFila.appendChild($versiones);
    $movimientos!.appendChild($movimientoFila);
  });
}

function mostrarHabilidades(habilidades: Array<string>) {
  const $habilidades = document.querySelector('#habilidades');
  $habilidades!.innerHTML = '';
  habilidades.forEach((habilidad: string) => {
    const $habilidad = document.createElement('span');
    $habilidad.className = 'badge';
    $habilidad.textContent = habilidad;

    $habilidades!.appendChild($habilidad);
  });
}


export default function mostrarPokemon(pokemon: Pokemon) {
  const {
    id,
    nombre,
    foto,
    tipos,
    habilidades,
    movimientos,
  } = pokemon;

  const $pokemonContador = document.querySelector<HTMLElement>('#pokemon-contenedor')
  $pokemonContador!.style.display = 'block';
  actualizarTextoAyuda('');

  const $imagen = document.querySelector('#pokemon-imagen');
  $imagen!.setAttribute('src', foto);
  $imagen!.setAttribute('alt', `Imagen frontal del pokemon ${nombre}`);

  document.querySelector('#pokemon-nombre')!.textContent = nombre;
  document.querySelector('#pokemon-id')!.textContent = id.toString();

  mostrarTipos(tipos);
  mostrarHabilidades(habilidades);
  mostrarMovimientos(movimientos);
}
