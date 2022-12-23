import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { SectionComponent } from './Components/section/section.component';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { ValidatorsErrorsComponent } from './Components/validators-errors/validators-errors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { StudentsPageComponent } from './Components/students-page/students-page.component';
import { MenuComponent } from "./Components/menu/menu.component";


@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        SectionComponent,
        RegisterFormComponent,
        ValidatorsErrorsComponent,
        StudentsPageComponent,
        MenuComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule
        
    ]
})
export class AppModule { }
