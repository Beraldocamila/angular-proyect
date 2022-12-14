import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  firstNameControl = new FormControl('',[Validators.required])
  lastNameControl = new FormControl('', [Validators.required])
  emailControl = new FormControl('', [Validators.required, Validators.email])
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6), this.matchPasswordValidators])
  repeatPasswordControl = new FormControl('', [Validators.required, Validators.minLength(6), this.matchPasswordValidators])
  checkControl = new FormControl(false, [Validators.requiredTrue])

  registerForm = new FormGroup({
    firstName : this.firstNameControl,
    lastName : this.lastNameControl,
    email : this.emailControl,
    password : this.passwordControl,
    repeatPassword : this.repeatPasswordControl,
    check : this.checkControl,
  }, {
    validators: [
      this.matchPasswordValidators
    ]
  })

  matchPasswordValidators(){
    return () =>{
      if(this.passwordControl.value !== this.repeatPasswordControl.value){
        return{
          passwordsMatch: true
        }
      }
      return false
    }
  }

}
