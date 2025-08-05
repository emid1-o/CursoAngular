import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: false,
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.scss'
})
export class NgIfComponent {

  divOn:boolean = true

  toggleProp(){
   this.divOn = !this.divOn;
  }

}
