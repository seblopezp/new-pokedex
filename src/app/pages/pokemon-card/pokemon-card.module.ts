import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card.component';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  declarations: [PokemonCardComponent],
  imports: [CommonModule, SharedModule],
  exports: [PokemonCardComponent],
})
export class PokemonCardModule {}
