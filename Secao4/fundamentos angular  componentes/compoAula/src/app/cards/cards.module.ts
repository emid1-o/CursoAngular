import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';



@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardRoxoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardRoxoComponent
  ]
})
export class CardsModule { }
