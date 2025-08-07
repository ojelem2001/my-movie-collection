import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { ThemeType } from '../models/theme.enum';

@Component({
  selector: 'app-theme-switcher',
  standalone: false,
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent {
  currentTheme: ThemeType | undefined;
  themes = Object.values(ThemeType);;

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.getCurrentTheme();
  }
  
  setTheme(theme: ThemeType) {
    this.themeService.setTheme(theme);
    this.currentTheme = theme;
  }

  getThemeName(theme: ThemeType): string {
    return theme.split('-')[0].toUpperCase();
  }
}