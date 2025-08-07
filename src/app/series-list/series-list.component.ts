import { Component, Input } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { Media } from '../models/media.model';
import { FilterOptions } from '../models/filter-options.model';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent {
  @Input() filters: FilterOptions | undefined;

  @Input() set series(value: Media[]) {
    this.initSeries(value);
  }
  medias: Media[] = [];

  constructor(
    private filterService: FilterService
  ) {}
  
  initSeries(series: Media[]): void {
    const sortedSeries = series.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();      
      return titleA.localeCompare(titleB);
    });
    this.medias = [...sortedSeries];
     this.filterService.updateAvailableOptions({
      genres: this.filterService.getAvailableGenres(sortedSeries),
      years: this.filterService.getAvailableYears(sortedSeries)
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