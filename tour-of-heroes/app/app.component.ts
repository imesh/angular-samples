import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  template: `
            <h2>My Heroes</h2>
            <ul class="heroes">
              <li *ngFor="let hero of heroes" 
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <!-- each hero goes here -->
                <span class="badge">{{hero.id}}</span> {{hero.name}}
              </li>
            </ul>

            <my-hero-detail [hero]="selectedHero"></my-hero-detail>
            `,
    providers: [HeroService]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heros';
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // Asyncrhonously fetch heros from hero service
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
