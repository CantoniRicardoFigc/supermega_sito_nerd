import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TigreComponent } from './tigre/tigre.component';
import { HttpClientModule } from '@angular/common/http';
import { GuerrieroComponent } from './guerriero/guerriero.component';
import { DragoComponent } from './drago/drago.component';
import { MostroComponent } from './mostro/mostro.component';
import { AngeliComponent } from './angeli/angeli.component';

@NgModule({
  declarations: [
    AppComponent,
    TigreComponent,
    GuerrieroComponent,
    DragoComponent,
    MostroComponent,
    AngeliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
