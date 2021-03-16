import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonName?: string;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  getPokemonInfo() {
    //   this.pokemonService
    //     .getPokemonbyName(this.pokemonInfo['name'])
    //     .subscribe((data: any) => {
    //       this.pokemonImage =
    //         'https://pokeres.bastionbot.org/images/pokemon/' +
    //         data['id'] +
    //         '.png';
    //     });
    // });
  }
}
