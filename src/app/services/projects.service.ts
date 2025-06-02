import { Injectable } from '@angular/core';
import { Projects } from '../model/projects.type';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectsItems: Array<Projects> = [
    {
      title: 'Global Visualization',
      description:
        'Forest Data Visualization Dashboard is an interactive web tool that explores global forest coverage using dynamic D3.js visualizations. The choropleth map allows users to zoom, pan, and click on countries to inspect forest area percentages via hover tooltips, with an ESC shortcut to reset the view. A historical timeline enables year-by-year analysis, revealing key environmental events on hover while updating all linked charts. The customizable radar chart lets users select metrics via dropdown menus and inspect values by hovering over data points. Designed for educators and environmental analysts, this project combines HTML, JavaScript, and GeoJSON data to create an intuitive, responsive interface for uncovering spatial and temporal trends in deforestation and conservation efforts.',
      id: 0,
      userId: 1,
      completed: true,
    },
    {
      title: 'Blog Webpage',
      description:
        'The Blog Webpage is a full-stack web app built with Node.js, Express.js, and React.js, designed to provide a complete and easy-to-use blogging platform. Users can create, edit, and delete posts in real time, with a responsive layout that works well on all devices. Data is stored securely using SQLite, with encryption and user login for protection. Caching and load balancing help the app run smoothly and handle more users. The project also follows secure coding practices to keep user data safe.',
      id: 1,
      userId: 1,
      completed: true,
    },
    {
      title: 'Spring Boot API',
      description:
        'The Spring Boot Social Media API is a RESTful backend service developed using Java and the Spring Framework to manage users and messages in a social media context. It supports full user authentication, including login and registration, along with complete CRUD operations for messages. Data persistence is handled efficiently through Spring Data and JDBC, ensuring smooth and reliable storage and retrieval. The project also integrates functionality from Javalin to enhance its flexibility and performance.',
      id: 2,
      userId: 1,
      completed: true,
    },
  ];

  constructor() {}
}
