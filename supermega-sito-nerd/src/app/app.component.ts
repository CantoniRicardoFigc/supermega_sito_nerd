import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from './tigre/tigre.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartaSearch !: String;
  obsCard !: Observable<Root>;
  ris !: Root;

  constructor(private http : HttpClient) {}
  
  ricercaApi(cartaCercata : HTMLInputElement) {
    this.cartaSearch = cartaCercata.value;
    this.obsCard = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=' + this.cartaSearch)
    this.obsCard.subscribe((data : Root)=>(this.ris = (data)))
  }
}
