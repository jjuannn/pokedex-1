export default interface IDatosApi {
  abilities: { ability: { name: string } }[];
  id: number;
  moves: {
    move: { name: string };
    version_group_details: { version_group: { name: string } }[];
  }[];
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}
