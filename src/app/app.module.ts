import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TipsComponent } from './tips/tips.component';
import { AnalysysComponent } from './analysys/analysys.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    TipsComponent,
    AnalysysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
