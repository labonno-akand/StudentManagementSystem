import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public IsSubmitted:boolean;
  constructor(private formService: FormBuilder) {

    this.registerForm = formService.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(5)])
    })
  }

  ngOnInit() {
  }

  OnClick() {
    this.IsSubmitted=true;
    if(this.registerForm.valid){
      alert('form submitted');
    }
  }

 
get firstname(){return this.registerForm.get('firstname');}
get lastname(){return this.registerForm.get('lastname');}
get email(){return this.registerForm.get('email');}
get password(){return this.registerForm.get('password');}


}
