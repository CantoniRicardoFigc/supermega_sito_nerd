import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TigreComponent } from './tigre/tigre.component';
import { GuerrieroComponent } from './guerriero/guerriero.component';
import { DragoComponent } from './drago/drago.component';
import { MostroComponent } from './mostro/mostro.component';
import { AngeliComponent } from './angeli/angeli.component';
import { CartaComponent } from './carta/carta.component';

const routes: Routes = [
  {path: 'tigre', component: TigreComponent},
  {path: 'guerriero', component: GuerrieroComponent},
  {path: 'drago', component: DragoComponent},
  {path: 'mostro', component: MostroComponent},
  {path: 'angeli', component: AngeliComponent},
  {path: 'carta/:id', component: CartaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
