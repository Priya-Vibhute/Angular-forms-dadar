import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formhandling1 } from "./components/formhandling1/formhandling1";
import { Formhandling2 } from "./components/formhandling2/formhandling2";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formhandling1, Formhandling2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'formExamples';
}
