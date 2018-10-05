import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ElementsPage } from '../pages/elements/elements';
import { DataBindingPage } from '../pages/data-binding/data-binding';
import { IfPage } from '../pages/if/if';
import { ForPage } from '../pages/for/for';
import { ForDataPage } from '../pages/for-data/for-data';
import { ComponentPage } from '../pages/component/component';
import { TestComponent } from '../components/test/test';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ElementsPage,
    DataBindingPage,
    IfPage,
    ForPage,
    ForDataPage,
    ComponentPage,
    TestComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ElementsPage,
    DataBindingPage,
    IfPage,
    ForPage,
    ForDataPage,
    ComponentPage,
    TestComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
