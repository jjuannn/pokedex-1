export function actualizarTextoAyuda(texto: string): void {
  const $ayuda = document.querySelector('#ayuda');
    $ayuda!.textContent = texto;

}

export function mostrarTotalPokemones(totalPokemones: string): void {
  const $totalPokemones = document.querySelector('#total-pokemones')
    $totalPokemones!.textContent = totalPokemones
}

/**
 *
  @ts-ignore: Object is possibly 'null'. // PREGUNTAR POR ESTO 
 */
