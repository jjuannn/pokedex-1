function crearItemPaginador(texto: string, url = '#') {
  const $item = document.createElement('li');
  const $link = document.createElement('a');
  $item.className = 'page-item';
  $link.className = 'page-link';
  $link.textContent = texto;
  $link.href = url;
  $link.dataset.pagina = texto;

  $item.appendChild($link);

  return $item;
}
export function manejarCambioPagina(
  e: {target: HTMLAnchorElement, preventDefault: () => {}}, 
  callbackPaginaSeleccionada = (param: string | number) => {}) {
  e.preventDefault();
  const { target } = e;
  const href = target.getAttribute('href');
  let numeroPagina;
  const { pagina } = target.dataset;
  if (href === '#') {
    numeroPagina = Number(pagina);
    callbackPaginaSeleccionada(numeroPagina);
  } else {
    callbackPaginaSeleccionada(Number(href));
  }
}

export default function mostrarPaginador(
  totalPokemones: number,
  paginaActual: number,
  urlSiguiente: string,
  urlAnterior: string,
  callbackPaginaSeleccionada: any = () => {},
) {
  const POKEMONES_POR_PAGINA = 20;
  const $paginador = document.querySelector<HTMLElement>('#paginador');
  $paginador!.innerHTML = '';

  const totalPaginas = Math.ceil(totalPokemones / POKEMONES_POR_PAGINA);

  const $paginaAnterior = crearItemPaginador('Anterior', urlAnterior);

  if (urlAnterior) {
    $paginaAnterior.classList.remove('disabled');
  } else {
    $paginaAnterior.classList.add('disabled');
  }
  $paginador!.appendChild($paginaAnterior);

  for (let i = 0; i < totalPaginas; i += 1) {
    const numeroPagina = i + 1;
    const $pagina = crearItemPaginador(numeroPagina.toString());
    if (numeroPagina === paginaActual) {
      $pagina.classList.add('active');
    }
    $paginador!.appendChild($pagina);
  }

  const $paginaSiguiente = crearItemPaginador('Siguiente', urlSiguiente);
  if (urlSiguiente) {
    $paginaSiguiente.classList.remove('disabled');
  } else {
    $paginaSiguiente.classList.add('disabled');
  }
  $paginador!.appendChild($paginaSiguiente);

  $paginador!.onclick = (e: any) => {
    manejarCambioPagina(e, callbackPaginaSeleccionada);
  };
}
