import Movimiento from "../entidades/movimiento";
export default class Pokemon {
  constructor(
    public id: number,
    public nombre: string,
    public foto: string,
    public habilidades: string[],
    public tipos: string[],
    public movimientos: Array<Movimiento> // preguntar sobre esta linea
  ) {}
}
