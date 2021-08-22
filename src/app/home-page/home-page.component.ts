import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  ingredients = '1 cup rice,\n10 oz chickpeas';
  invalid;
  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
  }
  analyze() {
    const rows: any = this.ingredients.split('\n');
    if (!this.validate(rows)) {
      return;
    }
    this.ingredientsService.analyse(rows);
    
  }
  validate(rows) {
    this.invalid = false;
    for (let row of rows) {
      const items = row.trim().split(' ');
      if (items.length !== 3 || isNaN(items[0])) {
        this.invalid = true;
        return false;
      }
    }
    return true;
  }
  reset() {
    this.ingredients = '';
  }

}
