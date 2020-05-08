import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateFormComponent} from './template-form/template-form.component';
import { domDirective } from './template-form/template-directive.component';
import { AppMaterialModule } from './material/app.material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    domDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
