import { Component, Input } from '@angular/core';
import { Root} from './tigre.model';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tigre',
  templateUrl: './tigre.component.html',
  styleUrls: ['./tigre.component.css']
})
export class TigreComponent {
  [x: string]: any;
  data: Root | undefined;
  loading: boolean | undefined;
  tigre : Observable<Root> | undefined;
  constructor(public http: HttpClient) { }
  visualizza(): void{
   this.tigre = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=tigre-al-acecho');
   this.tigre.subscribe(this.getData)
  }
  getData = (d : Root) =>
   {
     this.data = (d);
     this.loading = false;
   }

}
