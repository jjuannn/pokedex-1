export function actualizarTextoIndicePokemones(texto: string): void {
  const $indice = document.querySelector('#indice');
    $indice!.textContent = texto;
}

export function mostrarListadoPokemones(nombresPokemones: Array<string>, pokemonSeleccionadoCallback: (param: string) => {}) {
  const $indice = document.querySelector('#indice');
    $indice!.innerHTML = '';

  nombresPokemones.forEach((nombre) => {
    const $link = document.createElement('a');
    $link.className = 'list-group-item list-group-item-action';
    $link.setAttribute('href', '#');
    $link.textContent = nombre;
    $link.onclick = () => pokemonSeleccionadoCallback(nombre);
      $indice!.appendChild($link);
  });
}
