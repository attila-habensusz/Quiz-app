import { NgModule } from '@angular/core';
import { QuizComponent } from './quiz.component';
import { CommonModule } from '@angular/common';
import { StartPageModule } from './components/start-page/start-page.module';
import { CategorySelectorModule } from './components/category-selector/category-selector.module';


@NgModule({
    declarations: [
        QuizComponent
    ],
    imports: [
        CommonModule,
        StartPageModule,
        CategorySelectorModule
    ],
    exports: [
        QuizComponent
    ]
})

export class QuizModule { }