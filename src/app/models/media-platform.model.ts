import { MediaType } from './media.enum';

export interface MediaPlatform {
  id: string;
  rating?: number;
  description?: string;
  genres?: string[];
}