import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  ingredientList;
  constructor(private httpServiceService: HttpServiceService, private router: Router) { }

  analyse(rows) {
    this.httpServiceService.post('nutrition-details', { ingr: rows }).subscribe((res) => {
      this.ingredientList = res;
      this.router.navigate(['/ingredients']);
    })
  }
}
