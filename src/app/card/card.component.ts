import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from 'src/app/cardDetail/coin.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

export class CardComponent implements OnInit {

  public respuesta:any;

  constructor(private route: ActivatedRoute, private coinService: CoinService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) => {
      const {params} = paramMap
      console.log(params.id)
      this.cargarData(params.id)
    })
  }

  cargarData(id:string) {
    this.coinService.getCoin(id)
    .subscribe(respuesta => {
      this.respuesta = respuesta
    })
  }

}
