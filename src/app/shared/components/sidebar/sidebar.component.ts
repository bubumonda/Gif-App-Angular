import { Component } from '@angular/core';
import { GifsServices } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  /**
   *
   */
  constructor(private gifsServices:GifsServices) {}

  get tagsList():string[]{
    return this.gifsServices.tagsHistory;
  }

   searchTag(tag:string):void{
    this.gifsServices.searchTag(tag);
  }

}
