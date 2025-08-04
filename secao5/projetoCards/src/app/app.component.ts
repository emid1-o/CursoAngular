import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  buttonClicked(){
    console.log('Botão clicado');
  }

  onCardButtonClicked(){
    console.log('cardbuttonclicked')
  }
}
