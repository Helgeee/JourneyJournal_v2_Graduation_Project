import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent{

  userData: FormGroup

  // обработка userData
  constructor(private readonly authService: AuthService){ 
    this.userData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),

      username:  new FormControl('', [Validators.required , Validators.minLength(1)] ),

      password:  new FormControl('', [Validators. required , Validators.minLength(6)] ),
    })
  }

  //проверка на валидность данных формы
  onSubmit(){
   
    if(this.userData.valid){
      this.authService.signUp(this.userData.value) 
    }else {
      console.log("Not valid") 
  }
}
}