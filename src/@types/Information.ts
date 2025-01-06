import { Icons } from './Icons';

export interface Information {
  occupation: string;
  deliveryDate: string;
  title: string;
  localization: Localization;
  meters: string;
}

export interface Localization {
  title: string;
  description?: string;
  id?: number;
  latitude: string;
  longitude: string;
  street?: string;
  number?: string;
  neighborhood?: string;
  state?: string;
  icon?: Icons;
}
