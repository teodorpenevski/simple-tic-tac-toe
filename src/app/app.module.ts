import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CellComponent } from './cell/cell.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, TableComponent, CellComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
