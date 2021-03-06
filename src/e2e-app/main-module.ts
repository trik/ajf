import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {E2eApp} from './e2e-app';
import {E2eAppModule} from './e2e-app/e2e-app-module';
import {E2E_APP_ROUTES} from './e2e-app/routes';
import {FileInputE2eModule} from './file-input/file-input-e2e-module';
import {IonicCalendarE2eModule} from './ion-calendar/calendar-e2e-module';
import {IonicDateInputFieldE2eModule} from './ion-date-input-field/date-input-field-e2e-module';
import {IonicTableFieldE2eModule} from './ion-table-field/table-field-e2e-module';
import {MaterialCalendarE2eModule} from './mat-calendar/calendar-e2e-module';
import {MaterialDateInputFieldE2eModule} from './mat-date-input-field/date-input-field-e2e-module';
import {MaterialTableFieldE2eModule} from './mat-table-field/table-field-e2e-module';

@NgModule({
  imports: [
    BrowserModule,
    E2eAppModule,
    IonicModule.forRoot(),
    NoopAnimationsModule,
    RouterModule.forRoot(E2E_APP_ROUTES),
    TranslateModule.forRoot(),

    // E2E demos
    FileInputE2eModule,
    IonicCalendarE2eModule,
    IonicDateInputFieldE2eModule,
    IonicTableFieldE2eModule,
    MaterialCalendarE2eModule,
    MaterialDateInputFieldE2eModule,
    MaterialTableFieldE2eModule,
  ],
  declarations: [
    E2eApp,
  ],
  bootstrap: [
    E2eApp,
  ],
})
export class MainModule {
}
