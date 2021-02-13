import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as PokemonModel from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly url = environment.API_SERVER_URL;

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<PokemonModel.Pokemon> {
    return this.http.get<PokemonModel.Pokemon>(`${this.url}`);
  }
}
