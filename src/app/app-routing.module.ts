import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './Quiz/quiz/components/start-page/start-page.component';
import { QuizComponent } from './Quiz/quiz/quiz.component';


const routes: Routes = [
  {path: '', component: QuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
