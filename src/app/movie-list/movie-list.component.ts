import { Component, Input } from '@angular/core';
import { Media } from '../models/media.model';
import { FilterOptions } from '../models/filter-options.model';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() filters: FilterOptions | undefined;
  @Input() set movies(value: Media[]) {
    this.initMovies(value);
  }
  medias: Media[] = [];

  constructor(
    private filterService: FilterService
  ) {}

  initMovies(movies: Media[]): void {
    const sortedMovies = movies.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();      
      return titleA.localeCompare(titleB);
    });
    this.medias = [...sortedMovies];
    this.filterService.updateAvailableOptions({
      genres: this.filterService.getAvailableGenres(sortedMovies),
      years: this.filterService.getAvailableYears(sortedMovies)
    });
  }

  getFiltered(filters: FilterOptions | undefined): Media[] {
    let result = [...this.medias];
    if(!filters){
      return result;      
    }
    result = this.filterService.filterByGenre(result, filters.genre);
    result = this.filterService.filterByDecade(result, filters.decades);
    result = this.filterService.filterBySearch(result, filters.searchQuery);
    
    return result;
  }
}