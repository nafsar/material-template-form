import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
   
     name= new FormControl('', [Validators.required, Validators.min(4), Validators.pattern('[a-zA-Z]*')])
  constructor() { }

  ngOnInit(): void {
  }

}
