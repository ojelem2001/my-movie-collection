import { Component, Input, Output,EventEmitter } from '@angular/core';
import { FilterOptions } from '../models/filter-options.model';
import { DecadeFilter } from '../models/decade.enum';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-media-filters',
  standalone: false,
  templateUrl: './media-filters.component.html',
  styleUrls: ['./media-filters.component.css']
})
export class MediaFiltersComponent {
  @Output() filterChange = new EventEmitter<FilterOptions>();
  
  selectedGenre = '';
  selectedYear: number = 0;
  selectedDecade = DecadeFilter.ALL;
  searchQuery = '';
  
  availableGenres: string[] = [];
  availableYears: number[] = [];
  decadeFilters = Object.values(DecadeFilter);

  constructor(
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.filterService.availableOptions$.subscribe(options => {
      this.availableGenres = options.genres;
      this.availableYears = options.years;
    });
  }

  applyFilters() {
    this.filterChange.emit({
      genre: this.selectedGenre,
      decades: this.selectedDecade,
      year: this.selectedYear,
      searchQuery: this.searchQuery.trim()
    });
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedGenre = '';
    this.selectedDecade = DecadeFilter.ALL;
    this.selectedYear = 0;
    this.applyFilters();
  }
}