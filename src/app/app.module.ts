// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Rutas
import { APP_ROUTES } from './app.routes';

import { RegisterComponent } from './login/register.component';
import { FormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    APP_ROUTES,
    FormsModule,
    ServiceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
