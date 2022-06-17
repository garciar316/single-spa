import { Component, OnInit } from '@angular/core';
import { Result } from '../../models/response.model';
import { PokemonService } from '../../services/pokemon.service';
import { TransferService } from '../../services/transfer.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent implements OnInit {
  constructor(
    private pokemonService: PokemonService,
    private transferService: TransferService
    ) {}

  pokemons!: Result[]

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.pokemonService.getAllPokemon().subscribe({
      next: val => this.pokemons = val,
      error: val => console.error(val)
    })
  }

  getId(url: string): string {
    let elements = url.split('/')
    return elements[elements.length -2]
  }

  setId(url: string) {
    this.transferService.setPokemonId(this.getId(url))
  }
}
