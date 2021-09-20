import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {
  results = [];
  search: string = '';
  page: number = 0;
  searched = false;
  favourites = [];
  pageWidth = 0;

  constructor(public dataService: DataService, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.loadFirstResults();
    this.favourites = await this.storage?.get('favourites');
    this.pageWidth = window.innerWidth;
  }

  async loadFirstResults() {
    this.results.splice(0, this.results.length);
    await this.dataService
      .getFirstPokemons(this.page)
      .then((res) => {
        this.searched = false;
        res.results.forEach(async (pokemon) => {
          let detailPokemon = await this.dataService.getPokemonDetails(
            pokemon.url
          );
          this.results.push(detailPokemon);
          this.page += 1;
        });
      })
      .catch(() => {});
  }

  async searchChanged() {
    window.scrollTo(0, 0);
    if (this.search == '' || this.search == null) {
      this.page = 0;
      this.loadFirstResults();
    } else {
      await this.dataService
        .searchData(this.search)
        .then((res) => {
          this.searched = true;
          this.results.splice(0, this.results.length);
          this.results.push(res);
        })
        .catch(() => {});
    }
  }

  async loadMore(event) {
    console.log('ciao');
    if (!this.searched) {
      await this.dataService
        .getFirstPokemons(this.page)
        .then((res) => {
          console.log('ciao');
          res.results.forEach(async (pokemon) => {
            let detailPokemon = await this.dataService.getPokemonDetails(
              pokemon.url
            );
            this.results.push(detailPokemon);
          });
        })
        .catch(() => {});
      console.log(this.searched);
      this.page += 20;
      event.target.complete();
    }
  }

  async addToFavourites(pokemon) {
    console.log(this.favourites === (await this.storage?.get('favourites')));
    if (!this.favourites.includes(pokemon)) {
      this.favourites.push(pokemon);
      this.storage?.set('favourites', this.favourites);
    }
    this.storage?.set('favourites', this.favourites);
  }

  removeFromFavourites(pokemon) {
    this.favourites.splice(this.favourites.indexOf(pokemon), 1);
    this.storage?.set('favourites', this.favourites);
  }

  sortResults() {
    console.log(this.results);
    for (let i = 0; i < this.results.length; i++) {
      for (let j = i + 1; j < this.results.length; j++) {
        if (this.results[i].name > this.results[j].name) {
          var sc = this.results[i].name;
          this.results[i].name = this.results[j].name;
          this.results[j].name = sc;
        }
      }
    }
    console.log(this.results);
  }
}
