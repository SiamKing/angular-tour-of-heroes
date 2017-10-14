import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li [class.selected]="hero === selectedHero" *ngFor="let hero of heroes" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `
})

export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  title = 'Tour of Heroes';
  selectedHero: Hero;

  heroes: any;
  getHeroes(): void {
    this.heroService.getHeroesSlowly()
      .then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
