import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Test description of test recipe', 'http://images.media-allrecipes.com/userphotos/250x250/00/68/79/687910.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
