import { NgModule } from '@angular/core';
import { StartPageComponent } from './start-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        StartPageComponent
    ],
    imports: [
        MatCardModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule
    ],
    exports: [
        StartPageComponent
    ]
})

export class StartPageModule { }