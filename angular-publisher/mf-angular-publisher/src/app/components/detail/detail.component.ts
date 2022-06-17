import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../services/transfer.service'
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  constructor(
    private pokemonService: PokemonService,
    private transferService: TransferService
  ) {}

  pokemon!: Pokemon
  pokeId!: string

  ngOnInit(): void {
    this.getId()
  }

  getId() {
    this.transferService.idObservable.subscribe({
      next: val => this.getData(val),
      error: err => console.error(err)
    })
  }

  getData(pokeId: string) {
    if(pokeId) {
      this.pokemonService.getPokemon(pokeId).subscribe({
        next: (val) => {
          this.pokemon = val
          this.pokemon.id = Number(pokeId)
        },
        error: (val) => console.error(val),
      });
    }
  }

}
