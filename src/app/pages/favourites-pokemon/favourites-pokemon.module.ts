import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouritesPokemonPageRoutingModule } from './favourites-pokemon-routing.module';

import { FavouritesPokemonPage } from './favourites-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouritesPokemonPageRoutingModule
  ],
  declarations: [FavouritesPokemonPage]
})
export class FavouritesPokemonPageModule {}
