import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MaiMenuComponent } from './header/mai-menu/mai-menu.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, TopHeaderComponent, TopMenuComponent, MaiMenuComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
