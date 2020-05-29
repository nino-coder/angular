import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({

  declarations: [
    AppComponent,
    SignInComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    // ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: SignInComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
