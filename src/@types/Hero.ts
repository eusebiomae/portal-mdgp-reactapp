import { Images } from './Images';
import { Information } from './Information';

export interface Hero {
  id: number;
  title: string;
  type: string;
  label: string;
  button: string;
  image: Images;
}

export interface InternalHero {
  image: Images;
  information: Information;
  enterprise?: Images;
  label?: string;
}
