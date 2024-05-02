import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { minLength } from 'class-validator';



@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent{

  userData: FormGroup

  constructor(){
    this.userData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),

      username:  new FormControl('', [Validators.required , Validators.minLength(3)] ),

      password:  new FormControl('', [Validators. required , Validators.minLength(6)] ),
    })
  }

  onSubmit(){
   
    if(this.userData.valid){
      console.log(this.userData.value)
    }else {
      console.log("Not valid")
      PageTransitionEvent
  }
}
}