import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//imports adicionais
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { BolosComponent } from './components/bolos/bolos.component';
import {MatInputModule} from '@angular/material/input';

//service
import {HttpClientModule} from '@angular/common/http';

//layout moeda
import { DEFAULT_CURRENCY_CODE, LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt,'pt')

//form
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

//dialog
import {MatDialogModule} from '@angular/material/dialog';
import { DialogBoloEditarComponent } from './view/dialog-bolo-editar/dialog-bolo-editar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    BolosComponent,
    DialogBoloEditarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule

  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'pt'
    },
    {
      provide:DEFAULT_CURRENCY_CODE,
      useValue:'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
