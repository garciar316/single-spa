import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private pokemon_id: BehaviorSubject<string>
  public idObservable: Observable<string>

  constructor() {
    this.pokemon_id = new BehaviorSubject<string>('');
    this.idObservable = this.pokemon_id.asObservable()
  }

  public setPokemonId(id: string) {
    this.pokemon_id.next(id)
  }
}
