import { Component } from '@angular/core';
import { Root } from './guerriero.model';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-guerriero',
  templateUrl: './guerriero.component.html',
  styleUrls: ['./guerriero.component.css']
})
export class GuerrieroComponent {
  [x: string]: any;
  data: Root | undefined;
  loading: boolean | undefined;
  guerriero : Observable<Root> | undefined;
  constructor(public http: HttpClient) { }
  visua(): void{
   this.guerriero = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=espada-certera-bantiana');
   this.guerriero.subscribe(this.getData)
  }
  getData = (d : Root) =>
   {
     this.data = (d);
     this.loading = false;
   }
}
