import { Component, OnInit, OnDestroy  } from '@angular/core';
import { FormGroup, FormControl, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements   OnInit, OnDestroy {

  // Inject the AuthService and Router services
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  
  errorMes: string = ''; // A string to hold any error messages
  loading: boolean = false; // A boolean to indicate whether the form is being submitted
  
  ngOnInit() {
    console.log('Component initialized');
  }
  // Create a FormGroup with two FormControls for the username and password
  registerForm: FormGroup  = new FormGroup({
    'username': new FormControl(null, [Validators.required]),
    'password': new FormControl(null, [Validators.required])
  });


  // A method to submit the registration form
  submitRegForm(regForm: FormGroup) {
    // Set the loading property to true
    this.loading = true;

    // Call the signIn method of the AuthService with the form values
    this._AuthService.signIn(regForm.value).subscribe((data) => {
      // If the response includes a token
      if (data.token) {
        this.loading = false;
        this._Router.navigate(['/home']);
        localStorage.setItem('token', data.token);
        // Save the user data using the AuthService
        this._AuthService.saveUserData();
      }
      // If the response does not include a token
      else {
        // Set the errorMes property to the error message
        console.log(this.errorMes = data.message);
        // Set the loading property to false
        this.loading = false;
      }
    });
  }
  ngOnDestroy() {
    console.log('Component about to be destroyed');
  }
}
