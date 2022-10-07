import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }
  submitted=false;
  form=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    phone:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(9)])
  })

  signUp(){
    console.log(this.form.value)
    this.submitted=true;
  }

  ngOnInit(): void {
  }

}
