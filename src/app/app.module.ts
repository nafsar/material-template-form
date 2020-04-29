import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { AppMaterialModule } from './material/app.material.module';
//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/* import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';  */

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
