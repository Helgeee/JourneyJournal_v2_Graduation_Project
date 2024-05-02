import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class loginComponent {
  
  userData: FormGroup

  constructor(){
    this.userData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),

      username:  new FormControl('', [Validators.required , Validators.minLength(3)] ),

      password:  new FormControl('', [Validators.required , Validators.minLength(6)] ),
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
