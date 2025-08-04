import { Component } from '@angular/core';

@Component({
  selector: 'app-stylecomp',
  standalone: false,
  templateUrl: './stylecomp.component.html',
  styleUrl: './stylecomp.component.scss'
})
export class StylecompComponent {

  widthButton = '600px';

  tamanhos = {
    width: '150px',
    backgroundColor: 'grey'
  }

  mudarTamanho() {
    if (this.tamanhos.width === '150px') {

      this.tamanhos = {
        width: '300px',
        backgroundColor: 'grey'
      }

    } else if (this.tamanhos.width === '300px') {

      this.tamanhos = {
        width: '700px',
        backgroundColor: 'grey'
      }
    } else if (this.tamanhos.width === '700px') {

      this.tamanhos = {
        width: '1000px',
        backgroundColor: 'grey'
      }
    } else {
      this.tamanhos = {
        width: '150px',
        backgroundColor: 'grey'
      }
    }

  }

}
