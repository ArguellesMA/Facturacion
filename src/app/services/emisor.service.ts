import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emisor } from '../models/emisor';

@Injectable({
  providedIn: 'root'
})
export class EmisorService {

  selectedEmisor: Emisor;
  emisor: Emisor[];
  readonly URL_API = 'http://localhost:3000/emisor';

  constructor(private http: HttpClient) {
    this.selectedEmisor = new Emisor();
   }

   getEmisor(){
     return this.http.get(this.URL_API);
   }

   postEmisor(Emisor: Emisor){
     return this.http.post(this.URL_API, Emisor);
   }
}
