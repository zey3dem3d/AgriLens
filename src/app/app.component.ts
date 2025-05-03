import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterOutlet } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';

@Component({
  selector: 'app-root',
  imports: [
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    OurProductsComponent,
    ProjectsComponent,
    ServicesComponent,
    NewsComponent,
    ContactUsComponent,
    OrdersComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AgriLens';
}
