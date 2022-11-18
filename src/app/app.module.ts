import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastrieDetailComponent } from './pastries/pastrie-detail/pastrie-detail.component';
import { RedDirective } from './pastries/custom/red.directive';
import { TagsPipe } from './pastries/custom/tags.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PastrieDetailComponent,
    RedDirective,
    TagsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
