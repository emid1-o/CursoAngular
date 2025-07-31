import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fundamentos2';

  inputText = "Texto Inicial";
  inputType = "text";
  inputDisable = true;

  inputTurn(){
    if (this.inputDisable === true){
      this.inputDisable = false;
    } else {
      this.inputDisable = true;
    }
  }

  mudaTexto(){
    if (this.inputText === "Texto Inicial"){
      this.inputText = "Outro texto";
    } else {
      this.inputText = "Texto Inicial";
    }
  }

  handleKeyUp(event: KeyboardEvent){
    const currentText = (event.target as HTMLInputElement)
    console.log(currentText.value);
    if (currentText.value.toUpperCase() == "CARRO"){
      alert("digitou carro");
    }
  }
}
