import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemon = {};
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService.getPokemon().subscribe((data) => {
      this.pokemon = data;
      console.log('datos', this.pokemon);
      console.log('tipo', typeof this.pokemon);
    });
  }
}
