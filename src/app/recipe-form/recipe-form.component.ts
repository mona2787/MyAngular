import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeDataService } from '../service/recipe-data.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { ingredient } from '../interface/recipeInterface';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  @Output() cancelClicked = new EventEmitter();
  addIngr: boolean = false;
  private ingredientForm : FormGroup;
  constructor(private recipeService : RecipeDataService, private _fb : FormBuilder) { }

  ngOnInit() {
    this.createIngredientForm()    
  }
  
  get ingredientRowsArr(): FormArray {
    debugger;
    return this.ingredientForm.get('ingredientRowsArr') as FormArray;
  };

  initIngredientRows(): FormGroup{
      return this._fb.group({
        ingredientName: new FormControl(''),
        ingredientValue : new FormControl(''),
      })


  }

  addRecipe(recipeform : NgForm){  
    console.log("inside add recepie");
    debugger;
    if (recipeform.value.$key == null){
      let ingArr = new Array<ingredient>();
      if(this.ingredientForm != null){
        let control = <FormArray>this.ingredientForm.controls['ingredientRowsArr'];
        for (let i: number =0 ; i<control.controls.length;i++){
          var ingr = new ingredient()
          ingr.ingredientName= control.controls[i].get('ingredientName').value;
          ingr.ingredientValue= control.controls[i].get('ingredientValue').value;
          ingArr.push(ingr);

        }
      }
  let dataJson = recipeform.value;
  dataJson.ingredientArr = ingArr;
    this.recipeService.insertEmployee(dataJson);
    }
  else
    this.recipeService.updateEmployee(recipeform.value);
  this.resetForm(recipeform);  
}
 resetForm(recipeform ?:NgForm){
   if(recipeform !=null)
    recipeform.reset();

    if(this.ingredientForm != null){
      this.ingredientForm.reset();
    }
 
   
 }

 cancelForm(recipeForm ?:NgForm){
   if(recipeForm!= null){
     recipeForm.reset();
   }
   if(this.ingredientForm != null){
     this.ingredientForm.reset();
   }

   this.cancelClicked.emit(null);

 }
 


 addingredient(){  
  // if(this.ingredientForm == null){
    // this.createIngredientForm();
   //}
  // else{  
  let control = <FormArray>this.ingredientForm.controls['ingredientRowsArr'];
  control.push(this.initIngredientRows());
   //}
}

deleteingredient(index: number) {
  let control = <FormArray>this.ingredientForm.controls['ingredientRowsArr'];
  control.removeAt(index);
}

createIngredientForm(){
    this.ingredientForm = this._fb.group({
      ingredientRowsArr: this._fb.array([])
  });
}



  }


