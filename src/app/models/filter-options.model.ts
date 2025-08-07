import { DecadeFilter } from '../models/decade.enum';

export interface FilterOptions {
  genre?: string;
  year?: number;
  decades?: DecadeFilter;
  searchQuery?: string;
}