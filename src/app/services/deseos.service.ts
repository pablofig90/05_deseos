import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  

  constructor() { 
    const lista1 = new Lista('Recolectar piedras');
    const lista2 = new Lista('Desaparecer heroes');

    this.listas.push(lista1, lista2);
    console.log(this.listas);
  }
}
