import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

export function commonPasswordValidator(control:AbstractControl):ValidationErrors|null
{
  let commonPasswords=["abcd","1234","password"]

  if(control.value && commonPasswords.includes(control.value))
  {
      return {'commonPassword':true}
  }
  else
  {
    return null
  }

}




@Component({
  selector: 'app-formhandling2',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formhandling2.html',
  styleUrl: './formhandling2.css'
})
export class Formhandling2 {

   userForm!:FormGroup;

   constructor(private formbuilder :FormBuilder)
   {
     this.userForm=this.formbuilder.group({
      name:['nisha',[Validators.required,Validators.minLength(3)]],
      email:['a@gmail.com',[Validators.required,Validators.email]],
      password:['',[Validators.required,commonPasswordValidator]]
     })
   }

   onSubmit()
   {
     console.log(this.userForm); 
   }

}
