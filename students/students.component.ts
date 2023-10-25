import { Component } from '@angular/core';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  rollNumber: string = '';
  studentInfo: any;
  private studentsData: {
    [key: string]: { rollNumber: string; name: string; class: string };
  } = {
    '10': { rollNumber: '10', name: 'Sahil Kokare', class: 'Msc CS-I' },
    '20': { rollNumber: '20', name: 'Aman Inamdar', class: 'Msc Cs-II' },
    '30': { rollNumber: '30', name: 'Mayuresh Pawashe', class: 'Msc CS-II' },
    '40': { rollNumber: '40', name: 'Dnyandip Jadhav', class: 'Msc CS-II' },
  };
  getStudentInfo() {
    this.studentInfo = this.studentsData[this.rollNumber];
  }
  onInput(event: any) {
    this.rollNumber = event.target.value;
  }
}
