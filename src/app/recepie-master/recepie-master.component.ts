import { Component, OnInit } from '@angular/core';

import { RecipeDataService } from '../service/recipe-data.service';
import {Recipe} from '../interface/recipeInterface';

@Component({  
  templateUrl: './recepie-master.component.html',
  styleUrls: ['./recepie-master.component.css']
})
export class RecepieMasterComponent implements OnInit {
  private recipeList : Recipe[];
  constructor(private recipeData: RecipeDataService) { }

  ngOnInit() {
    var data = this.recipeData.getData();    
    data.snapshotChanges().subscribe(item => {
      this.recipeList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.recipeList.push(y as Recipe);
      });
    });
  }
  

}
