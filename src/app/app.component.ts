import { Component, OnInit, signal } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { MediaService } from './services/media.service';
import { FilterOptions } from './models/filter-options.model';
import { MediaType } from './models/media.enum';
import { Media } from './models/media.model';
import { BehaviorSubject } from 'rxjs';
import { AvailableFilterOptions } from './models/available-filter-options.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {  
  protected readonly title = signal('my-movie-collection');
  currentFilters?: FilterOptions;
  options?: AvailableFilterOptions;
  currentView: MediaType = MediaType.MOVIE;
  moviesCount$$  = new BehaviorSubject<number>(0);
  seriesCount$$  = new BehaviorSubject<number>(0);
  mediaType = MediaType;
  movies: Media[] = [];
  series: Media[] = [];

  constructor(
    private themeService: ThemeService,
    private mediaService: MediaService,
  ) {}

  ngOnInit(): void {
    this.themeService.initializeTheme();
    this.movies = this.mediaService.getMovies();
    this.series = this.mediaService.getSeries();
    this.moviesCount$$.next(this.movies.length);
    this.seriesCount$$.next(this.series.length);
  }

  showMovies() {
    this.currentView = MediaType.MOVIE;
  }

  showSeries() {
    this.currentView = MediaType.SERIES;
  }

  onFiltersChanged(filters: FilterOptions) {
    this.currentFilters = filters;
  }
}