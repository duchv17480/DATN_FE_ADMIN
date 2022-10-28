import { Router } from '@angular/router';
import { AuthenticationService } from './../../_service/auth-service/authentication.service';
import { TokenStorageService } from './../../_service/token-storage-service/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  roles: string[] = [];
  public user: any = {};

  constructor(
    private tokenStorage: TokenStorageService,
    private auth: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private toast: NgToastService) {

  }

  ngOnInit(): void {
    this.user = {
      username: '',
      password: '',
    };
  }
  submitForm(): void {

    this.auth.login(this.user).subscribe((data) => {

      if (data.success) {
        this.tokenStorage.saveToken(data.data.token);
        this.tokenStorage.saveUser(data.data.username);
        const role = data.data.role[0].authority;
        console.log(role);
        this.toast.success({ summary: 'Login success', duration: 3000 });
        this.router.navigate(['/dashboard']);
        console.log(data)
      } else {
        this.toast.error({ summary: 'Incorrect username or password', sticky: true });
      }

    });

  }


}
