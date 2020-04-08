import { NgModule } from '@angular/core';
import { CategorySelectorComponent } from './category-selector.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        CategorySelectorComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [
        CategorySelectorComponent
    ]
})

export class CategorySelectorModule { }
