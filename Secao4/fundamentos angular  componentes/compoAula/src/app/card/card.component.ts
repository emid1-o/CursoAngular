import { Component } from '@angular/core';


interface Icards {

  infos: Iinfos;
}

interface Iinfos {
  nome: string, valor: number;
}

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  //@ts-ignore
  card: Icards = {
    infos: {
      nome: "teste",
      valor: 100
    }
  }
    

  

}
