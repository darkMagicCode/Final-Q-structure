import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Core/components/login/login.component';
import { NavbarComponent } from './Core/components/navbar/navbar.component';
import { HomePageComponent } from './Core/components/home-page/home-page.component';
import { SingleProductComponent } from './Core/components/single-product/single-product.component';
import { FooterComponent } from './Core/components/footer/footer.component';
import { PdescPipe } from './shared/pipe/pdesc.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomePageComponent,
    SingleProductComponent,
    FooterComponent,
    PdescPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
