import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient: HttpClient) {}

  getFirstPokemons(currentPage?): Promise<any> {
    return this.httpClient
      .get(`${this.url}pokemon/?limit=20&offset=${currentPage}`)
      .toPromise();
  }

  searchData(name: String): Promise<any> {
    return this.httpClient.get(`${this.url}pokemon/${name}`).toPromise();
  }

  getPokemonDetails(url): Promise<any> {
    return this.httpClient.get(url).toPromise();
  }

  getSpecies(id: string): Promise<any> {
    return this.httpClient.get(`${this.url}pokemon-species/${id}`).toPromise();
  }

  getEvolutionChain(url): Promise<any> {
    return this.httpClient.get(url).toPromise();
  }
}
