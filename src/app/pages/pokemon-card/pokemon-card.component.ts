import { Component, Input, OnInit } from '@angular/core';
import { PokemonInfo } from 'src/app/core/models/pokemon.model';
import { PokemonService } from '../../core/services/pokemon.service';
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonName?: any;
  pokemonImage: any;
  pokemonInfo: PokemonInfo = new PokemonInfo();
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonInfo();
  }

  getPokemonInfo() {
    this.pokemonService
      .getPokemonbyName(this.pokemonName)
      .subscribe((data: any) => {
        this.pokemonInfo = data;
        console.log(this.pokemonInfo);
        this.pokemonImage =
          'https://pokeres.bastionbot.org/images/pokemon/' +
          data['id'] +
          '.png';
      });
  }
}
