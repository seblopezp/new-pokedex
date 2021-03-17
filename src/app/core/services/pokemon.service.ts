import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as Pokemon from '../models/pokemon.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly url = environment.API_SERVER_URL;
  private imagePath = environment.API_SERVER_IMAGE;
  constructor(private http: HttpClient) {}

  getPokemon(): Observable<Pokemon.Data> {
    return this.http.get<Pokemon.Data>(`${this.url}`);
  }

  getPokemonbyName(name: string): Observable<Pokemon.PokemonInfo> {
    return this.http
      .get<Pokemon.PokemonInfo>(`${this.url}/` + name)
      .pipe(map((res) => res));
  }
}
