import { Component } from '@angular/core';
import { Root } from './angeli.model';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-angeli',
  templateUrl: './angeli.component.html',
  styleUrls: ['./angeli.component.css']
})
export class AngeliComponent {
  [x: string]: any;
  data: Root | undefined;
  loading: boolean | undefined;
  angeli: Observable<Root> | undefined;
  constructor(public http: HttpClient) { }
  visua(): void {
    this.angeli = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=mentor-of-evos-isle');
    this.angeli.subscribe(this.getData)
  }
  getData = (d: Root) => {
    this.data = (d);
    this.loading = false;
  }
}
