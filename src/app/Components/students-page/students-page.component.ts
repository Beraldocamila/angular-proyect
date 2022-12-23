import { Component } from '@angular/core';
import { Student } from 'src/app/models/students.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent {
  students : Student[] = [
    new Student(5, "Angel", "Pedro"),
    new Student(1, "Camila", "Beraldo"),
    new Student(2, "Emilia", "Lopez"),
    new Student(3, "Paula", "Gutierrez"),
    new Student(4, "Francisco", "Perez")
  ]

  displayedColumns= ['id', 'firstname','secondname', 'edit', 'delete']
}
