import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageModule } from './Quiz/quiz/components/start-page/start-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategorySelectorModule } from './Quiz/quiz/components/category-selector/category-selector.module';
import { QuizModule } from './Quiz/quiz/quiz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuizModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
