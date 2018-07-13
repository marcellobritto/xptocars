import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private httpClient: HttpClient) { }

  getVeiculos(): Observable<any> {
    return this.httpClient.get('./assets/veiculos.json');
  }

}
