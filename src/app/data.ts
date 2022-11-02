export interface Hero {
  name: string;
  phone: string
}

export const HEROES = [
  {name: 'Batman', phone: "25565115"},
  {name: 'Spiderman', phone: "25565115"},
  {name: 'Wonder Woman', phone: "25565115"},
  {name: 'Venom', phone: "25565115"},
  {name: 'Hulk', phone: "25565115"}
]

export interface Hero2 {
  id: number;
  name: string;
  phone: number
}