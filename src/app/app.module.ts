import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearComponent } from './crear/crear.component';
import { LugaresService } from './services/lugares.service';
import { AuthService } from './services/auth.service';
import { Guard } from './services/guard.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const appRoutes: Routes = [
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'crear/:id', component: CrearComponent, canActivate:[Guard]},
  {path:'detalle/:id', component: DetalleComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
];
export const firebaseConfig = {
  apiKey: "AIzaSyAIorn33qd7xR6AOuUNDFwoeoLfRJ12_yc",
  authDomain: "platzisquare-1504802546823.firebaseapp.com",
  databaseURL: "https://platzisquare-1504802546823.firebaseio.com",
  storageBucket: "platzisquare-1504802546823.appspot.com",
  messagingSenderId: "648616634053"
};
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyADsJZNIsL3F3Dbb-fjsESRCawulblXoVM'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [LugaresService, AuthService, Guard],
  bootstrap: [AppComponent]
})
export class AppModule {}
