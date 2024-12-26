import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone : false

})

export class LoginComponent implements OnInit 
{
  public lemail : string;
  public lpass : string;
  public bFlag : boolean = true;

  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router ) 
  {
    this.lemail = "";
    this.lpass = "";
  }

  ngOnInit(): void 
  {
    this.loginForm = this.formbuilder.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  public CheckCredential(checkemail : string, checkpassword : string)
  {
    if((checkemail == "surajkorade5456@gmail.com") && (checkpassword == "Suraj@01012003") || 
       (checkemail == "admin@gmail.com") && (checkpassword == "Admin@123"))
    {
      alert("Marvellous" + ' logged in successfully');
          this._router.navigate(['/restaurent']);
          this.loginForm.reset();
    }  

    else
    {
      alert("Please enter the valid credentials.");
      this.loginForm.reset();
    }
  }

  logIn() 
  {
    // console.log(this.loginForm.value);
    //       alert("Marvellous" + ' logged in successfully');
    //       this._router.navigate(['/restaurent']);
    //       this.loginForm.reset();    
  }
}
