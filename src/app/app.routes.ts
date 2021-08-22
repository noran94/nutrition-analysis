import { Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { IngredientsListComponent } from "./ingredients-list/ingredients-list.component";

export const AppRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'ingredients', component: IngredientsListComponent },

];
