import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemons',
    pathMatch: 'full',
  },
  {
    path: 'pokemons/:id',
    loadChildren: () =>
      import('./pages/pokemon-detail/pokemon-detail.module').then(
        (m) => m.PokemonDetailPageModule
      ),
  },
  {
    path: 'favourites-pokemon',
    loadChildren: () =>
      import('./pages/favourites-pokemon/favourites-pokemon.module').then(
        (m) => m.FavouritesPokemonPageModule
      ),
  },
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./pages/pokemons/pokemons.module').then(
        (m) => m.PokemonsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
