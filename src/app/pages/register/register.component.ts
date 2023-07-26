import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;
  status = {
    btnStatus: 'Get started',
    inputStatus:'Email Status'
  }


  constructor(private fb: FormBuilder) {

  }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  clickHandle() {
    if (this.registerForm.get("email")?.value ) {
      // this.status = {
      //   btnStatus:'Start',
      //   inputStatus: 'password'
      // }

      this.status.btnStatus = 'Start'
      this.status.inputStatus = 'password'
    }
  }

}
