import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isScroll: boolean = true;

  @HostListener('window:scroll')
  userScroll() {
    this.isScroll = window.scrollY < 30;
  }
}
