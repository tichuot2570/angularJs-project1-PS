import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StartComponent } from './shared/star.component';

@NgModule({
  // our directives, components, and pipes are declared
  // in declaration array
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StartComponent
  ],
  // directives, components, and pipes from othwe sources such as Angular or 3rd parties
  // defined in external Ang module we add to the imports array
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
