export default interface IPagina {
  count: number;
  next: string;
  previous: string;
  results: { name: string }[];
}
