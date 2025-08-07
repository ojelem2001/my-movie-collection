import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { ThemeType } from '../models/theme.type';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: ThemeType | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setTheme(theme: ThemeType) {
    this.currentTheme = theme;
    if (isPlatformBrowser(this.platformId)) {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  initializeTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') as ThemeType;
      this.setTheme(savedTheme || 'netflix-theme');
      return;
    }
    this.setTheme('netflix-theme');
  }
}