import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { StudentsComponentComponent } from './students-component/students-component.component';
import { CourseComponentComponent } from './course-component/course-component.component';
import { LearningComponentComponent } from './learning-component/learning-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


export const routes: Routes = [
    { path: '', component: LoginComponentComponent },
    { path: 'home', component: HomeComponentComponent },
    { path: 'student', component: StudentsComponentComponent },
    { path: 'course', component: CourseComponentComponent },
    { path: 'learning', component: LearningComponentComponent },

];

@NgModule({
   
    imports: [RouterModule.forRoot(routes),BrowserModule,FormsModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
