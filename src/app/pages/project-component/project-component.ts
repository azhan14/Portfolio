import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [MatCardModule, MatIconModule, MatChipsModule, CommonModule, MatButtonModule],
  templateUrl: './project-component.html',
  styleUrl: './project-component.scss',
})
export class ProjectComponent {

  projects = [
    {
      title: "E-commerce Microservices",
      description: "Built a Spring Boot microservices system with API Gateway, Service Registry, and User/Product services. Implemented service discovery and monitoring for scalable, loosely coupled communication.",
      tech: ["Java", "Spring Boot", "Spring Cloud", "API Gateway", "Service Registry", "REST APIs", "Docker", "Prometheus", "Git", "GitHub"],
      githubRepo: ["https://github.com/azhan14/microservices"]
    },
    {
      title: "Angular-Spring Boot Full Stack CRUD Application",
      description: "Built a full-stack CRUD Angular frontend integrated with a backend structure (Spring Boot expected). Showcased modern web development practices combining Angular UI with Java backend APIs.",
      tech: ["Angular", "TypeScript", "Spring Boot", "REST APIs", "HTML", "CSS", "JavaScript", "Angular CLI", "Git", "GitHub"],
      githubRepo: ["https://github.com/azhan14/CoreJava/tree/master/Spring-boot-POC", "https://github.com/azhan14/angular-srping-boot"]
    },
    {
      title: "SwiftLogger - Python Automation and Logging Toolkit",
      description: "Developed SwiftLogger, a Python-based automation and logging toolkit using Selenium and Tkinter with SQLite database support for data capture and UI interaction automation. Handled browser automation, login data storage, and basic logging functionality as part of a utility application.",
      tech: ["Python", "Selenium", "Tkinter", "SQLite", "Automation Scripts", "Logging Utility", "Git", "GitHub"],
      githubRepo: ["https://github.com/azhan14/SwiftLogger"]
    }
  ];

  openLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}