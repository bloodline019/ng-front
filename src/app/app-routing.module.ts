import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {TipsComponent} from "./tips/tips.component";
import {AnalysisComponent} from "./analysis/analysis.component";

const routes: Routes = [
  {path: "", component:MainMenuComponent},
  {path: "tips", component:TipsComponent},
  {path: "analysis", component:AnalysisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
