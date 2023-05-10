import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Root } from '../tigre/tigre.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  carta!: String | null
  data: Root | undefined;
  loading: boolean | undefined;
  obs_carta : Observable<Root> | undefined;
  constructor(private route: ActivatedRoute, public http: HttpClient) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) =>
  {
    this.carta = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (this.carta); 
    this.obs_carta = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=' + this.carta);
    this.obs_carta.subscribe(this.getData)
  }
  getData = (d : Root) =>
   {
     this.data = (d);
     this.loading = false;
   }
}
