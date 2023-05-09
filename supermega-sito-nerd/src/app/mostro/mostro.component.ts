import { Component } from '@angular/core';
import { Root} from './mostro.model';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mostro',
  templateUrl: './mostro.component.html',
  styleUrls: ['./mostro.component.css']
})
export class MostroComponent {
  [x: string]: any;
  data: Root | undefined;
  loading: boolean | undefined;
  mostro : Observable<Root> | undefined;
  constructor(public http: HttpClient) { }
  ngOnInit(): void{
   this.mostro = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=everquill-phoenix');
   this.mostro.subscribe(this.getData)
  }
  getData = (d : Root) =>
   {
     this.data = (d);
     this.loading = false;
   }
}
