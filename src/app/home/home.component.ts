import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Coin {
  id: string;
  name: string;
  symbol: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  coins: Coin[] = [];
  filteredCoins: Coin[] = [];
  titles: string[] = [
    'Name',
    'Id',
  ];
  searchText = '';

  constructor(private http: HttpClient) { }

  searchCoin() {
    this.filteredCoins = this.coins.filter(coin => coin.name.toLowerCase().includes(this.searchText.toLocaleLowerCase()))
  }

  ngOnInit(): void {
    this.http
      .get<Coin[]>(
        'https://api.coingecko.com/api/v3/coins/list'
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.coins = res;
          this.filteredCoins = res
        },
        err => console.log(err))
    console.log('cargado...')
  }

}
