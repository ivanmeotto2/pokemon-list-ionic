import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-favourites-pokemon',
  templateUrl: './favourites-pokemon.page.html',
  styleUrls: ['./favourites-pokemon.page.scss'],
})
export class FavouritesPokemonPage implements OnInit {
  favourites = [];

  constructor(private storage: Storage) {}

  ngOnInit() {}

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
}
