import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngFor';

  personSelectedIndex: number | undefined;

  listPessoas = [
    {nome: 'Felipe Freitas', idade: 26},
    {nome: 'Fulano da Silva', idade: 22},
    {nome: 'Jorginho Carvalho', idade: 34},
    {nome: 'Joaozinho da Silva', idade: 18}
  ];

  selectPerson(i: number){
    this.personSelectedIndex = i;
  }
}
