/**
 * Created by TXL8009 on 4/18/2017.
 */

import {Component, Input} from "@angular/core";
@Component({
  selector: 'twitter-frame',
  template: `<div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img class="media-object" [src]="srcLink" alt="...">
                    </a>
                  </div>
                  <div class="media-body">
                      <ng-content select=".header"></ng-content>
                  </div>
                  
                  <span>
                      <ng-content select=".body"></ng-content>
                  </span>
                  
                  <heart-icon [totalLikes]="totalLikes"></heart-icon>
            </div>`
})

export class TwitterFrameComponent{
  @Input() totalLikes : number;
  @Input() srcLink : String;
}
