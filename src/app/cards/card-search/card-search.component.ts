import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent{

  constructor(
    private cardService:CardService
  ) { }
  
  search(searchText:string):void{
    searchText=searchText.toLocaleLowerCase();
    this.cardService.filteredCards=this.cardService.cards.filter((card)=>{
      return card.title.toLocaleLowerCase().indexOf(searchText)> -1||(card.name&&card.name.toLocaleLowerCase().indexOf(searchText)> -1);
    });
    // console.log(this.cardService.filteredCards);
  }

}
