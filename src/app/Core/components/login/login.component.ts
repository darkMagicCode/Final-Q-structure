import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  

  constructor(private _AuthService: AuthService, private _Router: Router) {
  
  }
  
    registerForm: FormGroup  = new FormGroup(
      {
      'username':new FormControl(null,[Validators.required]),
      'password':new FormControl(null,[Validators.required]),
      }
    )
  
    errorMes: string = '';
    loading: boolean = false;
    
    submitRegForm(regForm:FormGroup) {
  
      this._AuthService.signIn(regForm.value).subscribe((data) => {
        if (data.token) {
          console.log('tmm');
          this._Router.navigate(['/home'])
          this.loading = false;
          localStorage.setItem('token', data.token)
          this._AuthService.saveUserData();
          
        }
        else {
          console.log(this.errorMes = data.message);
          this.loading = false;
  
          
        }
      })
    };
    

}
