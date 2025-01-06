import { Button } from './Button';
import { Images } from './Images';
import { Information } from './Information';
import { PropertyTypes } from './PropertyTypes';

export interface Card {
  id: number;
  name: string;
  slug: string;
  type: PropertyTypes;
  image: Images;
  information: Information;
  button: Button;
  enterprise?: Images;
  label?: string;
}
