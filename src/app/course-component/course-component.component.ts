import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-course-component',
  imports: [],
  templateUrl: './course-component.component.html',
  styleUrl: './course-component.component.css'
})
export class CourseComponentComponent {
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      initFlowbite();
    }
  }
}
