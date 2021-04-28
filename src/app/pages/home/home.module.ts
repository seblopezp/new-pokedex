import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PokemonCardModule } from '../pokemon-card/pokemon-card.module';
import { PaginationModule } from '../pagination/pagination.module';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PokemonCardModule,
    PaginationModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
