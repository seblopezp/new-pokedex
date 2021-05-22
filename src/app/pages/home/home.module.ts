import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PokemonCardModule } from '../pokemon-card/pokemon-card.module';
@NgModule({
  imports: [CommonModule, HomeRoutingModule, PokemonCardModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
