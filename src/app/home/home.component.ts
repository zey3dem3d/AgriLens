import { TestimonialsComponent } from './../testimonials/testimonials.component';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { OurProductsComponent } from '../our-products/our-products.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ServicesComponent } from '../services/services.component';
import { NewsComponent } from '../news/news.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  imports: [
    AboutComponent,
    OurProductsComponent,
    ProjectsComponent,
    ServicesComponent,
    NewsComponent,
    ContactUsComponent,
    TestimonialsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
