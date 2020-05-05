import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {


  userNamePattern = "[a-zA-Z]*";
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  jobs = ['', 'Consultant', '', 'Engineer', 'Student',
    '', 'Recruiter'];
  submitted = false;
  title = 'name';
  emailAddress = 'Email Address';
  text = 'Message';
  jobRes = ''; titleRes = ''; textRes = '';
  model = new Data('', this.jobs[0], '');



  myname = new FormControl('', [Validators.required, Validators.min(4), Validators.pattern('[a-zA-Z]*')])

  onSubmit(result) {
    this.titleRes = result.name;
    this.jobRes = result.myJobs;
    this.textRes = result.myEmail;
    this.submitted = true;
  }

  refresh(): void {
    window.location.reload();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
export class Data {
  constructor(
    public name?: string,
    public myJobs?: string,
    public myEmail?: string
  ) { }

}