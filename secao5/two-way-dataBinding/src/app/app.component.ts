import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'two-way-dataBinding';

  name:string = 'Emidio';

  handleNameChange(event: string){
    this.name = event;
  }
}
