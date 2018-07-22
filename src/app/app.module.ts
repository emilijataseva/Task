import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import {HttpClientModule} from '@angular/common/http';
import { PhoneNumberValidatorDirective } from './num-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    PhoneNumberValidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
