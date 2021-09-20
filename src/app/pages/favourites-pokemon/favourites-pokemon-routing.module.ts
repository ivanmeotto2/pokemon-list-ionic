import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavouritesPokemonPage } from './favourites-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: FavouritesPokemonPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavouritesPokemonPageRoutingModule {}
