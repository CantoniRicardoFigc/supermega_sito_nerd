import { Component, Input, OnInit } from '@angular/core';
import { Root} from './tigre.model';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tigre',
  templateUrl: './tigre.component.html',
  styleUrls: ['./tigre.component.css']
})
export class TigreComponent implements OnInit {
  [x: string]: any;
  data: Root | undefined;
  loading: boolean | undefined;
  tigre : Observable<Root> | undefined;
  constructor(public http: HttpClient) { }
  ngOnInit(): void {
    this.tigre = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=tigre-al-acecho');
    this.tigre.subscribe(this.getData)
  }
  getData = (d : Root) =>
   {
     this.data = (d);
     this.loading = false;
   }

}
