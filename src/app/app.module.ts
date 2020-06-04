import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
@NgModule({

  declarations: [
    AppComponent,
    SignInComponent,
    TablesComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '',redirectTo: '/signin', pathMatch: 'full'  },
      { path:'signin', component: SignInComponent},
      { path: 'home', component:TablesComponent},
      { path: 'details/:id', component: DetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
