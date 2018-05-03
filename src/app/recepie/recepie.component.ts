import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../interface/recipeInterface';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css']
})
export class RecepieComponent implements OnInit {
@Input() recipe :Recipe;
@Input() id :number;
  constructor() { }

  ngOnInit() {
  }

}
