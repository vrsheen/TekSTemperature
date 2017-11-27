import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideRoutes} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatProgressBarModule} from '@angular/material';

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'homepage', component: BaseComponent }
];

import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { TemperatureComponent } from './components/temperature/temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    TemperatureComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule,
    FormsModule, ReactiveFormsModule,MatToolbarModule, MatProgressBarModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
