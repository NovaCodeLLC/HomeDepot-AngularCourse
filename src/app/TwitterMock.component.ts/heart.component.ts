/**
 * Created by TXL8009 on 4/18/2017.
 */

import {Component, Input} from "@angular/core";

@Component({
  selector: 'heart-icon',
  template: `<i class="glyphicon"
                [ngClass]="isFavorite ? 'glyphicon-asterisk pink' : 'glyphicon-heart lightgray'"
                (click)="onClick()"></i>
                <span>{{totalLikes}}</span>`,
  styles: [`
               .pink{
                color: deeppink;
                cursor: pointer;
               }
               .lightgray{
                color: lightgray;
                fill: lightgray;
                cursor: pointer;
               }
            `],
})

export class HeartComponent  {
  @Input () isFavorite = false;
  @Input() totalLikes : number;

  constructor(){}

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.totalLikes += this.isFavorite ? 1 : -1;
  }
}
