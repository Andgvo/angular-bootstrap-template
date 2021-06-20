import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
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
    private fb: FormBuilder){
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
  }

  onLoginGoogle(){ 
  }
  
  onLogout() {    
  }

  showError(err) {
  }

  onLoginRedirect(): void {
    this.router.navigate(['/app']);
  }

}
