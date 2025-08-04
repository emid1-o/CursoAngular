import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {


  @Input({required: true, alias: 'text'}) buttonText:string = '';

  @Input({required:true, alias:'style'}) buttonStyle: 'white'|'purple' = 'white';

  @Output('clicked') buttonClickedEmmit = new EventEmitter<void>()


  @Input({alias: 'disable'}) isDisabled:boolean = false;
  

  onButtonClicked(){
    this.buttonClickedEmmit.emit();
  }

  

}
