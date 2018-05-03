import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';



@Component({    
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  
  deleteIngrVal : boolean = false;

  shoppingListForm: FormGroup;
  get name() {
    return this.shoppingListForm.get('name');
  }
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.shoppingListForm = new FormGroup({
      name: new FormControl('', [
        Validators.required, 
        Validators.maxLength(20), 
        Validators.minLength(8)
        
      ]),
      number: new FormControl(''),
      ingredients: new FormArray([])
    });
  }

  addIngr() {
    debugger;
    console.log('inside add');
    let valueIngr = this.shoppingListForm.controls.name.value+"("+ this.shoppingListForm.controls.number.value+")";
   
    (<FormArray>this.shoppingListForm.get('ingredients')).push(this._fb.group({
      ingredient : new FormControl('HI')}));
     
  
  }

  clearIngr(){
    this.shoppingListForm.reset();
    this.deleteIngrVal= false;
  }


  deleteIngr(){
    this.deleteIngrVal= true;
  }
  deleteIngredient(index) {
    (<FormArray>this.shoppingListForm.get('ingredients')).removeAt(index);
  }




}
