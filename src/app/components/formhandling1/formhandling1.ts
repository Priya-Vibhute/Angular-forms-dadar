import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formhandling1',
  imports: [FormsModule],
  templateUrl: './formhandling1.html',
  styleUrl: './formhandling1.css'
})
export class Formhandling1 {

  user={email :"",password:""};

  onSubmit(form : NgForm)
  {
    console.log(form);
    console.log("Form Submitted",this.user);
     
  }

}
