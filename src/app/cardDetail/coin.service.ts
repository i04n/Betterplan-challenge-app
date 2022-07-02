import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  
  id: string = '';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.coingecko.com/api/v3/coins/${this.id}`
   }

   getCoin(id: string) {
    return this.http.get(`${this.URI}${id}`);
   }

}