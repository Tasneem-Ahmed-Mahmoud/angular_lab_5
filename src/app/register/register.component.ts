import { Component } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router:Router){}



registerForm:FormGroup=new FormGroup({

name:new FormControl(null,[Validators.required]),
username:new FormControl(null,[Validators.required,Validators.pattern(`^[a-zA-Z0-9!@#*()+{}[\\];:,|\/\\\\_\S-]+$`)]),
email:new FormControl(null,[Validators.required,Validators.email]),
password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
confirmPassword:new FormControl(null,[Validators.required])

}

)


login(){
  this.router.navigate(['./login'])

  }

submitRegisterForm(){
console.log(this.registerForm)
}


}
