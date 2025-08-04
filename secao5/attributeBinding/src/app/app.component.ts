import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'attributeBinding';

  texto = "mudou"

  boolean = false;

  mudaTexto(){
    this.texto = "atualizado"
    this.boolean = !this.boolean;
  }
}
