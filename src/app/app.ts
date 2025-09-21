import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formhandling1 } from "./components/formhandling1/formhandling1";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formhandling1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'formExamples';
}
