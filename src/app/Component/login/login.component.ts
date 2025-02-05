import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Logindetails } from './Module/Logindetails';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


   // Define the form group with form controls
   myform = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern('[a-zA-Z]*'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
  });

  // Initialize logininfo with empty strings, as that's the expected type
  logininfo: Logindetails = {
    username: '',
    password: '',
  };

  router = inject(Router);

  onSubmit() {
    // Ensure the form values are valid before assignment
    if (this.myform.valid) {
      // Direct assignment of form values, ensuring the types are correct
      const { username, password } = this.myform.value;
      this.logininfo.username = username || ''; // Default to empty string if undefined
      this.logininfo.password = password || ''; // Default to empty string if undefined

      // Store the username in session storage
      sessionStorage.setItem('username', this.logininfo.username);

      // Debugging and logic for login validation
      console.log('Login Info:', this.logininfo);
      if (this.logininfo.password === '123') {
        alert('Login Success');
        this.router.navigateByUrl('random');
      } else {
        alert('Invalid password');
      }
    } else {
      // Form is invalid, show error message
      alert('Please fill the form correctly.');
    }
  }
}