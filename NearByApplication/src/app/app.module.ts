import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListingsComponent } from './product-listings/product-listings.component';

import { HttpClientModule } from '@angular/common/http';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';

import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { MatDialogModule } from '@angular/material/dialog';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListingsComponent,
    DropdownMenuComponent,
    ModalComponent,
    LoginModalComponent,
    ProductModalComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
