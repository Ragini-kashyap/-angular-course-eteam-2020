import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginInfo: any = {
    email: 'eve.holt@reqres.in',
    password: 'pistol'
  };
  router: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginHandler(loginFormData: any): void {
    console.log('harry' , loginFormData.value);

    this.authService.login(loginFormData.value)
      .subscribe((res: any) => {
        console.log('myresponse', res);
        console.log('myresponsetokem', res.token);

        if (res && res.token) {
          this.authService.saveToken(res.token);
          // todo: redirect the user to home page

          sessionStorage.setItem('token', res.token);
        }
      });
  }

}
