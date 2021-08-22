import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {
  
  IngredientsList;
  showDetails = false;
  constructor(private ingredientsService:IngredientsService,private router: Router) { }
  ngOnInit(): void {
    if(!this.ingredientsService.ingredientList){
      this.router.navigate(['']);
    }
    this.IngredientsList = this.ingredientsService.ingredientList;
  }
}
