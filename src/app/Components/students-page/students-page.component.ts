import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/students.model';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent {
  students : Student[] = [
    new Student(1, "Lorena", "Muniz"),
    new Student(2, "Micaela", "Lopez"),
    new Student(3, "Jose", "Pedro"),
    new Student(4, "Romina", "Gutierrez"),
    new Student(5, "Francisco", "Perez")
  ]

  displayedColumns= ['id', 'firstname','lastname', 'edit', 'delete']

  constructor(private readonly dialogService: MatDialog){}

  addStudent(){
    const dialog = this.dialogService.open(StudentDialogComponent)
    dialog.afterClosed().subscribe((value) =>{
      if(value){
        const id= this.students[this.students.length - 1]?.id;
        this.students = [...this.students, (new Student(id + 1, value.firstName, value.lastName))]
      }
    })
  }

  removeStudent(student: Student){
    this.students = this.students.filter((element) => element.id !== student.id);
  }

  editStudent(student:Student){
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: student,
    })

    dialog.afterClosed().subscribe((data) =>{
      if(data){
        this.students = this.students.map((element) => element.id === student.id ? {...element, ...data} : element);

      }
    })

  }
}
