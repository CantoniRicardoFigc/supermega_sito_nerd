import { Component } from '@angular/core';
import { Root } from './drago.model';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drago',
  templateUrl: './drago.component.html',
  styleUrls: ['./drago.component.css']
})
export class DragoComponent {
  [x: string]: any;
  data: Root | undefined;
  loading: boolean | undefined;
  drago: Observable<Root> | undefined;
  constructor(public http: HttpClient) { }
  visua(): void {
    this.drago = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=alabaster-dragon');
    this.drago.subscribe(this.getData)
  }
  getData = (d: Root) => {
    this.data = (d);
    this.loading = false;
  }
}
