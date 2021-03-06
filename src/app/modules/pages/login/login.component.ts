import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  isError: boolean = false;
  fgUsuario: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService, private fb: FormBuilder){
    //private _toats: ToastrService) {
  }

  ngOnInit() {
    this.fgUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  getErrorMessage() {
    return this.fgUsuario.get('email').hasError('required') ? 'Debes ingresar un valor' :
      this.fgUsuario.get('email').hasError('email') ? 'Email no valido' :
        '';
  }

  onLogin(): void {
    this.authService.loginEmailUser(this.fgUsuario.get('email').value, this.fgUsuario.get('password').value)
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => this.showError(err));
  }

  onLoginGoogle(){
  
  }
  
  onLogout() {
    this.authService.logoutUser();
  }

  showError(err) {
    console.log(err);
    //this._toats.error(err.message);
  }

  onLoginRedirect(): void {
    this.router.navigate(['/app']);
  }

}
