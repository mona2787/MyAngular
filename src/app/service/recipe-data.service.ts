import { Injectable } from '@angular/core';

import {Recipe, ingredient} from '../interface/recipeInterface';
import {  AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database/interfaces';


@Injectable()
export class RecipeDataService {

  private recipeList: AngularFireList<any> = null; //  list of objects
  //private recipe: AngularFireObject<Recipe> = null; //   single object

  private basePath: string = '/recepielist';


  constructor(private firebase :AngularFireDatabase ) { }

  
    ngOnInit() {
      this.getData();
      
    }

    getData(){      
      this.recipeList = this.firebase.list('recepielist');
      return this.recipeList;
    }
  insertEmployee(recipe : Recipe)
  {
     if(this.recipeList == null)
       this.recipeList = this.getData();     
    this.recipeList.push({
      title: recipe.title,
      description: recipe.description,
      image: recipe.image,
      ingredientArr: recipe.ingredientArr
     
    });//.catch(error => this.handleError(error));
  
  }

  updateEmployee(recipe : Recipe){
    this.recipeList.update(recipe.$key,
      {
        title: recipe.title,
        description: recipe.description,
        image: recipe.image
        
      }).catch(error => this.handleError(error));
  }

  deleteRecipe($key : string){
    this.recipeList.remove($key).catch(error => this.handleError(error))
    
  }
   private handleError(error){
     console.log("inside Handle Error"
    + error.toString());
   }

}