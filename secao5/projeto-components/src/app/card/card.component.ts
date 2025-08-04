import { Component, Input } from '@angular/core';

function handlePlanType(value: string){
  return value.toUpperCase();
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})



export class CardComponent {


  @Input({alias: 'planType', transform:(value:string)=> handlePlanType(value)})planType:string = '';
  

  @Input({required: true, alias:'planPrice'}) planPrice:number = 0;
  
  eventoo($valueEmitted: boolean){
    alert("classe pai ativada");
    if ($valueEmitted == true){
      console.log(true);
    }
  }
}
