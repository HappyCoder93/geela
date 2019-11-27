import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* import AngularFireModule and environment.ts for Firebase configuration */
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
/* import AngularFireAuthModule for authentication */
import { AngularFireAuthModule } from '@angular/fire/auth';
/* import AngularFirestoreModule for Cloud Firestore */
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [

  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ScreenOrientation
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
