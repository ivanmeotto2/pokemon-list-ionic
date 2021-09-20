import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  details = null;
  species = null;
  evolutionChain = null;

  constructor(
    public dataService: DataService,
    public activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getData(id);
    this.getSpecies(id);
  }

  async getData(id) {
    try {
      await this.dataService
        .getPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
          this.details = res;
        });
    } catch (error) {
      console.log(error);
    }
  }

  async getSpecies(id) {
    try {
      await this.dataService.getSpecies(id).then((res) => {
        this.species = res;
      });
    } catch (error) {
      console.log(error);
    }
  }
}
