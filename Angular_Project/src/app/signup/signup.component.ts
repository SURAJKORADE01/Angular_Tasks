import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { signUpDataModel } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone : false
})
export class SignupComponent implements OnInit 
{
  signupForm!: FormGroup
  signDataInsert : signUpDataModel = new signUpDataModel;
  
  constructor(private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router) 
  { }

  ngOnInit(): void 
  {
    this.signupForm = this.formbuilder.group({
      name:['',[Validators.required, Validators.pattern('^[a-zA-Z]+( [a-zA-Z]+)(( +))?$')]],
      email:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      mobile:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      password: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(15),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,15}$')]]
    })
  }

  signUp()
  {
    this.signDataInsert.name = this.signupForm.value.name;
    this.signDataInsert.email = this.signupForm.value.email;
    this.signDataInsert.mobile = this.signupForm.value.mobile;
    this.signDataInsert.password = this.signupForm.value.password;

    this._http.post<any>('http://localhost:3000/signup',this.signupForm.value).subscribe(res=>{
      console.log(res)
      alert('Signup Successfully');
      this.signupForm.reset();
      this._router.navigate(['/login']);
    }), (err: any)=>{
      console.log(err);
      alert('Signup Error');
    }
  }

}
