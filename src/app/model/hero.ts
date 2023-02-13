export interface Hero {
  id: number;
  name: string;
  phone: string
}

export class HeroModel {
  constructor(
    public name: string,
    public phone: string
  ){ }
}

export class KontakModel {
  constructor(
    public firstName: string,
    public lasstName: string,
    public phone: string
  ){ }
}