import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CarouselModule, ButtonModule, ButtonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  standalone: true,
  providers: [],
})
export class ProjectsComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 12,
    autoWidth: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true, // ✅ Start autoplay
    autoplayTimeout: 2000, // ✅ Time between slides (in ms)
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: true,
  };
}
