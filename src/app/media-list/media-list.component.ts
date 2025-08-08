import { Component, Input } from '@angular/core';
import { Media } from '../models/media.model';
import { FilterOptions } from '../models/filter-options.model';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-media-list',
  standalone: false,
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MovieListComponent {
  @Input() filters: FilterOptions | undefined;
  @Input() set medias(value: Media[]) {
    this.initMovies(value);
  }
  mediaCollection: Media[] = [];

  constructor(
    private filterService: FilterService
  ) {}

  initMovies(medias: Media[]): void {
    const sortedMovies = medias.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();      
      return titleA.localeCompare(titleB);
    });
    this.mediaCollection = [...sortedMovies];
    this.filterService.updateAvailableOptions({
      genres: this.filterService.getAvailableGenres(sortedMovies),
      years: this.filterService.getAvailableYears(sortedMovies)
    });
  }

  getFiltered(filters: FilterOptions | undefined): Media[] {
    let result = [...this.mediaCollection];
    if(!filters){
      return result;      
    }
    result = this.filterService.filterByGenre(result, filters.genre);
    result = this.filterService.filterByDecade(result, filters.decades);
    result = this.filterService.filterBySearch(result, filters.searchQuery);
    
    return result;
  }
}