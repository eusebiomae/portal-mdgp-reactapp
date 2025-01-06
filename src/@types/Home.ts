import { Hero } from './Hero';
import { Maps } from './Maps';
import { Product } from './Product';
import { Seo } from './Seo';

export interface HomeProps {
  hero: Hero;
  properties: PropertiesEntity[];
  stores: StoresEntity[];
  maps: Maps[];
  seo: Seo;
}

export interface PropertiesEntity {
  region: string;
  city: string;
  products: Product[];
}

export interface StoresEntity {
  region: string;
  city: string;
  products: any;
}
