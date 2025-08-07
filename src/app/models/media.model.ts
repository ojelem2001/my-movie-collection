import { MediaType } from './media.enum';
import { MediaPlatform } from './media-platform.model';
import { SeriesModel } from './series.model';

export interface Media {
  id: number;
  title: string;
  originalTitle?: string;
  year: number;
  genres: string[];
  description: string;
  posterUrl: string;
  posterUrl2?: string;
  imdb?: MediaPlatform,
  kinopoisk?: MediaPlatform,
  letterboxd?: MediaPlatform,
  type: MediaType;
  series?: SeriesModel,
  seasons?: number;
  episodes?: number;
  filePath?: string; // Путь к файлу на диске
  vlcProtocolLink?: string; // Ссылка для VLC
}