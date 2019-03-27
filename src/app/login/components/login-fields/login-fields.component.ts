import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-fields',
  templateUrl: './login-fields.component.html',
  styleUrls: ['./login-fields.component.css']
})
export class LoginFieldsComponent implements OnInit {


  fetching = false;
  login = {
    emailID:"",
    password:""
  }
  errorMessage = ""
  isError: boolean = false;

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }


  loginUser() {
    this.isError = false;
    this.fetching = true;
    if(this.login.emailID.toString()===""||this.login.password.toString()===""){
      this.errorMessage = "All the fields are necessary";
      this.isError= true;
      return
    }
    localStorage.setItem('uuid_auth', 'token');
      this._router.navigate(['/dashboard'])
    // this._auth.loginUser(this.login).subscribe(res => {
      
    // }, error => {
    //   this.fetching = false;
    //   this.errorMessage = error.statusText;
    //   this.isError = true
    // });
  }

}
