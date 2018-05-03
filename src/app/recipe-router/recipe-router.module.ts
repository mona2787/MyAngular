import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';

import { RecepieMasterComponent } from '../recepie-master/recepie-master.component';
import { RecepieDetailsComponent } from '../recepie-details/recepie-details.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';


const appRoutes: Routes = [
  { path: 'recipe', component: RecepieMasterComponent,  
   children:[
    { path: ':id',      component: RecepieDetailsComponent} ,
    {path : 'insertrecepie', component : RecipeFormComponent}
   ]},
  {
    path: 'shoppinglist',
    component: ShoppingListComponent,    
  },
  { path: '',
    redirectTo: '/recipe',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/recipe'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports :[
    RouterModule
  ]
  
})


export class RecepieRouterModule { }
