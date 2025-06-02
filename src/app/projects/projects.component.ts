import { Component, inject, OnInit, signal } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Projects } from '../model/projects.type';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projectsService = inject(ProjectsService);
  projectsItems = signal<Array<Projects>>([]);

  ngOnInit(): void {
    console.log(this.projectsService.projectsItems);
    this.projectsItems.set(this.projectsService.projectsItems);
  }
}
