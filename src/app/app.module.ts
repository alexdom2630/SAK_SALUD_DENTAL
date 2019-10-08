import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { PruebaPage } from '../pages/prueba/prueba';
import { MediaPage } from '../pages/media/media';
import { DetailsPage } from '../pages/details/details';
import { DetailsmediaPage } from '../pages/detailsmedia/detailsmedia';
import { DetailsvidPage } from '../pages/detailsvid/detailsvid';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


const firebaseAuth = {
    apiKey: "AIzaSyCn0ZlnoiYqFydU_FTGnWh1cakW5pr6-gw",
    authDomain: "test-project-911e6.firebaseapp.com",
    databaseURL: "https://test-project-911e6.firebaseio.com",
    projectId: "test-project-911e6",
    storageBucket: "",
    messagingSenderId: "842797673713",
    appId: "1:842797673713:web:63da21812f18e66e068d50"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    PruebaPage,
    MediaPage,
    DetailsPage,
    DetailsmediaPage,
    DetailsvidPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    PruebaPage,
    MediaPage,
    DetailsPage,
    DetailsmediaPage,
    DetailsvidPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
