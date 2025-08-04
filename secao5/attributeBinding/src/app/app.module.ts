import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StylecompComponent } from './components/stylecomp/stylecomp.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    StylecompComponent,
    ClassBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
