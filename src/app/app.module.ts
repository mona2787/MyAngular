import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabase, AngularFireDatabaseModule  } from 'angularfire2/database';


import { AppComponent } from './app.component';
import {RecepieRouterModule} from './recipe-router/recipe-router.module';
import { RecepieMasterComponent } from './recepie-master/recepie-master.component';
import { RecepieDetailsComponent } from './recepie-details/recepie-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeDataService } from './service/recipe-data.service';
import { RecepieComponent } from './recepie/recepie.component';


@NgModule({
  declarations: [
    AppComponent,
    RecepieMasterComponent,
    RecepieDetailsComponent,
    ShoppingListComponent,
    RecipeFormComponent,
    RecepieComponent
  ],
  imports: [
    BrowserModule,
    RecepieRouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule    
    
  ],
  providers: [AngularFireDatabase, RecipeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
