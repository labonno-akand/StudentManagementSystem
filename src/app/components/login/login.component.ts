import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public IsSubmitted:boolean;
  constructor(private formService: FormBuilder) {

    this.loginForm = formService.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(5)])
    })
  }

  ngOnInit() {
  }

  OnClick() {
    this.IsSubmitted=true;
    if(this.loginForm.valid){
      alert('form submitted');
    }
  }

  get password(){return this.loginForm.get('password');}
  get username(){return this.loginForm.get('username');}


}
