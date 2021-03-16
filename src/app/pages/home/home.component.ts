import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PokemonService } from '../../core/services/pokemon.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  pokemon: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    if (localStorage.getItem('dataSource')) {
      this.getPokemon();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  getPokemon() {
    this.pokemonService
      .getPokemon()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.pokemon = data.results;
      });
  }
}
